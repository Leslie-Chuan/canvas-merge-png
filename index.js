const Command = require('common-bin');
const path = require('path');

class MainCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    this.answers = {};
    this.usage = 'Usage: merge <command> [options]';
    this.load(path.join(__dirname, 'command'));
    this.alias('d', 'default');
  }
  get version() {
    return `version：${pkg.version}`;
  }
  get description() {
    return 'merge png tool';
  }
}
module.exports = MainCommand;
