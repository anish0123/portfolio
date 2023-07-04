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
        <AnchorLink href="#about" style={{ textDecoration: "none" }}>
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
  margin-left: 82em;

  @media only screen and (max-width: 1920px) {
    margin-left: 75em;
  }

  @media only screen and (max-width: 1440px) {
    margin-left: 47em;
  }

  @media only screen and (max-width: 1280px) {
    margin-left: 40em;
  }

  @media only screen and (max-width: 1114px) {
    margin-left: 30em;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 22em;
  }

  @media only screen and (max-width: 834px) {
    margin-left: 18em;
  }

  @media only screen and (max-width: 800px) {
    margin-left: 14em;
  }


  @media only screen and (max-width: 750px) {
    margin-left: 12em;
  }

  @media only screen and (max-width: 600px) {
    margin-left: 5rem;
  }

  @media only screen and (max-width: 500px) {
    margin-left: 6em;
  }

  @media only screen and (max-width: 440px) {
    margin-left: 5em;
  }

  @media only screen and (max-width: 480px) {
    margin-left: 4.5em;
  }

  @media only screen and (max-width: 414px) {
    margin-left: 3em;
  }

  @media only screen and (max-width: 393px) {
    margin-left: 2em;
  }

  @media only screen and (max-width: 380px) {
    margin-left: 4em;
  }

  @media only screen and (max-width: 360px) {
    margin-left: 3em;
  }

  @media only screen and (max-width: 300px) {
    margin-left: 10%;
  }
`;

export default NavBar;
