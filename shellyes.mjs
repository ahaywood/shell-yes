#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import { hello } from './commands/hello.mjs';
import { bye } from './commands/bye.mjs';
import { conversation } from './commands/conversation.mjs';

yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .help('h')
  .alias('h', 'help')
  .command(hello)
  .command(conversation)
  .command(bye)
  .parse()