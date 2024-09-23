import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.js'
import NoPage from './nopage.js';
import MainContent from './mainContent.js';
import Home from './home.js';
import Compose from './compose.js';
import Notes from './notes.js';
import Preview from './preview.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="notes" element={<Notes/>} />
          <Route path="recents" element={<MainContent page = "Recents" />} />
          <Route path="compose" element={<Compose  content="Write your contet"/>} />
          <Route path="favourites" element={<MainContent page = "Favourites" />} />
          <Route path='compose/:noteId'  element={<Compose  content="Write your contet"/>}/>
          <Route path='preview/:noteId'  element={<Preview  content="Write your contet"/>}/>

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
