import { heading } from '../helpers/messages.mjs';

export const hello = {
  command: 'hello',
  describe: 'A Simple Hello Command',
  handler(argv) {
    heading();
  }
}