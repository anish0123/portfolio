import { FcAddressBook } from "react-icons/fc";
import ContactForm from "./ContacForm";
import { styled } from "styled-components";
import StyledHeading from "./StyledHeading";

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <StyledHeading>Contact</StyledHeading>
      <ContactInfoHolder>
      <LeftDiv>
        <h2>Get in Touch</h2>
        <StyledH6 style={{width: "60%"}}>Thank you for visiting! Please reach out, if you feel like to know more about me or my projects.</StyledH6>
        <StyledH6>Email : <Links href="mailto:anishmhn@hotmail.com">anishmhn@hotmail.com</Links></StyledH6>
        <h4 style={{margin : 0, paddingBottom : "1.5rem"}}>
          Please feel free to visit: 
        </h4>
        <div style={{margin : 0, padding : 0}}>
          <MediaContainer>
        <img src="https://skillicons.dev/icons?i=linkedin" alt="tech stack" />
        <StyledH6 style={{marginLeft : "1rem", marginTop: "2.5rem"}}>
        <Links href="https://www.linkedin.com/in/anish-maharjan1/">https://www.linkedin.com/in/anish-maharjan1/</Links>
        </StyledH6>
        </MediaContainer>
        <MediaContainer>
        <img src="https://skillicons.dev/icons?i=github" alt="tech stack" />
        <StyledH6 style={{marginLeft : "1rem", marginTop: "2.5rem"}}>
        <Links href="https://github.com/anish0123" >https://github.com/anish0123</Links>
        </StyledH6>
        </MediaContainer>
        </div>
      </LeftDiv>
      <RightDiv>
        <h2>Send me a message</h2>
        <ContactForm />
      </RightDiv>
      </ContactInfoHolder>
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 1.8rem;
  height: 90vh;
`;

const ContactInfoHolder = styled.div`
display: flex;
flex: 2;
flex-direction: row;
justify-content: flex-start;
margin-left: 10%;
`;
const Links = styled.a`
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

const LeftDiv = styled.div`
display: flex;
flex: 1;
justify-self : flex-start;
flex-direction : column;
`;

const RightDiv = styled.div`
display: flex;
flex: 1;
justify-self : flex-end;
flex-direction : column;
`;

const StyledH6 = styled.h6`
margin-top: 0;
padding : 0;
`
const MediaContainer = styled.div`
display: flex;
flex: 2;
justify-self : flex-start;
flex-direction : row;
margin: 0;
padding: 0;
`;


export default Contact;
