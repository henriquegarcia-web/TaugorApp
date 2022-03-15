import styled from "styled-components";

export const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 115px;
`

export const ViewHeaderProgress = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  flex-wrap: wrap;
`

export const ProgressTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin-bottom: 15px;
  letter-spacing: 0.5px;

  b {
    font-size: 16px;
    font-weight: 400;
  }
`

export const ProgressBar = styled.div`
  width: calc(100% - 210px);
  margin-right: 40px;
  font-size: 14px;
  font-weight: 400;
`

export const ProgressBarContainer = styled.div`
  height: 25px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 5px;
`

export const ProgressBarFill = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
`

export const ProgressIndicators = styled.div`
  width: 170px;
  display: flex;

  div {
    margin-right: 15px;

    p {
      color: rgba(0, 0, 0, 0.8);
      font-size: 16px;
      font-weight: 300;
    }

    b {
      font-size: 15px;
      font-weight: 400;
    }
  }
`

export const ViewHeaderCreate = styled.div`
  text-align: center;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-left: 15px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  transition: .2s;

  &:hover {
    color: rgba(0, 0, 0, 1);
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  svg {
    font-size: 22px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`

export const ViewHeaderFilters = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 15px;
  margin-left: 15px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  transition: .2s;

  &:hover {
    color: rgba(0, 0, 0, 1);
    border: 1px solid rgba(0, 0, 0, 0.4);
  }

  svg {
    font-size: 22px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`

export const ViewRequests = styled.div`
  height: calc(100% - 115px);
`

export const ViewRequestsHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 10px;

  h2 {
    font-size: 18px;
    font-weight: 400;
  }
`

export const ViewRequestsWrapper = styled.div`
  height: calc(100% - 70px);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-right: 15px;
  overflow: auto;
`