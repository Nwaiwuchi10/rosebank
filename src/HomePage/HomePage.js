import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Body2 from "../Compo/Body2";
import Feed2 from "../Compo/Feed2";
import Foot from "../Components/Foot";
import Footers from "../Components/Footers";
import Header2 from "../Components/Header2";
import Header3 from "../Components/Header3";
import Header4 from "../Compo/Header4";
import Services from "../Components/Services";
import BetterLife from "../Pages/BetterLife";
import Body from "../Pages/Body";
import Feed from "../Pages/Feed";
import Question from "../Pages/Question";
import Questions from "../Compo/Questions";
import BetterLife2 from "../Compo/BetterLife2";

const HomePage = () => {
  return (
    <div>
      <Header4 />
      {/* <main className="py-3"> */}
      <Container>
        <Body2 />
        <Feed2 />
        <BetterLife2 />
        <Questions />
      </Container>

      {/* </main> */}
      <Footers />
      <Foot />
    </div>
  );
};

export default HomePage;
