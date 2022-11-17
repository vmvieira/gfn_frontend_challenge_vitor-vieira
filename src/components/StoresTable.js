import React from 'react';
import styled, { css } from 'styled-components';
import { currencyFormatter } from '../utils';
import RightIcon from '../assets/images/right.svg';

export const StoresTable = ({ searchParams, setSearchParams, data }) => {
  const minRevenue = searchParams.get('minRevenue');
  const sort = searchParams.get('sort');

  const rotateNameImgUp = sort === 'alpha';
  const rotateNameImgDown = sort === 'reverseAlpha';

  const rotateRevenueImgUp = sort === 'ascRevenue';
  const rotateRevenueImgDown = sort === 'descRevenue';

  const handleSort = (currentSort, option1, option2) => {
    if (currentSort === option2) {
      searchParams.set('sort', option1);
      setSearchParams(searchParams);
    } else {
      searchParams.set('sort', option2);
      setSearchParams(searchParams);
    }
  };

  return (
    <StyledTable>
      <thead>
        <StyledTableRow>
          <StyledTableHeading>
            <StyledFlexHeader>
              <span>Loja</span>
              <StyledImage
                src={RightIcon}
                rotateUp={rotateNameImgUp}
                rotateDown={rotateNameImgDown}
                onClick={() => handleSort(sort, 'alpha', 'reverseAlpha')}
              />
            </StyledFlexHeader>
          </StyledTableHeading>
          <StyledTableHeading>
            <StyledFlexHeader>
              <span>Faturamento</span>
              <StyledImage
                src={RightIcon}
                rotateUp={rotateRevenueImgUp}
                rotateDown={rotateRevenueImgDown}
                onClick={() => handleSort(sort, 'ascRevenue', 'descRevenue')}
              />
            </StyledFlexHeader>
          </StyledTableHeading>
        </StyledTableRow>
      </thead>
      <tbody>
        {!!data.length &&
          data.map((eachObj) => (
            <StyledTableRow
              key={eachObj.name}
              isRed={eachObj.revenue < minRevenue}
            >
              <StyledTableCell>{eachObj.name}</StyledTableCell>
              <StyledTableCell>
                {currencyFormatter.format(eachObj.revenue)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
      </tbody>
    </StyledTable>
  );
};

const sharedStylesForTableAndTr = css`
  border: 1px solid #c1c4c4;
  border-collapse: collapse;
  text-align: left;
`;

const sharedStylesForThAndTd = css`
  padding: ${({ theme }) => theme.spacing.small};
`;

const StyledTable = styled.table`
  ${sharedStylesForTableAndTr}
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing.small};
  box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 5px;
`;

const StyledTableRow = styled.tr`
  ${sharedStylesForTableAndTr}
  color: ${({ theme, isRed }) =>
    isRed ? theme.colors.red : theme.colors.black};
`;

const StyledTableHeading = styled.th`
  ${sharedStylesForThAndTd}
`;

const StyledTableCell = styled.td`
  ${sharedStylesForThAndTd}
`;

const StyledFlexHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
`;

const StyledImage = styled.img`
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: ${({ rotateDown, rotateUp }) => {
    if (rotateUp) return `rotate(-90deg)`;
    if (rotateDown) return `rotate(90deg)`;
    return '';
  }};
`;
