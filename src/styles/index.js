import { createGlobalStyle } from 'styled-components';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Lato-Regular';
    src: url('${LatoRegular}')
  }

html,
body,
#root {
  background: #ecf0f0;
  color: #595959;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: 'Lato-Regular', sans-serif;
}
`;
