import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../components/home";
import Location from "../components/location"

function AppRouter() {
    return(
        <Router>
            <Switch>
                <Route path="/location/:id"  component={Location} />
                <Route path="/"  component={Home} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
