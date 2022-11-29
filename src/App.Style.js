import styled from 'styled-components';

export const Header = styled.h1`
  color: ${({ value, theme }) => (value ? theme.red : theme.blue)};
`;
