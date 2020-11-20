import styled from "styled-components";
export const InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 0.5em;
  div {
      padding: 0.25em;
  }
`;

export const LocationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    color: #a4a2a2;
    div {
        font-size: 0.75em;
        padding: 0em 0.1em;
    }
`;

export const Name = styled.div`
    font-weight: bold;
`;