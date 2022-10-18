import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { NotFound } from '../components/NotFound';

const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/articles" element={<Articles />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterPrincipal;