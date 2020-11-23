import React from "react";
import {
    LocationHoursWrapper
} from "./style"


const capitalize = (day: string): string =>{
    return day.charAt(0).toUpperCase() + day.slice(1);
}

const LocationHours = ({ hours }: { hours: any }) => {
    if(hours){
        return (
            <LocationHoursWrapper> 
                {Object.keys(hours).map((day)=>(
                    <div key={day}>
                        <h2>{capitalize(day)}</h2>
                        <div>{hours[day].open}-{hours[day].close}</div>
                    </div>
                ))}
            </LocationHoursWrapper>
        )
    }else{
        return (
            <LocationHoursWrapper> 
                <div></div>
            </LocationHoursWrapper>
        )
    }
};

export default LocationHours;
