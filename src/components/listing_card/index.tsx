import React from "react";
import {
  isMobile,
} from "react-device-detect";
import Avatar from "../avatar";
import CardInfo from "../card_info";
import styled from "styled-components";
import get from "lodash.get";

const ListingCardWrapper = styled.div<{isMobile: boolean}>`
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0.025em 0.025em;
  ${({isMobile})=> isMobile? "justify-content: space-between;": "justify-content: flex-start;"}
`;


const ListingCard = ({ listing }: { listing: any }) => ( 
      <ListingCardWrapper isMobile={isMobile}>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        <CardInfo listing={listing} />
      </ListingCardWrapper>
);

export default ListingCard;
