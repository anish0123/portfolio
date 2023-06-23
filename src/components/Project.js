import {styled} from "styled-components";


const Project = () => {
  return (
    <ProjectDiv>
      <h1 id="projectTitle">Projects</h1>
      
      <div className="projectSelection">
      
        <div className="singleProject">
          <img
            src="https://users.metropolia.fi/~anishm/portfolio/omaGarden.png"
            alt="omaGarden logo"
            className="projectImage"
          />
          <div className="projectInfo">
            <h4 className="projectTitle">Oma Garden</h4>
            <h6 className="projectPara">
              Oma Garden is a mobile application built with React Native that
              allows users to upload and share pictures of their beloved plants.
              <br></br>
              This app is designed to provide a seamless and user-friendly
              experience for plant enthusiasts.
            </h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a
                className="links"
                href="https://github.com/anish0123/omaGarden"
              >
                Oma Garden
              </a>
            </h6>
          </div>
        </div>
        <div className="singleProject">
          <img
            src="https://users.metropolia.fi/~anishm/portfolio/answerpedia.png"
            alt="answerpedia logo"
            className="projectImage"
          />
          <div className="projectInfo">
            <h4 className="projectTitle">Answerpedia</h4>
            <h6 className="projectPara">
              Answerpedia is a web application for users to ask questions and
              view answers of any subjects related to coding and mathematics.
            </h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a
                className="links"
                href="https://github.com/anish0123/Answerpedia"
              >
                Answerpedia
              </a>
            </h6>
          </div>
        </div>

        <div className="singleProject">
          <img
            src="https://users.metropolia.fi/~anishm/portfolio/playNLearn.png"
            alt="play and learn logo"
            className="projectImage"
          />
          <div className="projectInfo">
            <h4 className="projectTitle">Play N Learn</h4>
            <h6 className="projectPara">
              This app is created to help young children of age group 2-4 years
              learn a variety of skills in a fun and engaging way. This app is
              created as a school project for our course while learning about
              Swift and SwiftUI.
            </h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a
                className="links"
                href="https://github.com/anish0123/playNLearn"
              >
                Play N Learn
              </a>
            </h6>
          </div>
        </div>

        <div className="singleProject">
          <img
            src="https://users.metropolia.fi/~anishm/portfolio/attendanceSystem.png"
            alt="attendance system logo"
            className="projectImage"
          />
          <div className="projectInfo">
            <h4 className="projectTitle">Attendance System</h4>
            <h6 className="projectPara">
              This application is a stand alone application that implements room
              database for maintaining and storing employee's work attendance
              records.
            </h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a
                className="links"
                href="https://github.com/anish0123/attendanceSystem"
              >
                Attendance System
              </a>
            </h6>
          </div>
        </div>
        <div className="singleProject">
          <img
            src="https://users.metropolia.fi/~anishm/portfolio/gameShots.png"
            alt="gameshots logo"
            className="projectImage"
          />
          <div className="projectInfo">
            <h4 className="projectTitle">Game Shots</h4>
            <h6 className="projectPara">
            Game Shots is a React Native project that allows users to upload their game achievements. <br></br>
            Users can take a screenshot of their achievement and upload it along with a description of the achievement. 
            This app is designed for gamers to share their achievements in various games.
            </h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a
                className="links"
                href="https://github.com/anish0123/gameShots"
              >
                Attendance System
              </a>
            </h6>
          </div>
        </div>
      </div>
    </ProjectDiv>
  );
};

const ProjectDiv = styled.div`
justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 5rem;
  height: 200vh;

  @media only screen and (max-width: 1080px) {
    align-items:center;
    width: 100%;
    height: 150vh;
    padding: 0;
    margin-left: 10px;
    padding-top: 7rem;
  }

  @media only screen and (max-width: 900px) {
    height: 100vh;
    padding-top: 3rem;
  }

 
`



export default Project;
