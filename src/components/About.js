import { styled } from "styled-components";
import Lottie from "lottie-react";
import helloWorld from "../Lottie/helloWorld.json"

const About = () => {
  return (
    <AboutMe id="about">
      <StyledHeading >About Me</StyledHeading>
      <StyledParaDiv>
      <LottieDiv>
      <Lottie animationData={helloWorld} />
      </LottieDiv>
      <ProfilePara>
        I am second-year IT student in Metropolia University of Applied
        Sciences, currently learning and gaining knowledge in various
        programming languages and technologies. I am proficient in
        problem-solving and analytical thinking, and I am constantly working to
        improve my skills and stay up-to-date with the latest advancements in
        the field. I am currently seeking internships or entry-level positions
        to gain hands-on experience and contribute to the development of
        innovative software.
      </ProfilePara>
      
      </StyledParaDiv>

      <StyledHeading>My Tech Stack</StyledHeading>
      <div>
        <a href="https://skillicons.dev">
          <Icons
            src="https://skillicons.dev/icons?i=js,html,css,java,nodejs,express,azure,react,c,mysql,sqlite,mongodb,swift,kotlin,linux,figma,git,"
            alt="tech stack"
          />
        </a>
      </div>
    </AboutMe>
  );
};

const AboutMe = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  padding-bottom: 15%;

  @media only screen and (max-width: 1440px) {
    padding-top: 1%;
   
  }
`;

const StyledHeading = styled.h1`
font-size: 4rem;
margin:0;
padding:0;
margin-bottom: 4rem;


@media only screen and (max-width: 1440px) {
  font-size: 3rem;
 
}

@media only screen and (max-width: 1440px) {
  font-size: 3rem;
}

@media only screen and (max-width: 440px) {
  font-size: 2.5rem;
}
@media only screen and (max-width: 380px) {
  font-size: 2rem;
}
`;

const ProfilePara = styled.p`
width: 40%;
font-size: 1.5rem;
font-weight: bold;
margin-left : 10%;

@media only screen and (max-width: 1440px) {
  width: 80%;
  font-size: 1.5rem;
  margin-right: 5%;
}

@media only screen and (max-width: 1080px) {
  width: 80%;
  font-size: 1.8rem;
  margin-left: 6%;
}

@media only screen and (max-width: 900px) {
  width: 90%;
  font-size: 1.5rem;
  margin-left: 6%;
}

@media only screen and (max-width: 750px) {
  font-size: 1.2rem;
}

@media only screen and (max-width: 500px) {
  font-size: 1rem;
  margin-left: 10%;
}

@media only screen and (max-width: 440px) {
  font-size: 0.9rem;
  margin-left: 2%;
}

@media only screen and (max-width: 380px) {
  font-size: 1rem;
}
`;

const StyledParaDiv = styled.div`
display: flex; 
 margin: 0; 
 padding: 0;

 @media only screen and (max-width: 500px) {
  flex-direction : column;
  align-items: center;
  justify-content: center;
}

`;

const LottieDiv = styled.div`
width: 25%;
margin-left: 15%;

@media only screen and (max-width: 1440px) {
  width: 50%;
 padding-top: 5%;
}

@media only screen and (max-width: 1080px) {
  width: 70%;
 padding-top: 15%;
 
}

@media only screen and (max-width: 500px) {
  width: 80%;
  padding-top: 20%;
}

@media only screen and (max-width: 440px) {
  width: 80%;
  padding-top: 30%;
}
`;

const Icons = styled.img`
    width: 80rem;
    padding: 0;

    @media only screen and (max-width: 1440px) {
      width: 75rem;
    }

    @media only screen and (max-width: 1080px) {
      width: 58rem;
    }

    @media only screen and (max-width: 900px) {
      width: 50rem;
    }

    @media only screen and (max-width: 750px) {
      width: 42rem;
    }

    @media only screen and (max-width: 500px) {
      width: 28rem;
    }

    @media only screen and (max-width: 440px) {
      width: 24rem;
    }

    @media only screen and (max-width: 380px) {
      width: 21rem;
    }

    @media only screen and (max-width: 300px) {
      width: 18rem;
    }
`;


export default About;
