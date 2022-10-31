import React, { useState } from "react";
import InfoSection from "../components/Infosection/Infosection";
import { Sidebar } from "../components/Sidebar/Sidebar";
import Heading from '../components/Navbar/Navbar';
import Image1 from "../images/delivery.svg";
import Image2 from "../images/deli.svg";
import InfoSectionLight from "../components/InfoSectionLight/InfoSectionLightElements";
// import Services from "../components/services";
import Image3 from "../images/del.svg"
import Footer from "../components/Footer/Footer";
import HeroSection from "./Herosection/Herosection";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Heading toggle={toggle} />
      <HeroSection/>
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Markets We Serve"
        title="DELIVERING RESULTS FOR INDUSTRY LEADERS"
        text="With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Supply Chain and Logistics"
        title="Supply Chain Management"
        text="We are at the forefront of developing innovative supply chain solutions, fusing our global network and depth of expertise with pioneering digital innovations to enable our customers to stay ahead."
        btnText="Explore"
      />
      {/* <Services /> */}
      <InfoSection
        image={Image3}
        id="#"
        subtitle="Experience simplified global customs with local expertise"
        title="Customs Services"
        text="With LC's Customs Services, you can simplify your imports and exports anywhere in the world."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};

export default Login