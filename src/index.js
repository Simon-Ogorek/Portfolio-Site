import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

import { BrowserRouter, Routes, Route } from "react-router";

import { HashRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </HashRouter>,
);