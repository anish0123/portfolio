import coding from "../Lottie/coding.json";
import Lottie from "lottie-react";
import Title from "./Title";

const Welcome = () => {
  return (
    <div id="welcome">
      <div className="welcomeText">
        <h3>Hi, I am</h3>
        <Title />
        <h2>
          Information Technology Student at Metropolia <br></br>learning to
          build stuffs for web and mobiles.
        </h2>
        <h3>
          “ Code is like humor. When you have to explain it, it’s bad.” – Cory
          House
        </h3>
      </div>
      <div className="lottie">
        <Lottie animationData={coding} />
      </div>
    </div>
  );
};

export default Welcome;
