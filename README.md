# Shell Yes! 🚀

A modern starter template for creating command-line interface (CLI) tools with Node.js. Get your CLI project up and running quickly with a pre-configured setup and essential dependencies.

## Features

- 🎨 Beautiful CLI output with [chalk](https://github.com/chalk/chalk)
- 🤖 Interactive prompts using [@inquirer/prompts](https://github.com/SBoudrias/Inquirer.js)
- 📦 Command-line argument parsing with [yargs](https://github.com/yargs/yargs)
- 🎯 File system operations using [fs-extra](https://github.com/jprichardson/node-fs-extra)
- 🖼️ ASCII art text using [figlet](https://github.com/patorjk/figlet.js)
- 📦 Custom box drawing with [@selfteachme/boxerjs](https://github.com/ahaywood/boxerjs)

## Getting Started

### Installation

Use [degit](https://github.com/Rich-Harris/degit) to clone this template without git history:

```bash
npx degit @selfteachme/shell-yes MY-CLI-PROJECT-NAME
cd MY-CLI-PROJECT-NAME
npm install
```

### Development

1. The main CLI file is `shellyes.mjs`
2. Modify the `package.json` to update:
   - `name`: Your CLI tool name
   - `description`: A brief description of your tool
   - `bin`: Change the command name (currently "shellyes")
   - `homepage`: Your project's website
   - `repository`: Your git repository URL

### Testing Your CLI

To test your CLI locally:

```bash
npm link
```

Now you can run your CLI using the command name specified in your `package.json` bin field.

## Project Structure

### Commands

The `commands` folder contains example commands that demonstrate different CLI functionalities:

- `hello.mjs` - Basic command example
- `conversation.mjs` - Interactive command using prompts
- `bye.mjs` - Command with additional options

These example commands are included for reference and can be deleted once you understand the pattern.

### Helpers

The project includes three helper files to keep your code organized:

- `helpers/constants.mjs` - Central location for all constant values
- `helpers/messages.mjs` - Standardized message displays and ASCII art
- `helpers/styles.mjs` - Reusable styling configurations using chalk

## Publishing

When ready to publish to npm:

```bash
npm publish
```

## License

MIT © [Amy Dutton](https://shellyes.com)
