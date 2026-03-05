import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar.jsx/Navbar'
import TopBannar from './Components/Pages/TopBannar/TopBannar'
import MainSection from './Components/MainSection/MainSection'

const tiketAllData = fetch('./tiketData.json')
  .then(res => res.json())

function App() {
  const [progress, setProgress]= useState([]);
  return (
    <>
      <div className='bg-[#F5F5F5]'>
         <Navbar></Navbar>
        <TopBannar progress={progress}></TopBannar>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <MainSection 
          tiketAllData={tiketAllData}
          progress={progress}
          setProgress={setProgress}
          ></MainSection>
        </Suspense>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
