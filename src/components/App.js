/*import './App.scss';*/
import React from 'react';
import AppRouter from './Router/Router';
import Footer from './__Footer/Footer';
import Header from './__Header/Header'

const App = () => {
    return (
        <div>
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
};

export default App;