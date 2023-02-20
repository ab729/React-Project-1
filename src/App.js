import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Search from "./pages/search/Search"
import Create from "./pages/create/Create"



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/orders/:id' element={<Order/>} />
          <Route path='/search' element={<Search />} />
          <Route path='/create' element={<Create/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App; 