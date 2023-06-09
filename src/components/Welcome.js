import coding from "../Lottie/coding.json";
import Lottie from "lottie-react";
import MyName from "./MyName";
import { styled } from "styled-components";
import Iam from "./Iam";

const Welcome = () => {
  return (
    <WelcomeDiv id="welcome">
      <WelcomeText>
        <h3>Hi, I am</h3>
        <MyName />
        <Iam />
        <h3>
          “ Code is like humor. When you have to explain it, it’s bad.” – Cory
          House
        </h3>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://users.metropolia.fi/~anishm/portfolio/CV%20-%20Anish%20Maharjan.pdf";
          }}
        >
          View My CV
        </Button>
      </WelcomeText>
      <LottieDiv>
        <Lottie animationData={coding} />
      </LottieDiv>
    </WelcomeDiv>
  );
};

const Button = styled.button`
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  margin: 1em 0 0 2em;
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;

const WelcomeDiv = styled.div`
  margin-left: 10rem;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 1920px) {
    margin-left: 15px;
    height: 90vh;
  }

  @media only screen and (max-width: 1114px) {
    height: 115vh;
  }

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }

  @media only screen and (max-width: 430px) {
    height: 110vh;
  }

  @media only screen and (max-width: 390px) {
    height: 120vh;
  }

`;

const WelcomeText = styled.div`
  margin-right: 5rem;
  margin-top: 13rem;

  @media only screen and (max-width: 1920px) {
    margin-right: 5rem;
    font-size: 1rem;
    margin-top: 0rem;
  }

  @media only screen and (max-width: 1440px) {
    margin-top: 4rem;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 500px) {
    font-size: 15px;
    
  }
`;

const LottieDiv = styled.div`
margin-top: 8rem;
width: 40%;

@media only screen and (max-width: 1920px) {
  margin-top: 0rem;
}

@media only screen and (max-width: 1080px) {
  width: 35%;
}

@media only screen and (max-width: 900px) {
  margin-top:1rem;
  width: 40%
}

@media only screen and (max-width: 750px) {
  width: 45%
}

@media only screen and (max-width: 440px) {
  width: 70%
}
`;

export default Welcome;
