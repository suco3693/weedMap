import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {
  isMobile,
} from "react-device-detect";
import styled from "styled-components";
import { GlobalContext, EMPTY } from "../../context";
import LocationCard from "../location_card";

const ListingWrapper = styled.div<{isMobile: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center; 
    ${({isMobile})=> !isMobile? "padding: 0 20vw;": "padding: 0;"}
`;

function Location() { 
    const values = React.useContext(GlobalContext);
    if (values === EMPTY) {
        throw new Error("Component must be wrapped with <Container.Provider>");
    }
    const { getListing, listing} = values;
    let { id } = useParams<{id: string}>();
    

    function setListingFromURL(){
        getListing(parseInt(id));
    }
    useEffect(setListingFromURL,[])
    
    return (
        <ListingWrapper isMobile={isMobile}>
            <LocationCard listing={listing} />
            {/* Hours */}
        </ListingWrapper>
    )
};

export default Location;
