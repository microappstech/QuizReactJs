import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import All from './Pages/All';
import Login from './Pages/Auth/login';
import Register from './Pages/Auth/Register';
import Quizes from './Pages/Quizes';
import Questions from './Pages/Questions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="sections" element={<App />} />
          <Route path='Quizes' element={<Quizes />} />
          <Route path='Questions' element={<Questions />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
