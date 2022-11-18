import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { StoresTable } from '../../components';
import { MyThemeProvider } from '../../styles';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import jsonData from '../../assets/data/data.json';

const mockedData = [...jsonData.stores];

const PropProvider = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    nameSearch: '',
    minRevenue: 15000,
    sort: ''
  });

  return (
    <StoresTable searchParams={searchParams} setSearchParams={setSearchParams} data={mockedData} />
  );
};

describe('[StoresTable] tests', () => {
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
    const table = screen.getByText('Faturamento');
    expect(table).toBeInTheDocument();
  });

  it('should have sorting icons that change the URL when clicked', () => {
    const sortByName = screen.getByAltText('sortByName');
    const sortByRevenue = screen.getByAltText('sortByRevenue');

    expect(sortByName).toBeInTheDocument();
    expect(sortByRevenue).toBeInTheDocument();

    fireEvent.click(sortByName);
    expect(window.location.search).toContain('sort=reverseAlpha');
    fireEvent.click(sortByName);
    expect(window.location.search).toContain('sort=alpha');

    fireEvent.click(sortByRevenue);
    expect(window.location.search).toContain('sort=descRevenue');
    fireEvent.click(sortByRevenue);
    expect(window.location.search).toContain('sort=ascRevenue');
  });
});
