#!/usr/bin/env node
'use strict';

const fs       = require('fs');
const path     = require('path');
const os       = require('os');
const readline = require('readline');

// ANSI colors — suppressed when not a TTY
const isTTY = process.stdout.isTTY;
const bold   = isTTY ? '\x1b[1m'  : '';
const dim    = isTTY ? '\x1b[2m'  : '';
const green  = isTTY ? '\x1b[32m' : '';
const cyan   = isTTY ? '\x1b[36m' : '';
const yellow = isTTY ? '\x1b[33m' : '';
const red    = isTTY ? '\x1b[31m' : '';
const reset  = isTTY ? '\x1b[0m'  : '';

function log(msg = '')  { process.stdout.write(msg + '\n'); }
function err(msg)       { process.stderr.write(`${red}error:${reset} ${msg}\n`); }
function warn(msg)      { process.stderr.write(`${yellow}warn:${reset}  ${msg}\n`); }

// ---------------------------------------------------------------------------
// Scope resolution
// ---------------------------------------------------------------------------

const SCOPES = {
  user: {
    label: 'User',
    description: 'available in all projects',
    skillsDir: path.join(os.homedir(), '.claude', 'skills'),
  },
  project: {
    label: 'Project',
    description: `this project only  ${dim}(${process.cwd()})${reset}`,
    skillsDir: path.join(process.cwd(), '.claude', 'skills'),
  },
};

const SKILLS_SRC = path.join(__dirname, '..', 'skills');

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  log(`
${bold}skills-for-humanity${reset} — structured thinking tools for Claude Code

${bold}Usage:${reset}
  npx @human-avatar/skills-for-humanity [options]

${bold}Options:${reset}
  ${cyan}--scope user|project${reset}  Install scope (prompted if omitted)
                        ${dim}user:    ~/.claude/skills/  — all projects${reset}
                        ${dim}project: ./.claude/skills/  — this project only${reset}
  ${cyan}--uninstall${reset}           Remove installed skills
  ${cyan}--help${reset}                Show this help message

${bold}After install:${reset}
  Restart Claude Code and type ${cyan}/human${reset} to get started.
  Or jump straight to a category: ${cyan}/ethics${reset} ${cyan}/logic${reset} ${cyan}/creativity${reset}
`);
  process.exit(0);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

function removeDir(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
}

function ourSkillNames() {
  return fs.readdirSync(SKILLS_SRC, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function prompt(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(question, (answer) => { rl.close(); resolve(answer.trim()); });
  });
}

async function askScope() {
  log(`${bold}Where should the skills be installed?${reset}`);
  log();
  log(`  ${cyan}1) User${reset}    — available in all projects  ${dim}(~/.claude/skills/)${reset}`);
  log(`  ${cyan}2) Project${reset} — this project only           ${dim}(./.claude/skills/)${reset}`);
  log();

  while (true) {
    const answer = await prompt(`Enter ${cyan}1${reset} or ${cyan}2${reset}: `);
    if (answer === '1') return 'user';
    if (answer === '2') return 'project';
    log(`${yellow}Please enter 1 or 2.${reset}`);
  }
}

// ---------------------------------------------------------------------------
// Resolve scope + paths
// ---------------------------------------------------------------------------

async function resolveTarget() {
  // --scope flag skips the interactive prompt
  const scopeFlag = args.indexOf('--scope');
  if (scopeFlag !== -1 && args[scopeFlag + 1]) {
    const key = args[scopeFlag + 1].toLowerCase();
    if (!SCOPES[key]) {
      err(`Unknown scope "${key}". Use "user" or "project".`);
      process.exit(1);
    }
    return SCOPES[key];
  }

  // Non-interactive fallback (CI, pipes)
  if (!isTTY) return SCOPES.user;

  // Interactive prompt
  const key = await askScope();
  log();
  return SCOPES[key];
}

// ---------------------------------------------------------------------------
// Migrate: remove legacy pluginDirectories entry if present
// ---------------------------------------------------------------------------

function cleanLegacySettings(settingsPath, legacyDir) {
  if (!fs.existsSync(settingsPath)) return;
  try {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    if (!Array.isArray(settings.pluginDirectories)) return;
    const before = settings.pluginDirectories.length;
    settings.pluginDirectories = settings.pluginDirectories.filter(
      (d) => !path.resolve(d).includes('skills-for-humanity')
    );
    if (settings.pluginDirectories.length < before) {
      fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
      log(`${dim}→ Removed legacy pluginDirectories entry from ${settingsPath}${reset}`);
    }
  } catch { /* ignore */ }
}

// ---------------------------------------------------------------------------
// Uninstall
// ---------------------------------------------------------------------------

async function uninstall() {
  log();
  log(`${bold}Uninstalling skills-for-humanity…${reset}`);
  log();

  const target = await resolveTarget();
  const { skillsDir } = target;

  const names = ourSkillNames();
  let removed = 0;
  for (const name of names) {
    const dest = path.join(skillsDir, name);
    if (fs.existsSync(dest)) {
      removeDir(dest);
      removed++;
    }
  }

  log(`${green}✓${reset} Removed ${removed} skills from ${dim}${skillsDir}${reset}`);

  // Clean up legacy pluginDirectories entry if present
  const settingsPath = path.join(path.dirname(skillsDir), 'settings.json');
  cleanLegacySettings(settingsPath, skillsDir);

  log();
  log(`${dim}Uninstall complete.${reset}`);
  log();
}

// ---------------------------------------------------------------------------
// Install
// ---------------------------------------------------------------------------

async function install() {
  log();
  log(`${bold}${cyan}skills-for-humanity${reset}`);
  log(`${dim}structured thinking tools for Claude Code${reset}`);
  log();

  const target = await resolveTarget();
  const { skillsDir } = target;

  // Copy each skill into the skills directory
  const names = ourSkillNames();
  const isUpdate = names.some((n) => fs.existsSync(path.join(skillsDir, n)));
  log(`${isUpdate ? 'Updating' : 'Installing'} ${names.length} skills to ${yellow}${skillsDir}${reset}…`);

  // Remove stale skills — previous versions used unprefixed names (e.g. "logic" → "s4h-logic")
  const currentSet = new Set(names);
  if (fs.existsSync(skillsDir)) {
    for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const unprefixed = entry.name.replace(/^s4h-?/, '');
      const isOurs = currentSet.has(entry.name) || names.some((n) => n.replace(/^s4h-?/, '') === unprefixed);
      if (isOurs && !currentSet.has(entry.name)) {
        removeDir(path.join(skillsDir, entry.name));
      }
    }
  }

  try {
    for (const name of names) {
      copyDir(path.join(SKILLS_SRC, name), path.join(skillsDir, name));
    }
    log(`${green}✓${reset} ${names.length} skills ${isUpdate ? 'updated' : 'installed'}`);
  } catch (e) {
    err(`Could not copy skills: ${e.message}`);
    process.exit(1);
  }

  // Clean up legacy pluginDirectories entry if present
  const settingsPath = path.join(path.dirname(skillsDir), 'settings.json');
  cleanLegacySettings(settingsPath, skillsDir);

  // Done
  log();
  log(`${bold}Done.${reset} Restart Claude Code, then:`);
  log(`  ${cyan}/s4h${reset}      ${dim}— route to the right skill${reset}`);
  log(`  ${cyan}/s4h-ethics${reset}     ${dim}— ethical analysis${reset}`);
  log(`  ${cyan}/s4h-logic${reset}      ${dim}— validate and pressure-test reasoning${reset}`);
  log(`  ${cyan}/s4h-creativity${reset} ${dim}— de Bono suite + brainstorm${reset}`);
  log(`  ${cyan}/s4h-decision${reset}   ${dim}— premortem, criteria weighting, option mapping${reset}`);
  log();
}

// ---------------------------------------------------------------------------
// Entry
// ---------------------------------------------------------------------------

(async () => {
  if (args.includes('--uninstall')) {
    await uninstall();
  } else {
    await install();
  }
})().catch((e) => {
  err(e.message);
  process.exit(1);
});
