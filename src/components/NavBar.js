import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div id="navBar">
      <div className="navLeft"><AnchorLink href='#navBar'><h1 className="navItems"> Anish Maharjan</h1></AnchorLink>
      </div>
      <div className="navRight">
        <AnchorLink href='#profile'><h1 className="navItems"> About Me</h1></AnchorLink>
        <h1 className="navItems"> Project</h1>
        <h1 className="navItems"> Contact</h1>
      </div>
    </div>
  );
};

export default NavBar;
