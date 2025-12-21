import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from './Router/Router';
import Footer from './__Footer/Footer';
import Header from './__Header/Header';

const App = () => {
    return (
        <Router>
            <Header />
            <AppRouter />
            <Footer />
        </Router>
    );
};

export default App;
