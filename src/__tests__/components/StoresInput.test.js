import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { StoresInput } from '../../components';
import { MyThemeProvider } from '../../styles';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import SearchIcon from '../../assets/images/search.svg';

const PropProvider = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    nameSearch: '',
    minRevenue: 15000,
    sort: ''
  });

  return (
    <StoresInput
      icon={<img src={SearchIcon} alt="lens" />}
      label="Pesquisar por nome"
      placeholder="Pesquise uma loja"
      queryKey={'nameSearch'}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      defaultValue={'defaultTest'}
    />
  );
};

describe('[StoresInput] tests', () => {
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
    const input = screen.getByPlaceholderText('Pesquise uma loja');
    expect(input).toBeInTheDocument();
  });

  it('should have an image if an icon was provided', () => {
    const img = screen.getByAltText('lens');
    expect(img).toBeInTheDocument();
  });

  it('works with default values and changes', () => {
    const input = screen.getByPlaceholderText('Pesquise uma loja');
    expect(input.value).toBe('defaultTest');
    fireEvent.change(input, { target: { value: 'changeTest' } });
    expect(input.value).toBe('changeTest');
  });
});
