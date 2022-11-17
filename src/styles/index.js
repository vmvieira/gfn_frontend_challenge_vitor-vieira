import styled, { createGlobalStyle } from 'styled-components';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#464646',
    gray: '#ecf0f0',
    lightGray: '#c0c0c0',
    lightBlack: '#747474',
    red: '#aa3131',
    blue: '#0080b2',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
  },
  breakpoints: {
    desktop: '(min-width: 768px)',
  },
};

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
  background: ${theme.colors.gray};
  color: ${theme.colors.black};
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-family: 'Lato-Regular', sans-serif;
}
`;

export const BlueBanner = styled.div`
  background: ${theme.colors.blue};
  color: ${theme.colors.white};

  h1 {
    margin: 0 auto;
    max-width: 1200px;
    padding: ${theme.spacing.small} ${theme.spacing.medium};
    font-size: ${theme.fontSizes.medium};

    @media ${theme.breakpoints.desktop} {
      padding: ${theme.spacing.medium} ${theme.spacing.large};
      font-size: ${theme.fontSizes.large};
    }
  }
`;

export const MainContainer = styled.main`
  display: grid;
  gap: ${theme.spacing.medium};
  margin: 0 auto;
  padding: ${theme.spacing.medium} ${theme.spacing.medium};
  font-size: ${theme.fontSizes.small};

  @media ${theme.breakpoints.desktop} {
    max-width: 1200px;
    padding: ${theme.spacing.large} ${theme.spacing.large};
    gap: ${theme.spacing.large};
    font-size: ${theme.fontSizes.medium};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};

  @media ${theme.breakpoints.desktop} {
    flex-direction: row;
    gap: ${theme.spacing.large};
  }
`;

export const TableContainer = styled.div`
  display: grid;
  flex: 1;
`;
