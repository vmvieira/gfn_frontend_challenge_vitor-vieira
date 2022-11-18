import React from 'react';
import * as S from './styles';
import { Main } from './components';

export const App = () => {
  return (
    <S.MyThemeProvider>
      <S.GlobalStyles />
      <Main />
    </S.MyThemeProvider>
  );
};
