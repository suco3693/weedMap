import React from "react";
import {
    InfoWrapper,
    LocationWrapper,
    Name
} from "./styles";
import Stars from "../stars";

//TODO convert listing.state to Abbrive
const CardInfo = ({ listing }: { listing: any }) => (
  <InfoWrapper>
    <LocationWrapper>
        <div> {listing.city}, {listing.state}  </div>
        <div> | </div>
        <div> {listing.distance.toFixed(0)}mi </div>
    </LocationWrapper>
    <Name>{listing.name}</Name>
    <Stars rating={listing.rating} />
  </InfoWrapper>
);

export default CardInfo;
