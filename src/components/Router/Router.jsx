/*Component seting up the routes for the Home, About, Fiche, and NotFound pages.*/
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Fiche from '../../pages/Fiche';
import NotFound from '../../pages/NotFound';

const AppRouter = () => {
    return (   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/fiche/*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    );
};

export default AppRouter;
