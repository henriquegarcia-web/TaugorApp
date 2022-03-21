import styled from "styled-components";

// --------------------------------- HEADER

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  svg {
    font-size: 24px;
    margin-right: 10px;
  }
`

export const ModalHeaderInfos = styled.div`
  margin-left: auto;
`

export const ModaInfo = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);

  b {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`

// --------------------------------- BODY

export const ModalBody = styled.div`
  display: flex;
`

export const ModalLeftSide = styled.div`
  width: calc(60% - 20px);
  max-height: 490px;
  margin-right: 20px;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  overflow: auto;
`

export const ModalRightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  font-weight: 300;
  line-height: 22px;

  button {
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 300;
    margin-top: 2px;
  }
`

export const ModalInfoTitle = styled.h4`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  
  svg {
    margin-right: 5px;
    font-size: 16px;
  }
`

export const ModalInfoContent = styled.p`
  cursor: pointer;
  transition: .2s;
  font-weight: 300;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalInfoContentStatus = styled.div`
  font-weight: 400;
  width: fit-content;
  border-radius: 6px;
  padding: 5px 10px;
  color: green;
  pointer-events: none;
  border: 1px solid green;
`

export const ModalMarkup = styled.div`
  cursor: pointer;
  
  * {
    transition: .2s;
    color: rgba(0, 0, 0, 0.6) !important;
  }

  &:hover {
    * {
      color: rgba(0, 0, 0, 0.8) !important;
    }
  }
`

// -----------------------------------------

export const ModalLabelIcons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: auto;
`

export const ModalLabelIconsTitle = styled.h4`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 10px;
`

export const LabelIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 4px;
  
  svg {
    margin-right: 5px;
    font-size: 16px;
  }
`
