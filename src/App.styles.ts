import 'react-datepicker/dist/react-datepicker.css';
import { createGlobalStyle } from 'styled-components';

import { Colors, InputLook } from './assets/styles/Common.styles';

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
  
  input {
      height: 41px;
  }
  
  input::placeholder, textarea::placeholder {
      color: #5f5f5f;
  }
  
  input, textarea {
    ${InputLook};
  }
  
  input:disabled {
    opacity: .2;
  }
  
  input[type=number]::-webkit-inner-spin-button {
    display: none;
  }
  
  input[error] {
    border-color: ${Colors.red1};
  }
  
  * {
    box-sizing: border-box;
  }
`;
