import React, { useEffect } from "react";
import './Assets/Css/Theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css' ;
import AOS from 'aos';
import Footer from "./Components/Containers/Footer/Footer";
import Home from "./Components/Containers/Front/Home";
import Header from "./Components/Containers/Header/Header";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
    AOS.init({disable: 'mobile'});

  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
