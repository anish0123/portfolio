import {styled} from "styled-components";

const SingleProject = ({project}) => {

    return(
        <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">{project.title}</p>
            <img src={`${project.image}`} alt={`${project.title} logo`} style={{width: "80%", alignSelf: "center" }}/>
        </div>
        <div class="flip-card-back">
            <p class="title">BACK</p>
            <p>Leave Me</p>
        </div>
    </div>
</div>
    )
}



export default SingleProject;