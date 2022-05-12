import React from "react";
import Calendar from "../components/calendar/Calendar";
import Header from "../components/header/Header";
import System from "../components/introSystem/System";
import ScrollToTop from "../components/Scroll";

const Introduce = () => {
  return (
    <div>
      <Header />
      <System />
      <Calendar/>
      <ScrollToTop/>
    </div>
  );
};

export default Introduce;
