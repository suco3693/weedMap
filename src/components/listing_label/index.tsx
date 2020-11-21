import React from "react";
import get from "lodash.get";
import { 
    Delivery,
    Dispensary,
    Doctor,
} from "../../icons"; 


export function getLabel(listings: any, label: string) { 
    if (get(listings, "listings").length) {
      let width = "20px";
      let height = "20px";
      let fill = "#7e7979";
      switch(label){
        case "Deliveries":
          return (
            <h2 key={label}>
              < Delivery fill={fill} width={width} height={height} />
              <strong> {label} Services </strong>
            </h2>
            
          )
        case "Dispensaries":
          return (
            
            <h2 key={label}>
              < Dispensary fill={fill} width={width} height={height} />
              <strong> {label} Storefronts </strong>
            </h2>
          )
        case "Doctors": 
          return (
            <h2 key={label}> 
              < Doctor fill={fill} width={width} height={height} />
              <strong> {label} </strong>
            </h2>
          )  
      }
    }
    return <div />;
  }

  export default getLabel;