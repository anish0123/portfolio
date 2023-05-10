

const About = () => {
  return (
    <div id="profile">
      <h1 id="profileHeading">About Me</h1>
      <p className="profilePara">
        I am second-year IT student in Metropolia University of Applied
        Sciences, currently learning and gaining knowledge in various
        programming languages and technologies. I am proficient in
        problem-solving and analytical thinking, and I am constantly working to
        improve my skills and stay up-to-date with the latest advancements in
        the field. I am currently seeking internships or entry-level positions
        to gain hands-on experience and contribute to the development of
        innovative software.
      </p>

      <h2>My Tech Stack</h2>
      <div>
        <a href="https://skillicons.dev">
          <img
            src="https://skillicons.dev/icons?i=js,html,css,java,nodejs,express,azure,react,c,mysql,sqlite,swift,kotlin,androidstudio,linux,figma,git,github,gitlab,postman"
            alt="tech stack"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
