import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Homepage} from './pages/homepage/Homepage'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import { Blogpage } from "./pages/blogpage/Blogpage";
import { ContactUs } from "./pages/contactUs/ContactUs";




function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/blogpage" element={<Blogpage/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
