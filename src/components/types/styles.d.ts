import 'styled-components';
import {DefaultTheme} from 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme extends MyThemeType {}
}
