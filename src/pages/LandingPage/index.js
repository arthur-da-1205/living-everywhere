import React from "react";

import { Categories, Header, Hero, MostPicked } from "components";
import landingPage from "json/landingPage.json";

const LandingPage = (props) => {
  const refMostPicked = React.createRef();

  return (
    <>
      <Header {...props}></Header>
      <Hero refMostPicked={refMostPicked} data={landingPage.hero}></Hero>
      <MostPicked
        refMostPicked={refMostPicked}
        data={landingPage.mostPicked}
      ></MostPicked>
      <Categories data={landingPage.categories}></Categories>
    </>
  );
};

export default LandingPage;
