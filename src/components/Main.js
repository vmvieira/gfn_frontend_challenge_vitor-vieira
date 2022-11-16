import React from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from '../styles';
import { RevenueInput, SearchInput, StoresMap, StoresTable } from './';

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    search: 'teste',
    revenue: 25000,
    sort: 'name',
  });

  React.useEffect(() => setSearchParams(searchParams), []);

  const page = searchParams.get('page');
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');
  const revenue = searchParams.get('revenue');
  const sort = searchParams.get('sort');

  return (
    <>
      <S.BlueBanner>
        <h1>Desempenho das Lojas</h1>
      </S.BlueBanner>
      <S.MainContainer>
        <S.FlexContainer>
          <SearchInput />
          <RevenueInput />
        </S.FlexContainer>
        <S.FlexContainer>
          <StoresTable />
          <StoresMap />
        </S.FlexContainer>
      </S.MainContainer>
    </>
  );
};
