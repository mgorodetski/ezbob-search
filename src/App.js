import './index.css';
import React from 'react';
import Main from './component/Main.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './component/searchPage/SearchMain.jsx'

function App() {
  return (
    <div>
      
        <Routes>
          {<Route path='/search' element={<SearchPage />} />}
          {<Route path='/' element={<Main />} /> }
          
        </Routes>
   
    </div>
    
  );

}

export default App;
