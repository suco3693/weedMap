import React from "react";
import { AllTheProviders } from "../test-utils";
import { render, fireEvent, act, getByTestId} from "@testing-library/react";
import jest from "jest-mock";
import Home from "../components/home";
import * as fakeData from "../__test__/mocks/location-mock.json";

function setup(props?: any) {
  
  return (
    <AllTheProviders {...props}>
      <Home />
    </AllTheProviders>
  );
}

beforeEach(() => {
  fetch.resetMocks();
});

test("renders the locate button", () => {
  const { getByText } = render(setup());
  expect(getByText("Locate Me")).toBeDefined();
});

test("will call locate on 'Locate Me' click", () => {
  const globalOverrides = {
    locate: jest.fn()
  };
  const mockGeolocation = {
    getCurrentPosition: jest.fn((cb: any) =>
      cb({ coords: { latitude: 32.32, longitude: 22.42 } })
    )
  };
  (window.navigator as any).geolocation = mockGeolocation;
  const { getByText } = render(setup({ globalOverrides }));
  act(() => {
    fireEvent.click(getByText("Locate Me"));
  });
  expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
  expect(globalOverrides.locate).toHaveBeenCalledWith({
    latitude: 32.32,
    longitude: 22.42
  });
});

test("'Locate Me' click calls fetch ", async () => { 
  fetch.mockResponseOnce(JSON.stringify({fakeData}))
  let promise =  Promise.resolve()
  const globalOverrides = {
    setIsLocating: jest.fn(),
    setLocation: jest.fn((location: any)=> promise ),
  };
  const mockGeolocation = {
    getCurrentPosition: jest.fn((cb: any) =>
      cb({ coords: { latitude: 32.32, longitude: 22.42 } })
    )
  };
  (window.navigator as any).geolocation = mockGeolocation;
  const { getByText } = render(setup({ globalOverrides }));
  
  await act(async() => {
    fireEvent.click(getByText("Locate Me"));
    await promise;
  });
  expect(fetch).toHaveBeenCalled();
});
