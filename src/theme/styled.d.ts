import "styled-components";
import { MainTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends MainTheme {}
}
