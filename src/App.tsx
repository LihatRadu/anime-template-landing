import './App.css'
import {motion} from 'framer-motion'
import './data/data.ts';
import Navbar from './components/Navbar'
import { mainData } from './data/data.ts';
import What from './components/What.tsx';
import AnimeList from './components/AnimeList.tsx';
import Footer from './components/Footer.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Banner from './components/Banner.tsx';

function App() {
  

  return (
    <>
      <Navbar />
      <main className='rectangle w-full h-svh bg-gradient-to-r from-orange-200 to-pink-200 bg-transparent
        bg-clip-content'>
       
        <motion.h1 className='text-5xl text-center font-bold py-20 bg-gradient-to-r from-cyan-500 to-blue-500 
          text-transparent bg-clip-text'>
          {mainData.name}
        </motion.h1>
        <p className='text-center text-white text-xl'>{mainData.description}</p>
      </main>
     
      <What />
      <Router>
        <Routes>
          <Route path="/" element={<AnimeList />}/>
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
