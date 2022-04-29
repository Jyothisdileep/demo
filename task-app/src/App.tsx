import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main'
import Card from './Card';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Main />
     <Card />
     {/* <Router>
       <Routes>
         <Route path='/' element=
       </Routes>
     </Router> */}
    </div>
  );
}

export default App;
