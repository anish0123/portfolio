import coding from "../Lottie/coding.json";
import Lottie from "lottie-react";
import Title from "./Title";
import { styled } from "styled-components";
import Iam from "./Iam";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="welcomeText">
        <h3>Hi, I am</h3>
        <Title />
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
      </div>
      <div className="lottie">
        <Lottie animationData={coding} />
      </div>
    </div>
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

export default Welcome;
