import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar.jsx/Navbar'
import TopBannar from './Components/Pages/TopBannar/TopBannar'
import MainSection from './Components/MainSection/MainSection'
import { ToastContainer } from 'react-toastify'

const tiketAllData = fetch('./tiketData.json')
  .then(res => res.json())

function App() {
  const [progress, setProgress] = useState([]);
  const [count, setCount] = useState([]);
  // console.log(count)
 
  return (
    <>
      <div className='bg-[#F5F5F5]'>
        <Navbar></Navbar>
        <TopBannar 
        progress={progress}
        count={count}
        ></TopBannar>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <MainSection
            tiketAllData={tiketAllData}
            progress={progress}
            setProgress={setProgress}
            count={count}
            setCount={setCount}
          ></MainSection>
        </Suspense>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
