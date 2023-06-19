import { styled } from "styled-components";

const About = () => {
  return (
    <AboutMe id="profile" style={{paddingTop:"1.5rem"}}>
      <StyledHeading>About Me</StyledHeading>

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

      <StyledHeading>My Tech Stack</StyledHeading>
      <div>
        <a href="https://skillicons.dev">
          <Icons
            src="https://skillicons.dev/icons?i=js,html,css,java,nodejs,express,azure,react,c,mysql,sqlite,swift,kotlin,androidstudio,linux,figma,git,github,gitlab,postman"
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
  justify-content: space-around;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const StyledHeading = styled.h1`
font-size: 4.5rem;
margin:0;
padding:0;

@media only screen and (max-width: 1440px) {
  font-size: 3.5rem;
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
width: 70%;
font-size: 2rem;
font-weight: bold;

@media only screen and (max-width: 1440px) {
  width: 80%;
  font-size: 2rem;
}

@media only screen and (max-width: 1080px) {
  width: 80%;
  font-size: 1.8rem;
}

@media only screen and (max-width: 750px) {
  font-size: 1.5rem;
}

@media only screen and (max-width: 500px) {
  width: 85%;
  font-size: 1.2rem;
}

@media only screen and (max-width: 380px) {
  font-size: 1rem;
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
