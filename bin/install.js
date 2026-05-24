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
    pluginsDir: path.join(os.homedir(), '.claude', 'plugins', 'skills-for-humanity'),
    settingsPath: path.join(os.homedir(), '.claude', 'settings.json'),
  },
  project: {
    label: 'Project',
    description: `this project only  ${dim}(${process.cwd()})${reset}`,
    pluginsDir: path.join(process.cwd(), '.claude', 'plugins', 'skills-for-humanity'),
    settingsPath: path.join(process.cwd(), '.claude', 'settings.json'),
  },
};

const SKILLS_SRC = path.join(__dirname, '..', 'skills');

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  log(`
${bold}skills-for-humanity${reset} — 93 structured thinking tools for Claude Code

${bold}Usage:${reset}
  npx @human-avatar/skills-for-humanity [options]

${bold}Options:${reset}
  ${cyan}--scope user|project${reset}  Install scope (prompted if omitted)
                        ${dim}user:    ~/.claude/  — all projects${reset}
                        ${dim}project: ./.claude/  — this project only${reset}
  ${cyan}--dir <path>${reset}          Install to a custom directory (skips scope prompt)
  ${cyan}--uninstall${reset}           Remove skills and clean up settings.json
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

function readSettings(settingsPath) {
  if (!fs.existsSync(settingsPath)) return {};
  try { return JSON.parse(fs.readFileSync(settingsPath, 'utf8')); }
  catch { return {}; }
}

function writeSettings(settingsPath, settings) {
  fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
  fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2) + '\n');
}

function countDirs(dir) {
  try { return fs.readdirSync(dir, { withFileTypes: true }).filter((e) => e.isDirectory()).length; }
  catch { return '?'; }
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
  log(`  ${cyan}1) User${reset}    — available in all projects  ${dim}(~/.claude/)${reset}`);
  log(`  ${cyan}2) Project${reset} — this project only           ${dim}(./.claude/)${reset}`);
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
  // --dir takes precedence, skips scope prompt entirely
  const dirFlag = args.indexOf('--dir');
  if (dirFlag !== -1 && args[dirFlag + 1]) {
    const custom = path.resolve(args[dirFlag + 1]);
    // For custom dirs, write settings next to the dir's .claude parent if it exists,
    // otherwise fall back to user settings.
    const customSettings = path.join(path.dirname(custom), 'settings.json');
    return { pluginsDir: custom, settingsPath: customSettings };
  }

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
// Uninstall
// ---------------------------------------------------------------------------

async function uninstall() {
  log();
  log(`${bold}Uninstalling skills-for-humanity…${reset}`);
  log();

  const target = await resolveTarget();

  removeDir(target.pluginsDir);
  log(`${green}✓${reset} Removed ${dim}${target.pluginsDir}${reset}`);

  try {
    const settings = readSettings(target.settingsPath);
    if (Array.isArray(settings.pluginDirectories)) {
      const before = settings.pluginDirectories.length;
      settings.pluginDirectories = settings.pluginDirectories.filter(
        (d) => path.resolve(d) !== path.resolve(target.pluginsDir)
      );
      if (settings.pluginDirectories.length < before) {
        writeSettings(target.settingsPath, settings);
        log(`${green}✓${reset} Removed from ${dim}${target.settingsPath}${reset}`);
      } else {
        log(`${dim}→ Not found in settings — nothing to remove${reset}`);
      }
    }
  } catch (e) {
    warn(`Could not update settings.json: ${e.message}`);
  }

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
  log(`${dim}93 structured thinking tools for Claude Code${reset}`);
  log();

  const target = await resolveTarget();
  const { pluginsDir, settingsPath } = target;

  // 1. Copy skills
  const isUpdate = fs.existsSync(pluginsDir);
  log(`${isUpdate ? 'Updating' : 'Installing'} skills to ${yellow}${pluginsDir}${reset}…`);

  try {
    copyDir(SKILLS_SRC, pluginsDir);
    log(`${green}✓${reset} Skills ${isUpdate ? 'updated' : 'installed'} (${countDirs(pluginsDir)} skills)`);
  } catch (e) {
    err(`Could not copy skills: ${e.message}`);
    process.exit(1);
  }

  // 2. Register in settings.json
  try {
    const settings = readSettings(settingsPath);
    if (!Array.isArray(settings.pluginDirectories)) settings.pluginDirectories = [];

    const already = settings.pluginDirectories.some(
      (d) => path.resolve(d) === path.resolve(pluginsDir)
    );

    if (!already) {
      settings.pluginDirectories.push(pluginsDir);
      writeSettings(settingsPath, settings);
      log(`${green}✓${reset} Registered in ${dim}${settingsPath}${reset}`);
    } else {
      log(`${dim}→ Already registered in ${settingsPath}${reset}`);
    }
  } catch (e) {
    warn(`Could not update settings.json: ${e.message}`);
    log();
    log(`Add this to ${yellow}${settingsPath}${reset} manually:`);
    log(`  ${dim}{ "pluginDirectories": ["${pluginsDir}"] }${reset}`);
  }

  // 3. Done
  log();
  log(`${bold}Done.${reset} Restart Claude Code, then:`);
  log(`  ${cyan}/human${reset}      ${dim}— route to the right skill from all 93${reset}`);
  log(`  ${cyan}/ethics${reset}     ${dim}— ethical analysis${reset}`);
  log(`  ${cyan}/logic${reset}      ${dim}— validate and pressure-test reasoning${reset}`);
  log(`  ${cyan}/creativity${reset} ${dim}— de Bono suite + brainstorm${reset}`);
  log(`  ${cyan}/decision${reset}   ${dim}— premortem, criteria weighting, option mapping${reset}`);
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
