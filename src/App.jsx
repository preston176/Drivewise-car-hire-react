import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Sponsors from './components/Sponsors'
import Testimony from './components/Testimony'
import BestDeals from './components/BestDeals';
import NextCar from './components/NextCar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Main />
     <Sponsors />
     <Testimony />
     <BestDeals />
    <NextCar />
    </>
  )
}

export default App
