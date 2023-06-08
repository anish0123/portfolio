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
        <AnchorLink href="#welcome" style={{textDecoration : "none"}}>
          <MainName />
        </AnchorLink>
      </div>
      <div className="navRight">
        <AnchorLink href="#profile" style={{textDecoration: "none"}}>
          <NavRightItems title="About me" />
        </AnchorLink>
        <AnchorLink href="#project" style={{textDecoration: "none"}}>
        <NavRightItems title="Projects" />
        </AnchorLink>
        <AnchorLink href="#contact" style={{textDecoration: "none"}}>
        <NavRightItems title="Contact" />
        </AnchorLink>
      </div>
    </div>
  );
};


export default NavBar;
