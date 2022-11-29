# Styled-components

```shell
$ npm install styled-components styled-reset
```

## Preview

![styled-components](https://user-images.githubusercontent.com/118904460/204458130-d5f492c3-b2fe-466b-a544-9effd97a5f88.gif)

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
  black: '#000000',
  white: '#FFFFFF',
  lightGrey: '#B0B0B0',
  middleGrey: '#717171',
  deepGrey: '#222222',
  hoverGrey: '#DBDBDB',
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
