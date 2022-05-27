import React from 'react'
import Beautiful from '../components/beautyTip/Beautiful';
import Calendar from "../components/calendar/Calendar";
import Branch from "../components/branch/Branch";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Scroll from "../components/Scroll"
const Home = () => {
  return (
    <div>
      <Header/>
      <Beautiful/>
      <Calendar/>
      <Branch/>
      <Footer/>
      <Scroll/>
    </div>
  )
}

export default Home