import coding from "../Lottie/coding.json"
import Lottie from "lottie-react"

const Welcome = () => {
  return (
    <div className="about">
        <div className="aboutText"> 
        <p>Hi, I am</p>
      <h1>Anish Maharjan.</h1>
      <h1>Information Technology Student at Metropolia <br></br>learning to build stuffs for web and mobiles.</h1>
        </div>
      <div className="lottie">
      <Lottie animationData={coding}/>
      </div>
      
    </div>
  );
};

export default Welcome;
