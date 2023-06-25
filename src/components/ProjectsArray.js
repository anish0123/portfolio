import {useState} from "react";
import Project from "./Project";
import {styled} from "styled-components";

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
            description: `Game Shots is a React Native project that allows users to upload their game achievements. <br />
                  Users can take a screenshot of their achievement and upload it along with a description of the achievement. 
                  This app is designed for gamers to share their achievements in various games.`,
            image: "https://users.metropolia.fi/~anishm/portfolio/gameShots.png",
            projectLink: "https://github.com/anish0123/gameShots",
          }
        ];
  return (
    <div id = "project">
        <StyledHeading>Projects</StyledHeading>
    { projects.map((project) => (<Project project={project} key={project.id}/>)) }
    </div>
  )
};

const StyledHeading = styled.h1`
font-size: 4rem;
margin:0;
padding:0;
margin-bottom: 4rem;
margin-left : 42%;



@media only screen and (max-width: 1440px) {
  font-size: 3rem;
 
}

@media only screen and (max-width: 1440px) {
  font-size: 3rem;
}

@media only screen and (max-width: 600px) {
    font-size: 3rem;
    margin-left : 35%;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3rem;
    margin-left : 30%;
  }

@media only screen and (max-width: 440px) {
  font-size: 2.5rem;
}
@media only screen and (max-width: 380px) {
  font-size: 2rem;
}
`;

export default ProjectsArray;
