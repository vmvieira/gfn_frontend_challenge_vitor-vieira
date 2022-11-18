import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Main } from '../../components';
import { MyThemeProvider } from '../../styles';
import { BrowserRouter } from 'react-router-dom';

describe('[Main] tests', () => {
  afterEach(cleanup);

  it('should render on the screen', () => {
    render(
      <MyThemeProvider>
        <Main />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const blueHeader = screen.getByRole('heading');
    expect(blueHeader).toBeInTheDocument();
  });
});
