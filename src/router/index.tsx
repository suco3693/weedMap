import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../components/home";
import Listing from "../components/listing"

function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/listing/:id"  component={Listing} />
                <Route path="/"  component={Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;