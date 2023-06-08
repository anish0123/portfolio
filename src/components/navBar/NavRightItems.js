import { styled } from "styled-components";

const NavRightItems = ({ title }) => {
  return <StyledRightItem>{title}</StyledRightItem>
};

const StyledRightItem = styled.h1`
text-decoration: none;
  color: white;
  margin: 0;
  padding: 0;
  margin-right: 20px;
 margin-top: 0.6rem;
  font-family: "League Spartan", sans-serif;
  
  font-size: 1.3rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: #5f7adb;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
  @media only screen and (max-width: 1440px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 440px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.6rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.5rem;
  }
  
`;

export default NavRightItems;
