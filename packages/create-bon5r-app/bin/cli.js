#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command => {
  try {
    execSync(`${command}`, {stdio: 'inherit'});
  } catch (error) {
    console.log(`Failed to execute command: ${command}`, error);
    return false;
  }
  return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/manuanish/bon5r/packages/create-bon5r-app ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn install`;

console.log(`Lighting a new Bon5R ${repoName}...`);
const checkedOut = runCommand(gitCheckoutCommand)

if(!checkedOut) process.exit();

console.log(`Installing dependencies for ${repoName}...`);
const installedDeps = runCommand(installDepsCommand)

if(!installedDeps) process.exit();

console.log(`Done! Start the server using the command: cd ${repoName} && yarn dev`);
