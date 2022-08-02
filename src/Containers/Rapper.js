import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Rapper = (props) => {
  return (
    <div className=" min-h-[100vh] flex flex-col justify-between items-center">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Rapper;
