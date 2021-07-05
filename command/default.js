'use strict';
const Command = require('common-bin');

class DefaultCommand extends Command {
  constructor(rawArgv) {
    super(rawArgv);
    /* this.options = {
      want: {
        type: 'string',
        alias: 'w',
        default: '',
        description: '-w = "参数用来干嘛"',
      },
    }; */
  }
  async run({ argv }) {
    console.info('您好')
  }
  get description() {
    return 'Compress your font package with default way.';
  }
}

module.exports = DefaultCommand;
