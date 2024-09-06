import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './navbar';
import SideBar from './sidebar';
import MainContent from './mainContent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <NavBar />   

    <div class ="row">
    <SideBar />
    <MainContent />
        
    </div> 

    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
