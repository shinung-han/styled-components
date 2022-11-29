import { useState } from 'react';
import * as S from './App.Style.js';

function App() {
  const [isValid, setIsValid] = useState(false);

  return (
    <div className="App">
      <S.Header value={isValid}>{isValid ? 'RED' : 'BLUE'}</S.Header>
      <button onClick={() => setIsValid(!isValid)}>색깔변경</button>
    </div>
  );
}

export default App;
