import React from "react";
import styled from "styled-components";
import StarSet from "./star-sets";

const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    font-size: 0.75em;
    color: #a4a2a2;
    padding: 0em 0.1em;
  }
`;

const Stars = ({ rating }: { rating: number }) => (
  <StarWrapper>
    <StarSet rating={rating} />
    <div> {rating} </div>
  </StarWrapper>
);

export default Stars;