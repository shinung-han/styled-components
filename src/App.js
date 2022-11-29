import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="App">
      <Header value={isValid}>{isValid ? 'RED' : 'BLUE'}</Header>
      <button onClick={() => setIsValid(!isValid)}>색깔변경</button>
    </div>
  );
}

export default App;

const Header = styled.h1`
  color: ${({ value, theme }) => (value ? theme.red : theme.blue)};
`;
