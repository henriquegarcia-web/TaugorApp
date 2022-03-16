import styled from "styled-components";
import { FixedScreen } from '../../Utils/globalstyles'

export const LoginPage = styled(FixedScreen)`
  
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  border-radius: 8px;

  border: 3px solid var(--grey);
`

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`