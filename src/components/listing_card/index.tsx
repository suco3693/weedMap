import React from "react";
import {
  isMobile,
} from "react-device-detect";
import Avatar from "../avatar";
import CardInfo from "../card_info";
import styled from "styled-components";
import get from "lodash.get";

const DesktopWrapper = styled.div`
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0.025em 0.025em;
`;

const MobileWrapper = styled(DesktopWrapper)`
    justify-content: space-between;
    margin-bottom: 1em;
  border-radius: 0.5em;
`;

const ListingCard = ({ listing }: { listing: any }) => {
  if(isMobile){
    return (
      <MobileWrapper >
        <CardInfo listing={listing} />
        <Avatar img={`${get(listing, "avatar_image.small_url")}`}/>
    </MobileWrapper>
    )
  }else{
    return ( 
      <DesktopWrapper>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        <CardInfo listing={listing} />
      </DesktopWrapper>
    )
  }
};

export default ListingCard;
