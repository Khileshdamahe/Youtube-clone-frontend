import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Video from './pages/Video/video';

function App() {

  const [sideNavbar, setSideNavbar] = useState(true);

  const setSideNavbarFunc = (value) => {
    setSideNavbar(value);

  }
  return (
    <div className="App">
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />
      <Routes>
        <Route path='/' element={<Home sideNavbar={sideNavbar} />} />
        <Route path='/watch/:id' element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
