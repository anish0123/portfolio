import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      <div className="navLeft">
        <AnchorLink href="#welcome" id="mainText">
          <h1 id="mainName" className="navLeftItem">
            Anish Maharjan
          </h1>
        </AnchorLink>
      </div>
      <div className="navRight">
        <AnchorLink href="#profile" className="anchor">
          <h1 className="navItems"> About Me</h1>
        </AnchorLink>
        <AnchorLink href="#project" className="anchor">
          <h1 className="navItems"> Projects</h1>
        </AnchorLink>
        <AnchorLink href="#contact" className="anchor">
          <h1 className="navItems"> Contact</h1>
        </AnchorLink>
      </div>
    </div>
  );
};

export default NavBar;
