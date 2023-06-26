import { styled } from "styled-components";

const Project = ({ project }) => {
  return (
    <ProjectDiv>
      <ProjectHolder>
        <SingleProject>
          <ProjectImg src={`${project.image}`} alt={`${project.title} logo`} />
          <div className="projectInfo">
            <h4 className="projectTitle"> {project.title}</h4>
            <h6 className="projectPara">{project.description}</h6>
            <h6 className="projectLink">
              Github Link:{" "}
              <a className="links" href={`${project.projectLink}`}>
                {project.title}
              </a>
            </h6>
          </div>
        </SingleProject>
      </ProjectHolder>
    </ProjectDiv>
  );
};

const ProjectDiv = styled.div`
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 5rem;

  @media only screen and (max-width: 1080px) {
    width: 100%;
    padding: 0;
    padding-top: 7rem;
  }

  @media only screen and (max-width: 900px) {
    padding-top: 3rem;
  }
`;

const ProjectHolder = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  justify-content: left;
  margin-left: 20rem;

  @media only screen and (max-width: 1440px) {
    margin-left: 10rem;
  }

  @media only screen and (max-width: 1080px) {
    justify-content: center;
    margin-left: 10%;
  }

  @media only screen and (max-width: 900px) {
    align-items: center;
    margin-left: 10%;
  }
`;

const SingleProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 5rem;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 0;
  padding: 0;

  @media only screen and (max-width: 1080px) {
    justify-content: center;
  }

  @media only screen and (max-width: 900px) {
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    margin: 0;
    padding: 0;
  }
`;

const ProjectImg = styled.img`
  width: 7em;
  background-color: white;
  height: 10rem;
  margin-right: 2%;
  margin-top: 10px;

  @media only screen and (max-width: 1080px) {
    height: 5rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 900px) {
    height: 4rem;
    margin-right: 2%;
  }

  @media only screen and (max-width: 500px) {
    width: 5em;
  }
`;

export default Project;
