import React from "react";
import './Assets/Css/Theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Containers/Footer/Footer";
import Home from "./Components/Containers/Front/Home";
import Header from "./Components/Containers/Header/Header";
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function App() {
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
