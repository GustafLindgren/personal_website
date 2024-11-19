//import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'

import Home from './pages/Home.tsx'
import { Education } from './pages/education/Education.tsx'
import { Experience } from './pages/experience/Experience.tsx';
import Skills from './pages/Skills.tsx';
import NoPage from './pages/NoPage.tsx'

import Willys from './pages/experience/Willys.tsx';
import Webgroup from './pages/experience/Webgroup.tsx';
import Despec from './pages/experience/Despec.tsx';
import Coop from './pages/experience/Coop.tsx';
import Kaffemoppen from './pages/experience/Kaffemoppen.tsx'
import Studybuddy from './pages/experience/Studybuddy.tsx';

import Foi from './pages/education/Foi.tsx';
import Liu from './pages/education/Liu.tsx';

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
                <Route path='experience/despec' element={<Despec />} />
                <Route path='experience/coop' element={<Coop />} />
                <Route path='experience/kaffemoppen' element={<Kaffemoppen />} />
                <Route path='experience/studybuddy' element={<Studybuddy />} />
                
                <Route path='education/foi' element={<Foi />} />
                <Route path='education/liu' element={<Liu />} />

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
