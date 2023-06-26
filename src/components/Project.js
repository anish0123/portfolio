import { styled } from "styled-components";

const Project = ({ project }) => {
  return (
    <ProjectDiv>
      <ProjectHolder>
        <SingleProject>
          <ProjectImg src={`${project.image}`} alt={`${project.title} logo`} />
          <ProjectInfo>
            <ProjectTitle> {project.title}</ProjectTitle>
            <ProjectPara>{project.description}</ProjectPara>
            <ProjectLink>
              Github Link:{" "}
              <Links href={`${project.projectLink}`}>{project.title}</Links>
            </ProjectLink>
          </ProjectInfo>
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

const ProjectInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-top: 15px;
`;

const ProjectTitle = styled.h4`
  padding: 0;
  margin: 0;
  margin-bottom: 15px;
  font-size: 1.5rem;

  @media only screen and (max-width: 1080px) {
    padding-top: 10px;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 900px) {
    padding-top: 10px;
    margin-bottom: 5px;
    font-size: 15px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

const ProjectPara = styled.h6`
  padding: 0;
  margin: 0;
  font-size: medium;
  margin-bottom: 10px;
  width: 60%;

  @media only screen and (max-width: 1920px) {
    width: 90%;
  }

  @media only screen and (max-width: 1080px) {
    font-size: 0.7rem;
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 8px;
  }
`;

const ProjectLink = styled.h6`
  padding: 0;
  margin: 0;
  font-size: medium;
  margin-bottom: 10px;
  text-decoration: none;

  @media only screen and (max-width: 1080px) {
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 900px) {
    font-size: 8px;
  }
`;

const Links = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Open Sans", sans-serif;
  position: relative;

  &::before {
    content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 4px;
      background-color: #5D9D0B;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default Project;
