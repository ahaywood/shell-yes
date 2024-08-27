import figlet from 'figlet';
import { melonHighlight, melonText } from './styles.mjs';
import { Constants } from './constants.mjs';

// ------------------- HEADING -------------------------------------------------
/** Fancy ASCII Shell Yes */
export const heading = () => {
  console.log("\n🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚 Welcome to 🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚");
  console.log(
    figlet.textSync(
      `    ${Constants.APP}`,
      {
        font: "Standard",
        width: 80,
        whitespaceBreak: true,
      })
  );
  console.log(["🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚🐚", ""].join("\n"));
  console.log(melonHighlight(` ${Constants.APP} `) + melonText("  A Starter Template for Creating a CLI Tool\n"));
}