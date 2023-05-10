import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div id="navBar">
      <div className="navLeft">
        <AnchorLink href="#welcome"id="mainText">
          <h1 id="mainName" className="navItems">
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
