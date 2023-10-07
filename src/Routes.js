import React from "react";
// need to replace Switch with Routes also for <Switch> bwlow with <Routes>
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const routes = [ ];

//Changed Routes to Routes01 because it conflicts with new node module Routes
export const Routes01 = () => ( 
    <Router>
        <Routes>
            {routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                    >
                        <route.Component />
                    </Route>
                ))}
        </Routes>
    </Router>
)