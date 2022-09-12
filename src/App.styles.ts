import { createGlobalStyle } from 'styled-components';

import { Colors } from './assets/styles/Common.styles';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #3f3f3f;
    color: #b7b7b7;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  ul {
    padding: 0;
    margin: 0;
  }
  
  a, .link {
    cursor: pointer;
    text-decoration: none;
    color: ${Colors.gold1};
    
    &:not(.active):hover {
      color: ${Colors.gold2};
    }
  }
  
  input, textarea {
    background-color: #2f2f2f;
    border: 1px solid #1f1f1f;
    color: #b7b7b7;
    outline: none;
    padding: 10px 15px;
    border-radius: 4px;
  }
`;
