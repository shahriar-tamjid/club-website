import React from "react";
import "./Home.css";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Blogs from "../components/Blogs";
// import Viewers from "./pages/Viewers";
// import Recommends from "./pages/Recommends";
// import NewArrivals from "./pages/NewArrivals";
// import Originals from "./pages/Originals";
// import Trending from "./pages/Trending";

function Home() {

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Blogs />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
