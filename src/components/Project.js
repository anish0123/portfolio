const Project = () => {
  return (
    <div id="project">
      <h1 id="projectTitle">Project</h1>
      <div className="projectSelection">
        <div className="singleProject">
        <img src="https://users.metropolia.fi/~anishm/portfolio/omaGarden.png" alt="omaGarden logo" className="projectImage"/>
        <div className="projectInfo">
        <h4 className="projectTitle">Oma Garden</h4>
        <h6 className="projectPara" >Oma Garden is a mobile application built with React Native 
        that allows users to upload and share pictures of their beloved plants. 
        <br></br>
        This app is designed to provide a seamless and user-friendly experience for plant enthusiasts.
        </h6>
        <h6 className="projectPara">Github Link: <a href="https://github.com/anish0123/omaGarden">Oma Garden</a></h6>
        </div>
        </div>
        <div className="singleProject">
        <img src="https://users.metropolia.fi/~anishm/portfolio/answerpedia.png" alt="answerpedia logo" className="projectImage"/>
        <div className="projectInfo">
        <h4 className="projectTitle">Answerpedia</h4>
        <h6 className="projectPara" >Answerpedia is a web application for users to ask 
        questions and view answers of any subjects related to coding and mathematics.
        </h6>
        <h6 className="projectPara">Github Link: <a href="https://github.com/anish0123/Answerpedia">Answerpedia</a></h6>
        </div>
        </div>

        <div className="singleProject">
        <img src="https://users.metropolia.fi/~anishm/portfolio/playNLearn.png" alt="play and learn logo" className="projectImage"/>
        <div className="projectInfo">
        <h4 className="projectTitle">Answerpedia</h4>
        <h6 className="projectPara" >This app is created to help young children of age group 2-4 years learn a variety of skills in a fun and engaging way. 
        This app is created as a school project for our course while learning about Swift and SwiftUI.
        </h6>
        <h6 className="projectPara">Github Link: <a href="https://github.com/anish0123/playNLearn">Play N Learn</a></h6>
        </div>
        </div>

        <div className="singleProject">
        <img src="https://users.metropolia.fi/~anishm/portfolio/attendanceSystem.png" alt="attendance system logo" className="projectImage"/>
        <div className="projectInfo">
        <h4 className="projectTitle">Attendance System</h4>
        <h6 className="projectPara" >This application is a stand alone application that implements room database for maintaining and storing employee's work attendance records.
        </h6>
        <h6 className="projectPara">Github Link: <a href="https://github.com/anish0123/attendanceSystem">Attendance System</a></h6>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
