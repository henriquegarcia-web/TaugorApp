import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid var(--grey-light);
  border-left: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`

export const HeaderSearch = styled.div`
  width: 40%;
  max-width: 400px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  svg {
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
`

export const HeaderSearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid var(--grey-light);
  width: 100%;
  height: 100%;
  padding: 0 40px 0 15px;
  font-size: 16px;
  font-weight: 300;
`

export const HeaderUserInfo = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid var(--grey-light);
  padding-left: 15px;
  cursor: pointer;
`

export const UserInfoImageContainer = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
`

export const UserInfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const UserInfoName = styled.div`
  font-size: 16px;
  font-weight: 300;
`