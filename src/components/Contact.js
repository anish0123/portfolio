import { FcAddressBook } from "react-icons/fc";

const Contact = () => {
  return (
    <div id="contact">
      <h1 id="contactTitle">Contact</h1>
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
    </div>
  );
};

export default Contact;
