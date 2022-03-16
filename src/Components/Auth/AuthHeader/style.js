import styled from "styled-components";

export const AuthHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  color: white;
  background-color: var(--grey);
`

export const AuthHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 26px;
  font-weight: 500;

  svg {
    font-size: 26px;
    margin-right: 5px;
  }
`

export const AuthHeaderTitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 30px;
`

export const AuthHeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AuthHeaderIdentifier = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 200;
  padding-left: 10px;
  text-transform: uppercase;

  border-left: 2px solid white;
`

export const AuthHeaderGoTo = styled.div`
  width: 80px;
  text-align: right;
  line-height: 18px;

  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;

    color: white;
  }
`