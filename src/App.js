
import { Routes,Route } from 'react-router-dom';
import './App.css';



// components

import Home from './pages/Home';




function App() {
  return (
    <div>
    
      <Routes>
       
     
        <Route path='/' element={<Home/>}/>
       
      </Routes>
     
    {/* <Home/> */}
    </div>
  );
}

export default App;