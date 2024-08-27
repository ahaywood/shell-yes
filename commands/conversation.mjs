import { input } from '@inquirer/prompts';

export const conversation = {
  command: 'conversation',
  describe: 'A Simple Prompt Command',
  handler(argv) {
    async function promptUserInput() {
      const answer = await input({ message: 'What message would you like to send?' });
      console.log(`I have a message: ${answer}!`);
    }
    promptUserInput();
  }
}