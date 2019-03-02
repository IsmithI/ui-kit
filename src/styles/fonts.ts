import { CSSProperties } from "aphrodite/no-important";

interface IFontsStyles {
  [stylename: string]: CSSProperties
}

export const fonts: IFontsStyles = {
  default: {
    fontFamily: 'Montserrat, "sans-serif"',
    fontSize: '16px',
    fontWeight: 500,
    src: "url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800')"
  }
};