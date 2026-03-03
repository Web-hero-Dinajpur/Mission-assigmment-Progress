import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar.jsx/Navbar'
import TopBannar from './Components/Pages/TopBannar/TopBannar'
import MainSection from './Components/MainSection/MainSection'

const tiketAllData = fetch('./tiketData.json')
  .then(res => res.json())

function App() {


  return (
    <>
      <Navbar></Navbar>
      <div className='bg-[#F5F5F5]'>
        <TopBannar></TopBannar>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <MainSection tiketAllData={tiketAllData}></MainSection>
        </Suspense>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
