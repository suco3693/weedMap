import React from "react";
import * as config from "../constants/config";

type IsLocating = boolean;
type Regions = any;
type Location = any;
type Listing = any;
type LatLng = {
  latitude: number;
  longitude: number;
};
type Values = {
  isLocating: IsLocating;
  setIsLocating: (isLocating: boolean) => void;
  regions: Regions;
  setRegions: (regions: Regions) => void;
  location: Location;
  setLocation: (location: Location) => void; 
  setListing: (listing: Listing) => void;
  getListing: (wmid: number) => void;
  error: string;
  setError: (error: string) => void;
  locate: (cords: LatLng) => void;
  listing: Listing;
};

export function useGlobal(
  initialState: {
    isLocating?: IsLocating;
    regions?: Regions;
    location?: Location;
    listing? : Listing;
  } = {}
): Values {
  const [isLocating, setIsLocating] = React.useState(!!initialState.isLocating);
  const [regions, setRegions] = React.useState(initialState.regions || {});
  const [location, setLocation] = React.useState(initialState.location || {});
  const [listing, setListing] = React.useState(initialState.listing || {});
  const [error, setError] = React.useState("");

  async function locate(coords: LatLng) {
    
    const params = [
      `include${encodeURIComponent("[]")}=regions.listings`,
      `latlng=${encodeURIComponent(`${coords.latitude},${coords.longitude}`)}`
    ];
    const url = `https://${config.API_HOST}/discovery/v1/location?${params.join(
      "&"
    )}`;

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    };
    setIsLocating(true);

    fetch(url, options)
      .then(res => {
        // check if response is ok and stream is done before turning to json
        if(res.ok){
          return res.json();
        }
      })
      .then((json: any) => {
        setLocation(json.data.location);
        setRegions(json.data.regions);
      })
      .catch(() => setError("Oops something went wrong"));
    setIsLocating(false);
  }

  async function getListing(wmid:number) {
    const url = `https://${config.API_HOST}/discovery/v1/listings/${wmid}`;

    const options = {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    };

    fetch(url,options)
      .then((res)=>{
        if(res.ok){
          return res.json();
        }
      })
      .then((json: any)=>{
        setListing(json.data.listing);
      })
      .catch(()=> setError("Listing did not load properly"))
  }

  return {
    isLocating,
    setIsLocating,
    regions,
    setRegions,
    location,
    setLocation,
    locate,
    getListing,
    setListing,
    listing,
    setError,
    error
  };
}

export const EMPTY: unique symbol = Symbol();
export const GlobalContext = React.createContext<Values | typeof EMPTY>(EMPTY);
