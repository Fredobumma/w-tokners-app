import React from "react";
import { SVGSource } from "../common/svg";
// import Switcher from "../common/switcher";
// import Navbar from "./../common/block-components/navbar";
// import Hero from "../common/block-components/block-hero";
// import Features from "../common/block-components/block-features";
// import Services from "../common/block-components/block-services";
// import Objectives from "../common/block-components/block-objectives";
// import Showcase from "../common/block-components/block-showcase";
// import Presale from "../common/block-components/block-presale";
// import PurchaseGuide from "../common/block-components/block-purchase";
// import Footer from "../common/block-components/block-footer";

const Home = ({ menu, theme, screenWidth, toggleMenu, ...rest }) => {
  return (
    <React.Fragment>
      <SVGSource />
      <center>{/* <Switcher {...rest} /> */}</center>
      {/* <Navbar menu={menu} theme={theme} toggleMenu={toggleMenu} /> */}
      {/* <Hero /> */}
      {/* <Features theme={theme} /> */}
      {/* <Services /> */}
      {/* <Objectives /> */}
      {/* <Showcase screenWidth={screenWidth} /> */}
      {/* <Presale theme={theme} /> */}
      {/* <PurchaseGuide theme={theme} /> */}
      {/* <Footer theme={theme} /> */}
    </React.Fragment>
  );
};

export default Home;
