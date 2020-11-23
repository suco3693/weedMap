import React from "react";
import styled from "styled-components";
import get from "lodash.get";
import {
  isMobile,
} from "react-device-detect";
import Avatar from "../avatar";
import LocationInfoCard from "../location_info"

const LocationCardWrapper = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
`;

const setDimensions = ()=>{
  if(!isMobile){
    return "15vw"
  }
  return "100px";
}

const LocationCard = ({ listing }: { listing: any }) => (
      <LocationCardWrapper >
        <Avatar img={`${get(listing, "avatar_image.original_url")}`} width={setDimensions()} height={setDimensions()}/>
        <LocationInfoCard listing={listing} />
      </LocationCardWrapper>
);

export default LocationCard;