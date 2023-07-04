import {styled} from "styled-components";

const StyledHeading = (props) =>{
    return(
        <Heading>{props.children}</Heading>
    )
} 

const Heading = styled.h1`
align-self: center;
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

export default StyledHeading;
