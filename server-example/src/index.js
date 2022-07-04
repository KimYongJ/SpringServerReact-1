import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DeptDelete from './DeptDelete';
import DeptInsert from './DeptInsert';
import DeptUpdate from './DeptUpdate';
import DeptSelect from './DeptSelect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/DeptSelect" element={<DeptSelect />}></Route>
      <Route path="/DeptInsert" element={<DeptInsert />}></Route>
      <Route path="/DeptDelete" element={<DeptDelete />}></Route>
      <Route path="/DeptUpdate" element={<DeptUpdate />}></Route>
      <Route path="/App" element={<App />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
