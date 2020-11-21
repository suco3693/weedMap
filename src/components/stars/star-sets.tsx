import React from "react";
import styled from "styled-components";
import {
  EmptyStar, 
  FullStar,
  HalfStar
} from "../../icons"

const StarSetWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

let roundToHalf = (rating: number) :number =>{
    return rating - Math.floor(rating) >= 0.5 ? Math.floor(rating)+ 0.5: Math.floor(rating);
}

const StarSet = ({ rating }: { rating: number }) => {
    rating = roundToHalf(rating);
    let starSet = [];
    let key = 0;

    while(rating > 0.5){
        starSet.push(<FullStar key={key}/>)
        rating--;
        key++;
    }

    if(rating > 0){
        starSet.push(<HalfStar key={key}/>)
        key++;
    }
    while(starSet.length < 5){
        starSet.push(<EmptyStar key={key}/>)
        key++;
    }
    return (
        <StarSetWrapper >
            {starSet}
        </StarSetWrapper>
    )
};

export default StarSet;
