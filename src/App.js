import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Search from "./pages/search/Search"
import Create from "./pages/create/Create"
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';



function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
       <BrowserRouter>
       <Navbar />
       <ThemeSelector />
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