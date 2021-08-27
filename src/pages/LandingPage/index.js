import React from "react";

import { Header, Hero, MostPicked } from "components";
import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero}></Hero>
      <MostPicked data={landingPage.mostPicked}></MostPicked>
    </>
  );
};

export default LandingPage;
