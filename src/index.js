import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.js'
import NoPage from './nopage.js';
import MainContent from './mainContent.js';
import Home from './home.js';
import Contact from './compose.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<MainContent page = "Notes" />} />
          <Route path="recents" element={<MainContent page = "Recents" />} />
          <Route path="compose" element={<Contact />} />
          <Route path="favourites" element={<MainContent page = "Favourites" />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
