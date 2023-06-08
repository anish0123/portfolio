import {styled} from "styled-components";

const MainName = () => {
    return(
        <StyledMainName>Anish Maharjan</StyledMainName>
    )
}

const StyledMainName = styled.h1`
  text-decoration: none;
  font-size: 2rem;
  color: white;
  background: linear-gradient(
      to right,
      rgba(93, 157, 11, 1),
      rgba(93, 157, 11, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  &:hover {
    background-size: 0 3px, 100% 3px;
  }
  margin-right: 60px;
  margin-top: 0;
  padding-top: 0;
  margin-left: 2rem;
  font-family: "League Spartan", sans-serif;

 
  @media only screen and (max-width: 1080px) {
    padding: 0;
    font-size: 1.5rem;
    padding-top: 5px;
  }


  @media only screen and (max-width: 500px) {
    padding: 0;
    font-size: 1.2rem;
    padding-top: 3px;
  }

  @media only screen and (max-width: 440px) {
    padding: 0;
    font-size: 1rem;
    padding-top: 7px;
  }

  @media only screen and (max-width: 380px) {
    padding: 0;
    font-size: 1rem;
    margin-left: 10px;
    padding-top: 3px;
  }

  @media only screen and (max-width: 300px) {
    padding: 0;
    font-size: 0.6rem;
    margin-left: 10px;
    padding-top: 8px;
  }
`;

export default MainName