import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Pagination } from '../../components';
import { MyThemeProvider } from '../../styles';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import jsonData from '../../assets/data/data.json';

const PropProvider = ({ limit = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: limit,
    nameSearch: '',
    minRevenue: 15000,
    sort: ''
  });

  return (
    <Pagination
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      total={[...jsonData.stores].length}
    />
  );
};

describe('[Pagination] tests', () => {
  afterEach(cleanup);

  it('should have 2 buttons when limit is 25', () => {
    render(
      <MyThemeProvider>
        <PropProvider limit={25} />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(2);
  });

  it('should have 5 buttons when limit is 10', () => {
    render(
      <MyThemeProvider>
        <PropProvider limit={10} />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(5);
  });

  it('should have clickable previous and next buttons on the screen if there is data to paginate', () => {
    render(
      <MyThemeProvider>
        <PropProvider />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const previousBtn = screen.getByAltText('previous page');
    const nextBtn = screen.getByAltText('next page');
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
    expect(window.location.search).toContain('page=2');

    fireEvent.click(previousBtn);
    expect(window.location.search).toContain('page=1');
  });

  it('should paginate when the pagination buttons are clicked', () => {
    render(
      <MyThemeProvider>
        <PropProvider />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const thirdPageBtn = screen.getByText('3');
    fireEvent.click(thirdPageBtn);

    expect(window.location.search).toContain('page=3');
  });

  it('should do nothing to the url when you cant go back or next', () => {
    render(
      <MyThemeProvider>
        <PropProvider />
      </MyThemeProvider>,
      { wrapper: BrowserRouter }
    );

    const previousBtn = screen.getByAltText('previous page');
    const nextBtn = screen.getByAltText('next page');
    const firstPageBtn = screen.getByText('1');
    const fifthPageBtn = screen.getByText('5');

    fireEvent.click(fifthPageBtn);
    fireEvent.click(nextBtn);

    fireEvent.click(firstPageBtn);
    fireEvent.click(previousBtn);

    expect(window.location.search).toContain('page=1');
  });
});
