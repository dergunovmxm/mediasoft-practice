import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Menu} from './pages/menu/Menu'
import {Homepage} from './pages/homepage/Homepage'
import {Navbar} from './components/Navbar'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="container">
        <Routes>
            <Route path="/" element={<Menu/>}/>
            <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
