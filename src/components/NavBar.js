import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { styled } from "styled-components";
import MainName from "./navBar/MainName";
import NavRightItems from "./navBar/NavRightItems";

const NavBar = () => {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div id={navbar ? "navBarScrolled" : "navBar"}>
      <div>
        <AnchorLink href="#welcome" style={{ textDecoration: "none" }}>
          <MainName />
        </AnchorLink>
      </div>
      <NavRight>
        <AnchorLink href="#profile" style={{ textDecoration: "none" }}>
          <NavRightItems title="About me" />
        </AnchorLink>
        <AnchorLink href="#project" style={{ textDecoration: "none" }}>
          <NavRightItems title="Projects" />
        </AnchorLink>
        <AnchorLink href="#contact" style={{ textDecoration: "none" }}>
          <NavRightItems title="Contact" />
        </AnchorLink>
      </NavRight>
    </div>
  );
};

const NavRight = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 0;
  margin: 0;
  margin-left: 50%;

  @media only screen and (max-width: 1920px) {
    margin-left: 63%;
  }

  @media only screen and (max-width: 1440px) {
    margin-left: 53%;
  }

  @media only screen and (max-width: 1080px) {
    margin-left: 45%;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 40%;
  }

  @media only screen and (max-width: 750px) {
    margin-left: 28%;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 10%;
  }

  @media only screen and (max-width: 440px) {
    margin-left: 8%;
  }

  @media only screen and (max-width: 380px) {
    margin-left: 5%;
  }

  @media only screen and (max-width: 300px) {
    margin-left: 0;
  }
`;

export default NavBar;
