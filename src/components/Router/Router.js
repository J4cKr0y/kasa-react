
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Fiche from '../../pages/Fiche';
import NotFound from '../../pages/NotFound';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/fiche/:id" component={Fiche} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default AppRouter;