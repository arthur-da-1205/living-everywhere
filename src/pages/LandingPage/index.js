import React from "react";

import { Header, Hero } from "components";
import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero}></Hero>
    </>
  );
};

export default LandingPage;
