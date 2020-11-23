import React from "react";
import styled from "styled-components";
import ListingCard from "../listing_card";

const CardsContainer = styled.div`
    align-items: center;
`;


const ListingCards = ({ listings }: { listings: any }) => (
  <CardsContainer >
    {listings.map((listing: any) => (
      <ListingCard listing={listing} key={listing.id} />
    ))}
  </CardsContainer>
);

export default ListingCards;
