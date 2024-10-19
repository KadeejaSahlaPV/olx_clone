import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Signup from "./Pages/Signup"



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>  
        
      </Router>
    </div>
  );
}

export default App;
