import React from "react";
import Avatar from "../avatar";
import CardInfo from "../card_info";
import styled from "styled-components";
import get from "lodash.get";

const CardWrapper = styled.div`
  height: 6em;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0.025em 0.025em;
`;

const ListingCard = ({ listing }: { listing: any }) => (
  <CardWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <CardInfo listing={listing} />
  </CardWrapper>
);

export default ListingCard;
