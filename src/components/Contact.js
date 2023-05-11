import { FcAddressBook } from "react-icons/fc";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact</h1>
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
          <a href="https://github.com/anish0123">
            <img src="https://skillicons.dev/icons?i=github" alt="tech stack" />
          </a>
        </div>
        <a href="mailto:anishmhn@hotmail.com">
          <FcAddressBook size={50} />
        </a>
      </div>
      
      <a href="https://users.metropolia.fi/~anishm/portfolio/CV%20-%20Anish%20Maharjan.pdf" id="cvNav">Checkout my CV</a>
    </div>
  );
};

export default Contact;
