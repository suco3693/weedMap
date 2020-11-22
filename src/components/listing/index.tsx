import React from "react";
import {useParams} from "react-router-dom";
import { GlobalContext, EMPTY } from "../../context";


function Listing() { 
    const values = React.useContext(GlobalContext);
    if (values === EMPTY) {
        throw new Error("Component must be wrapped with <Container.Provider>");
    }
    const { getListing } = values;
    let { id } = useParams<{id: string}>();
    getListing(parseInt(id));
    return (
        <div>
            I am Listing
            ID: {id }
        </div>
    )
};

export default Listing;
