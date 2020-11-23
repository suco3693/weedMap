import React from "react";
import {
  isMobile,
} from "react-device-detect";
import Stars from "../stars";
import {
    LocationInfoCardWrapper,
    HeaderWrapper
} from "./styles";



const LocationInfoCard= ({ listing }: { listing: any }) => {
    let address = listing.address !== "null" ?  listing.address: "";
    if(isMobile){
        return (
            <LocationInfoCardWrapper>
                <HeaderWrapper>
                    <h3>{listing.name}</h3>
                    <Stars rating={listing.rating} />
                </HeaderWrapper>
                <h5>{address}</h5>
                <h5>{listing.phone_number}</h5>
            </LocationInfoCardWrapper>
        )
    }else{
        return (
            <LocationInfoCardWrapper>
                <HeaderWrapper>
                    <h1>{listing.name}</h1>
                    <Stars rating={listing.rating} />
                </HeaderWrapper>
                <h3>{address}</h3>
                <h3>{listing.phone_number}</h3>
            </LocationInfoCardWrapper>
        )
    };
};

export default LocationInfoCard;