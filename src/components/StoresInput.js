import React from 'react';
import styled from 'styled-components';
import { useDebounce } from '../hooks';

export const StoresInput = ({
  label = '',
  placeholder = '',
  icon = null,
  queryKey = undefined,
  searchParams,
  setSearchParams,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);

  const handleOnChange = (e) => setInputValue(e.target.value);

  React.useEffect(() => {
    if (debouncedInputValue) {
      searchParams.set(queryKey, debouncedInputValue);
      setSearchParams(searchParams);
    } else {
      searchParams.set(queryKey, '');
      setSearchParams(searchParams);
    }
  }, [debouncedInputValue]);

  return (
    <StyledContainer>
      <label>{label}</label>
      <StyledInputContainer>
        <StyledInput
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
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.spacing.small};
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;