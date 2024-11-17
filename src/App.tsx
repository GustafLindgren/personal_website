//import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'

import Home from './pages/Home.tsx'
import Education from './pages/Education.tsx'
import { Experience } from './pages/Experience.tsx';
import Skills from './pages/Skills.tsx';
import NoPage from './pages/NoPage.tsx'
import Willys from './pages/Willys.tsx';
import Webgroup from './pages/Webgroup.tsx';

const App = () => {

  return (
    <>
      <div className='crt-animation'>

        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navbar />} >
                <Route index element={<Home />} />
                <Route path='experience' element={<Experience />} />
                <Route path='education' element={<Education />} />
                <Route path='skills' element={<Skills />} />

                <Route path='experience/willys' element={<Willys />} />
                <Route path='experience/webgroup' element={<Webgroup />} />

                <Route path='*' element={<NoPage />} />
              </Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
