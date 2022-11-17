import React from 'react';
import * as S from '../styles';
import { StoresInput, StoresMap, StoresTable, Pagination } from './';
import SearchIcon from '../assets/images/search.svg';
import { useSearchParams } from 'react-router-dom';
import jsonData from '../assets/data/data.json';
import { sortData } from '../utils';

export const Main = () => {
  const [data] = React.useState([...jsonData.stores]);

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    nameSearch: '',
    minRevenue: 15000,
    sort: '',
  });

  const page = searchParams.get('page');
  const limit = searchParams.get('limit');
  const nameSearch = searchParams.get('nameSearch');
  const sort = searchParams.get('sort');

  const filteredData = data.filter((eachObj) => {
    if (!nameSearch) return data;
    return eachObj.name.toLowerCase().includes(nameSearch.toLowerCase());
  });

  const sortedData = sortData(sort, filteredData);

  const indexOfLast = page * limit;
  const indexOfFirst = indexOfLast - limit;
  const currentSlice = sortedData.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <S.BlueBanner>
        <h1>Desempenho das Lojas</h1>
      </S.BlueBanner>
      <S.MainContainer>
        <S.FlexContainer>
          <StoresInput
            icon={<img src={SearchIcon} />}
            label='Pesquisar por nome'
            placeholder='Pesquise uma loja'
            queryKey={'nameSearch'}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <StoresInput
            label='Faturamento mínimo esperado'
            placeholder='Digite um número'
            queryKey={'minRevenue'}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            defaultValue={15000}
          />
        </S.FlexContainer>
        <S.FlexContainer>
          <S.TableContainer>
            <StoresTable
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              data={currentSlice}
            />
            {!!currentSlice.length && (
              <Pagination
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                total={sortedData.length}
              />
            )}
          </S.TableContainer>
          <StoresMap />
        </S.FlexContainer>
      </S.MainContainer>
    </>
  );
};
