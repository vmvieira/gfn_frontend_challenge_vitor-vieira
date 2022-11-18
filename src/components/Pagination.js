import React from 'react';
import styled from 'styled-components';
import LeftIcon from '../assets/images/left.svg';
import RightIcon from '../assets/images/right.svg';

export const Pagination = ({ searchParams, setSearchParams, total }) => {
  const limit = Number(searchParams.get('limit'));
  const page = Number(searchParams.get('page'));

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  const cantPrevious = page <= 1;
  const cantNext = page >= pageNumbers.length;

  const handlePrevious = () => {
    if (cantPrevious) return;
    searchParams.set('page', page - 1);
    setSearchParams(searchParams);
  };

  const handleNext = () => {
    if (cantNext) return;
    searchParams.set('page', page + 1);
    setSearchParams(searchParams);
  };

  return (
    <StyledPaginationContainer>
      <StyledFlexContainer>
        <StyledImage
          src={LeftIcon}
          onClick={handlePrevious}
          isNotAllowed={cantPrevious}
          alt="previous page"
        />
        {pageNumbers.map((eachNumber) => (
          <StyledListItem key={eachNumber}>
            <StyledButton onClick={() => paginate(eachNumber)} isCurrentPage={page === eachNumber}>
              {eachNumber}
            </StyledButton>
          </StyledListItem>
        ))}
        <StyledImage src={RightIcon} onClick={handleNext} isNotAllowed={cantNext} alt="next page" />
      </StyledFlexContainer>
    </StyledPaginationContainer>
  );
};

const StyledPaginationContainer = styled.nav`
  margin: 0.75rem 0;
`;

const StyledFlexContainer = styled.ol`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const StyledImage = styled.img`
  cursor: ${({ isNotAllowed }) => (isNotAllowed ? 'not-allowed' : 'pointer')};
`;

const StyledListItem = styled.li`
  padding: 0;
  list-style: none;
`;

const StyledButton = styled.button`
  color: ${({ isCurrentPage, theme }) =>
    isCurrentPage ? theme.colors.black : theme.colors.lightGray};

  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
`;
