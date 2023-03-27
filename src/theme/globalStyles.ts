import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Sans-Serif;
  }

  body {
    background-color: #2F2E41;
    font-family: Open-Sans, Sans-Serif;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  display: flex;
  width: 960px;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`