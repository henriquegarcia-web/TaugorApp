import styled from "styled-components";

export const Request = styled.div`
  width: calc(100% / 2);
  height: 260px;
  margin-bottom: 20px;
  padding: 0 15px;
`

export const ResquestIdentifier = styled.div`
  height: 30px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
`

export const RequestContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: calc(100% - 30px);
`

// ---------------------------------------- Header

export const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
  height: 30px;

  div {
    display: flex;
    align-items: center;

    svg {
      font-size: 16px;
      margin-right: 6px;
    }

    p {
      font-size: 15px;
      font-weight: 300;
    }
  }
`

export const RequestProduct = styled.div`
  
`

export const RequestCategory = styled.div`
  
`

export const RequestPriority = styled.div`
  
`

// ---------------------------------------- Main Infos

export const RequestMainInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
  height: calc(100% - 60px);

  h1 {
    font-size: 15px;
    font-weight: 500;
  }

  h2 {
    font-size: 14px;
    font-weight: 300;
  }
`

// ---------------------------------------- Footer / Details

export const RequestDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid orange;
  height: 30px;

  div {
    display: flex;
  }
`

export const RequestStats = styled.div`
  
`

export const RequestImpactedUsers = styled.div`
  
`

export const RequestUser = styled.div`
  
`