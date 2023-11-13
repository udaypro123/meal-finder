import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route} from "react-router-dom"
import Showdetails from './components/Showdetails';
import Favirote from './components/Favirote';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/showdetails' element={<Showdetails/>} />
    <Route path='/fav' element={<Favirote/>} />
    <Route path='/favlist' element={<Favirote/>} />


    </Routes>
    </>
  );
}

export default App;
