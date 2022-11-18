import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { StoresMap } from '../../components';
import { MyThemeProvider } from '../../styles';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import jsonData from '../../assets/data/data.json';

const mockedData = [...jsonData.stores];

const PropProvider = () => {
  const [searchParams] = useSearchParams({
    page: 1,
    limit: 10,
    nameSearch: '',
    minRevenue: 15000,
    sort: ''
  });

  return <StoresMap searchParams={searchParams} data={mockedData} />;
};

describe('[StoresMap] tests', () => {
  beforeEach(() => {
    render(
      <MyThemeProvider>
        <PropProvider />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );
  });

  afterEach(cleanup);

  it('should render on the screen', () => {
    const map = screen.getByTestId('storesMap');
    expect(map).toBeInTheDocument();
  });
});
