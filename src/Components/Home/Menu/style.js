import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const MenuLogo = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--grey-light);

  svg {
    font-size: 32px;
    color: rgba(0, 0, 0, 0.4);
  }
`

export const MenuNavBar = styled.div`
  background: var(--grey);
  height: calc(100% - 60px);
  padding: 25px 10px;
`

export const MenuNavBarItem = styled.div`
  background: var(--grey-dark);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: .2s;
  border-radius: 6px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  svg {
    font-size: 28px;
    margin-bottom: 8px;
  }
`

export const MenuNavBarItemText = styled.p`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.5px;

  b {
    font-weight: 500;
  }
`