import { FcAddressBook } from "react-icons/fc";
import ContactForm from "./ContacForm";
import { styled } from "styled-components";
import StyledHeading from "./StyledHeading";

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <StyledHeading>Contact</StyledHeading>
      <div className="media">
        <div className="mediaItems">
          <a href="https://www.linkedin.com/in/anish-maharjan1/">
            <img
              src="https://skillicons.dev/icons?i=linkedin"
              alt="tech stack"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/anish0123" className="mediaItems">
            <img src="https://skillicons.dev/icons?i=github" alt="tech stack" />
          </a>
        </div>
        <div>
          <a href="mailto:anishmhn@hotmail.com" className="mediaItems">
            <FcAddressBook size={50} />
          </a>
        </div>
      </div>
      <ContactForm />
    </ContactDiv>
  );
};

const ContactDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: xx-large;
  height: 30vh;
  margin-bottom: 10rem;
  margin-top: 10rem;
`;

export default Contact;
