import { styled } from "styled-components";
import SingleProject from "./SingleProject";
import StyledHeading from "./StyledHeading";

const ProjectsArray = () => {
  const projects = [
    {
      id: 1,
      title: "Oma Garden",
      description: `Oma Garden is a mobile application built with React Native that
                  allows users to upload and share pictures of their beloved plants.
                  This app is designed to provide a seamless and user-friendly
                  experience for plant enthusiasts.`,
      image: "https://users.metropolia.fi/~anishm/portfolio/omaGarden.png",
      projectLink: "https://github.com/anish0123/omaGarden",
    },

    {
      id: 2,
      title: "Answerpedia",
      description: `Answerpedia is a web application for users to ask questions and
                  view answers of any subjects related to coding and mathematics.`,
      image: "https://users.metropolia.fi/~anishm/portfolio/answerpedia.png",
      projectLink: "https://github.com/anish0123/Answerpedia",
    },
    {
      id: 3,
      title: "Play N Learn",
      description: `This app is created to help young children of age group 2-4 years
                  learn a variety of skills in a fun and engaging way. This app is
                  created as a school project for our course while learning about
                  Swift and SwiftUI.`,
      image: "https://users.metropolia.fi/~anishm/portfolio/playNLearn.png",
      projectLink: "https://github.com/anish0123/playNLearn",
    },
    {
      id: 4,
      title: "Attendance System",
      description: `This application is a stand alone application that implements room
                  database for maintaining and storing employee's work attendance
                  records.`,
      image:
        "https://users.metropolia.fi/~anishm/portfolio/attendanceSystem.png",
      projectLink: "https://github.com/anish0123/attendanceSystem",
    },
    {
      id: 5,
      title: "Game Shots",
      description: `Game Shots is a React Native project that allows users to upload their game achievements.
                  Users can take a screenshot of their achievement and upload it along with a description of the achievement. 
                  This app is designed for gamers to share their achievements in various games.`,
      image: "https://users.metropolia.fi/~anishm/portfolio/gameShots.png",
      projectLink: "https://github.com/anish0123/gameShots",
    },
  ];
  return (
    <StyledDiv id="project">
      <StyledHeading>Projects</StyledHeading>
      <ProjectHolder>
        {projects.map((project) => (
          <SingleProject project={project} key={project.id} />
        ))}
      </ProjectHolder>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 5%;
  height: 150vh;

  @media only screen and (max-width: 1440px) {
    padding-top: 7%;
  }

  @media only screen and (max-width: 1114px) {
    height: 250vh;
  }

  @media only screen and (max-width: 900px) {
    height: 150vh;
    padding-top: 9%;
  }

  @media only screen and (max-width: 750px) {
    padding-top: 15%;
  }

  @media only screen and (max-width: 600px) {
    height: 120vh;
  }

  @media only screen and (max-width: 440px) {
    height: 250vh;
  }


  @media only screen and (max-width: 380px) {
    padding-top: 25%;
  }
`;

const ProjectHolder = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
`;



export default ProjectsArray;
