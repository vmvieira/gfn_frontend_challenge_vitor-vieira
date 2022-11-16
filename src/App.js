import React from 'react';
import * as S from './styles';
import { ThemeProvider } from 'styled-components';
import { Main } from './components';

export const App = () => {
  return (
    <ThemeProvider theme={S.theme}>
      <S.GlobalStyles />
      <Main />
    </ThemeProvider>
  );
};
