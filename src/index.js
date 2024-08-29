import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Contact from "./Components/Pages/Contact"
import About from "./Components/Pages/About"
import Mybasket from './Components/Pages/Mybasket';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<App />} />
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/mybasket' element={<Mybasket/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
