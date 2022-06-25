import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"

import {Homepage} from './pages/homepage/Homepage'
import {Navbar} from './components/Navbar'



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
      <div className="container">
        <Routes>
            <Route path="/homepage" element={<Homepage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
