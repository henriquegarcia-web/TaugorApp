import styled from "styled-components";

export const Request = styled.div`
  width: calc(100% / 2);
  height: fit-content;
  margin-bottom: 20px;
  padding: 0 15px;
`

export const ResquestIdentifier = styled.div`
  height: 30px;

  p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
  }
`

export const RequestContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  height: calc(100% - 30px);
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: var(--grey-hover);
  }
`

// ---------------------------------------- Header

export const RequestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 34px;
  padding: 0 20px;

  div {
    display: flex;
    align-items: center;

    &:first-of-type {
      width: 100%;
      max-width: 120px;
    }

    svg {
      font-size: 16px;
      margin-right: 8px;
      color: var(--grey-light);
    }

    p {
      font-size: 15px;
      font-weight: 300;
      color: var(--grey-light);
    }
  }
`

export const RequestProduct = styled.div`
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 18px;
  max-height: 18px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export const RequestPriority = styled.div`
  
`

export const RequestImpactedUsers = styled.div`
  
`

// ---------------------------------------- Main Infos

export const RequestMainInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  min-height: 130px;
  padding: 0 20px;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: var(--grey-hover);
  color: var(--grey);

  h1 {
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 18px;
    max-height: 18px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  h2 {
    font-size: 15px;
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 18px;
    max-height: 36px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 18px;
    max-height: 18px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

// ---------------------------------------- Footer / Details

export const RequestDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 20px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      color: var(--grey-light);
    }

    p {
      font-size: 15px;
      font-weight: 300;
      color: var(--grey-light);
    }
  }
`

export const RequestStats = styled.div`
  
`

export const RequestUser = styled.div`
  p {
    text-transform: capitalize;
  }
`

export const RequestUserImage = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`