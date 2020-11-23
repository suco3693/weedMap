import React from "react";
import {getStateCodeByStateName } from "us-state-codes";
import {
    InfoWrapper,
    LocationWrapper,
    Name
} from "./styles";
import Stars from "../stars";

const convertToStateCode = (state: string): string =>{
  return getStateCodeByStateName(state) === null? state : getStateCodeByStateName(state);
}

const CardInfo = ({ listing }: { listing: any }) => (
  <InfoWrapper>
    <LocationWrapper>
        <div> {listing.city}, {convertToStateCode(listing.state)}  </div>
        <div> | </div>
        <div> {listing.distance.toFixed(0)}mi </div>
    </LocationWrapper>
    <Name>{listing.name}</Name>
    <Stars rating={listing.rating} />
  </InfoWrapper>
);

export default CardInfo;
