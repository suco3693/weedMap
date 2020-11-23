import React from "react";
import { AllTheProviders } from "../test-utils";
import { render, fireEvent, act, getByTestId, getAllByTestId} from "@testing-library/react";
import LocationCard from "../components/location_card"
import App from "../view";
import * as fakeListingsData from "../__test__/mocks/location-mock.json";
import * as fakeLocationData from "../__test__/mocks/listing-mock.json";

function setup(props?: any) {
  
  return (
    <AllTheProviders {...props}>
      <App />
    </AllTheProviders>
  );
}

test("Without inital state, AppContent should be empty ", () => { 
  const initialState = {};
  const { container} = render(setup({ initialState }));
  const appContainer = getByTestId(container,"appCont");
  expect(appContainer.childNodes.length).toBe(1);
  expect(appContainer.firstChild?.textContent).toBe('');
});

test("With inital state as mocked data, Regions should exist and contain ListingGroups", () => { 
  const initialState = {
    regions: fakeListingsData.data.regions,
    location: fakeListingsData.data.location,
  };
  const { container } = render(setup({ initialState }));
  const regions = getByTestId(container,"regions");
  const delivery = regions.childNodes[0];
  const dispensary = regions.childNodes[1];
  const doctor = regions.childNodes[2];
  expect(regions.childNodes.length).toBe(3);
  expect(delivery.firstChild?.textContent).toEqual(" Deliveries Services ");
  expect(dispensary.firstChild?.textContent).toEqual(" Dispensaries Storefronts ");
  expect(doctor.firstChild?.textContent).toEqual(" Doctors ")
});

test("When ListingCard is click, it should render Location", () => { 
    const initialState = {
    regions: fakeListingsData.data.regions,
    location: fakeListingsData.data.location,
  };
  const { container } = render(setup({ initialState }));
  const listingCards = getAllByTestId(container,"listingCard");
  const exampleListingCard = listingCards[0];
  expect(exampleListingCard.getAttribute("href")?.slice(0,10)).toEqual("/location/");
});

test("When ListingCard is click, it should render Location", async () => {      
    const initialState = {
    regions: fakeListingsData.data.regions,
    location: fakeListingsData.data.location,
    listing: fakeLocationData.data.listing,
  };
  const { container } = render(setup({ initialState }));
  const listingCards = getAllByTestId(container,"listingCard");
  let exampleListingCard = listingCards[0];
  await act(async()=>{
      await fireEvent.click(exampleListingCard);
      let location = getByTestId(container,"location");
      expect(location.childNodes.length).toBe(2);
      expect(location.childNodes[0].textContent).toContain("The Roots Dispensary");
      expect(location.childNodes[1].textContent).toContain("Sunday");
  })
});