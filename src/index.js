// index.js (전역 설정)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Registration from './pages/Registration';
import SearchRoom from './pages/SearchRoom';
import DetailRoom from './components/DetailRoom';
import Mypage from './pages/Mypage';
import NaverCallback from './pages/NaverRedirect';
import GoogleCallback from './pages/GoogleRedirect';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/SearchRoom" element={<SearchRoom/>} />
        <Route path="/DetailRoom" element={<DetailRoom/>} />
        <Route path="/Mypage/*" element={<Mypage />} />
        <Route path="/NaverCallback" element={<NaverCallback />} />
        <Route path="/GoogleCallback" element={<GoogleCallback />} />
      </Routes>

      <ToastContainer 
        position="top-right" 
        autoClose={4000} 
        hideProgressBar={true}
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        theme="colored"
        style={{width:"550px", height:"200px", fontWeight:"bold", fontSize:"19px"}}
      />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
