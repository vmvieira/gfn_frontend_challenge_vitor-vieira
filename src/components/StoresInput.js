import React from 'react';
import styled from 'styled-components';
import { useDebounce } from '../hooks';

export const StoresInput = ({
  defaultValue = '',
  label = '',
  placeholder = '',
  icon = null,
  queryKey = undefined,
  searchParams,
  setSearchParams
}) => {
  const [inputValue, setInputValue] = React.useState(defaultValue);
  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleOnChange = (e) => setInputValue(e.target.value);

  React.useEffect(() => {
    if (debouncedInputValue) {
      if (queryKey === 'nameSearch') {
        searchParams.set('page', 1);
        setSearchParams(searchParams);
      }
      searchParams.set(queryKey, debouncedInputValue);
      setSearchParams(searchParams);
    } else {
      searchParams.set(queryKey, '');
      setSearchParams(searchParams);
    }
  }, [debouncedInputValue]);

  return (
    <StyledContainer>
      <label htmlFor={queryKey}>{label}</label>
      <StyledInputContainer>
        <StyledInput
          id={queryKey}
          type={'text'}
          value={inputValue}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
        {icon}
      </StyledInputContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  flex: 1;
  display: grid;
  gap: ${({ theme }) => theme.spacing.small};
`;

const StyledInputContainer = styled.div`
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.small};
  display: flex;
  border: 1px solid #c1c4c4;
  border-radius: ${({ theme }) => theme.spacing.small};
  box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 5px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
