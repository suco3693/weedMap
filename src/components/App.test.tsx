import React from "react";
import { AllTheProviders } from "../test-utils";
import { render, fireEvent, act } from "@testing-library/react";
import jest from "jest-mock";
import App from "./App";

function setup(props?: any) {
  return (
    <AllTheProviders {...props}>
      <App />
    </AllTheProviders>
  );
}

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
