import React from "react";
import Branch from "../components/branch/Branch";
import Calendar from "../components/calendar/Calendar";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import System from "../components/introSystem/System";
import ScrollToTop from "../components/Scroll";

const Introduce = () => {
  return (
    <div>
      <Header />
      <System />
      <Calendar />
      <Branch />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Introduce;
