import {styled} from "styled-components";

const SingleProject = ({project}) => {

    return(
        <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">{project.title}</p>
            <img src={`${project.image}`} alt={`${project.title} logo`} style={{width: "80%", alignSelf: "center" }}/>
        </div>
        <div className="flip-card-back">
            <p className="title">{project.description}</p>
            <p>GitHub Link:  
            <Links href={`${project.projectLink}`}> {project.title}</Links>
            </p>
        </div>
    </div>
</div>
    )
}

const Links = styled.a`
  text-decoration: none;
  color: black;
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



export default SingleProject;