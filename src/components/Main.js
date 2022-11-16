import React from 'react';
import * as S from '../styles';
import { StoresInput, StoresMap, StoresTable } from './';
import SearchIcon from '../assets/images/search.svg';
import { useSearchParams } from 'react-router-dom';

export const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 10,
    search: '',
    revenue: '',
    sort: 'name',
  });

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
            queryKey={'search'}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <StoresInput
            label='Faturamento mínimo esperado'
            placeholder='Digite um número'
            queryKey={'revenue'}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </S.FlexContainer>
        <S.FlexContainer>
          <StoresTable />
          <StoresMap />
        </S.FlexContainer>
      </S.MainContainer>
    </>
  );
};
