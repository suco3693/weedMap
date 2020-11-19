import React from "react";
import get from "lodash.get";
import logo from "../assets/logo.png";
import ListingCards from "./listing_cards";
import Locate from "../icons/locate";
import MapPin from "../icons/map-pin";
import {
  AppHeader,
  AppWrapper,
  AppContent,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton
} from "./styles";
import { GlobalContext, EMPTY } from "../context";

type RetailerType = "delivery" | "dispensary" | "doctor";
const regionTypes: RetailerType[] = ["delivery", "dispensary", "doctor"];
const regionLabels: {
  delivery: string;
  dispensary: string;
  doctor: string;
} = {
  delivery: "Deliveries",
  dispensary: "Dispensaries",
  doctor: "Doctors"
};

function App() {
  const values = React.useContext(GlobalContext);
  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  const { location, isLocating, error, regions, locate } = values;

  function locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        locate(position.coords);
      });
    }
  }

  function getLabel(listings: any, label: string) {
    if (get(listings, "listings").length) {
      return (
        <div key={label}>
          <strong> {label} </strong>
        </div>
      );
    }
    return <div />;
  }

  return (
    <AppWrapper>
      <AppHeader>
        <img src={logo} alt="weedmaps logo" />
      </AppHeader>
      <HeroSection>
        <ContentContainer>
          <LocationSection>
            <h2>
              <MapPin fill={"#7e7979"} width={"60px"} height={"40px"} />
              <span> {location ? location.name : ""} </span>
              <span> {isLocating && !location ? "...locating" : ""} </span>
            </h2>
            <LocateButton onClick={locateMe}>
              <Locate fill={"#7e7979"} />
              <span> Locate Me </span>
            </LocateButton>
          </LocationSection>
          <TextContent>
            Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut enim
            ad minim veniam, quis.
          </TextContent>
        </ContentContainer>
      </HeroSection>
      <AppContent>
        {error && error.length && <div> {error} </div>}
        {regions && !!Object.entries(regions).length && (
          <React.Fragment>
            {regionTypes.map((regionType: RetailerType) => (
              <ListingGroups key={regionType}>
                <h2>
                  {getLabel(regions[regionType], regionLabels[regionType])}
                </h2>
                <ListingCards listings={get(regions[regionType], "listings")} />
              </ListingGroups>
            ))}
          </React.Fragment>
        )}
      </AppContent>
    </AppWrapper>
  );
}

export default App;
