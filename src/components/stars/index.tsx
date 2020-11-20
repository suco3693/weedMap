import React from "react";
import styled from "styled-components";
import {
  EmptyStar, 
  FullStar,
  HalfStar
} from "../../icons"

const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const roundStar = (rating: string): number => {
  return Math.round(parseFloat(rating)*2)/2;
}

const Stars = ({ rating }: { rating: string }) => (
  <StarWrapper>
    <EmptyStar />
    <FullStar />
    <HalfStar />
    <div> {parseFloat(rating).toFixed(1)} </div>
  </StarWrapper>
);

export default Stars;