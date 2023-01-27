import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// import Typed from 'typed.js'

import Home from './Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/devop' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
