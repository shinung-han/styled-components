# Styled-components

```shell
$ npm install styled-components styled-reset
```

## Preview

![styled-components](https://user-images.githubusercontent.com/118904460/204459519-a23cd7fa-a99e-4a9e-a3c0-95474821baaa.gif)

## Code Preview

### src/styles/GlobalStyle.js
```javascript
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyle;
```

### src/styles/theme.js
```javascript
export const theme = {
  blue: '#2E86C1',
  red: '#F1341A',
};

```

### src/index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

```

### src/App.js
```javascript
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

```

### src/App.style.js
```javascript
import styled from 'styled-components';

export const Header = styled.h1`
  color: ${({ value, theme }) => (value ? theme.red : theme.blue)};
`;

```
