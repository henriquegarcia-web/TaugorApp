import styled from "styled-components";

export const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 115px;
`

export const ViewHeaderProgress = styled.div`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const ProgressTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  height: 30px;
  margin-bottom: 0px;
  letter-spacing: 0.5px;

  b {
    font-size: 16px;
    font-weight: 400;
  }
`

export const ProgressBar = styled.div`
  width: calc(100% - 210px);
  /* margin-right: 40px; */
  font-size: 14px;
  font-weight: 400;
`

export const ProgressBarContainer = styled.div`
  height: 25px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.12);
`

export const ProgressBarFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => props.fill}%;
  height: 100%;
  background: var(--grey-light);
`

export const ProgressIndicators = styled.div`
  width: 170px;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    &:first-of-type {
      margin-left: auto;
    }

    p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 5px;
      color: rgba(0, 0, 0, 0.8);
    }

    b {
      font-size: 15px;
      font-weight: 400;
    }
  }
`

export const ViewHeaderCreate = styled.div`
  text-align: center;
  width: calc(20% - 15px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 15px;
  margin-left: 15px;
  cursor: pointer;
  transition: .2s;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);

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
  position: relative;
  width: calc(20% - 15px);
  border-radius: 8px;
  padding: 15px;
  margin-left: 15px;
  cursor: pointer;
  transition: .2s;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.2);

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

export const FiltersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  p {
    pointer-events: none;
  }
`

export const FiltersModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 340px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
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

export const ViewRequestNoRequests = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 300;
  }
`