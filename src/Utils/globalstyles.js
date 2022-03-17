import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    flex-shrink: 0;
  }

  p {
    margin-bottom: 0;
  }

  :root {
    --grey-white: rgb(230, 230, 230);
    --grey-light: rgba(72, 94, 133, 0.8);
    --grey: #3A4D6E;
    --grey-dark: #344461;

    --grey-hover: rgba(72, 94, 133, 0.05);
  }

  .quill-rich-text {
    height: 140px;
    margin-bottom: 42px;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle

export const FixedScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const AuthErrorMessage = styled.div`
  font-size: 13px;
  font-size: 300;
  text-align: right;
  margin-bottom: ${props => props.margin};
  height: 20px;
  line-height: 14px;

  color: red;
`