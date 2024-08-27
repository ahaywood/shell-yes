export const bye = {
  command: 'bye',
  describe: 'A Simple Good bye Command',
  builder: {
    firstName: {
      alias: 'f',
      describe: 'First Name',
      demandOption: true,  // Required
      type: 'string'
    },
    lastName: {
      alias: 'l',
      describe: 'Last Name',
      demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    console.log(`Good bye ${argv.firstName}${argv.lastName !== undefined ? ' ' + argv.lastName : ''}!`);
  }
}