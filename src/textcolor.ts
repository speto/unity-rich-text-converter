/**
 * Unity colors
 * @type string[]
 */
const colors: string[] = [
  "aqua",
  "black",
  "blue",
  "brown",
  "cyan",
  "darkblue",
  "fuchsia",
  "green",
  "grey",
  "lightblue",
  "lime",
  "magenta",
  "maroon",
  "navy",
  "olive",
  "orange",
  "purple",
  "red",
  "silver",
  "teal",
  "white",
  "yellow",
];

const color4unity2html = {
  pattern: new RegExp("<color=([^>]*)>(.*?)<\/color>"),
  replace: (match: string, p1: string, p2: string) => {
    // const color = colors.find((v) => v === p1);
    const color = colors.includes(p1);
    const eightDigit = p1.match(new RegExp("#[a-fA-F0-9]{8}"));
    if (color || eightDigit) {
      return `<span style="color: ${color ? p1 : p1.slice(0, 9).toLowerCase()}">${p2}</span>`;
    }
    throw new Error(`error color code or color name : ${match}`);
  },
};

const color4html2unity = {
  pattern: new RegExp("<span style=\"color: *([^>\"]*)\">(.*?(?!<span).*?)<\/span>"),
  replace: (match: string, p1: string, p2: string) => {
    const color = colors.includes(p1);
    const eightDigit = p1.match(new RegExp("#[a-fA-F0-9]{8}"));
    const sixDigit = p1.match(new RegExp("#[a-fA-F0-9]{6}"));
    if (color || eightDigit) {
      return `<color=${p1.toLowerCase()}>${p2}</color>`;
    }
    if (sixDigit) {
      return `<color=${p1.toLowerCase()}ff>${p2}</color>`;
    }
    throw new Error(`error color code : ${match}`);
  },
};

export const textcolorconverter = {
  html2unity: color4html2unity,
  unity2html: color4unity2html,
};
