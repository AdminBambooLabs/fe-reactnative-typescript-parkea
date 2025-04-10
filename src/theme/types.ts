import { colors } from "./colors";
import { fonts } from "./fonts";

export type ITheme = {
  colors: Colors;
  fonts: Fonts;
};

export type Colors = typeof colors;
export type Fonts = typeof fonts;