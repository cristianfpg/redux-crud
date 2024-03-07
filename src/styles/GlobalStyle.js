import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1d1f25;
  }
  #root{
    max-width: 500px;
    width: 90%;
    margin: 30px auto;
  }
  span, input{
    font-family: "Nunito Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  & form{
    width: 100%;
  }
  & input{
    width: 100%;
    box-sizing: border-box;
    height: 34px;
    font-size: 16px;
    background: transparent;
    color: white;
    border-width: 0 0 2px 0;
    border-color: white;
    &:focus{
      outline: none;
    }
  }
`