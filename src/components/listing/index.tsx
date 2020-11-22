import React from "react";
import {useParams} from "react-router-dom";
import get from "lodash.get";


function Listing() {
     let { id } = useParams<{id: string}>();
    return (
        <div>
            I am Listing
            ID: {id }
        </div>
    )
};

export default Listing;
