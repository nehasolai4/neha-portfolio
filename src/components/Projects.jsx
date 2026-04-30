function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">MY WORKS</h2>

      <div className="projects-container">

        <div className="project-card">
          <div className="project-content">
            <h3>Developer Portfolio</h3>
            <p>
              A responsive portfolio built using React and modern CSS
              with reusable components and smooth UI interactions.
            </p>
          </div>
          <a href="https://github.com/nehasolai4/neha-portfolio" className="project-btn">Check It Out</a>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Quiz Web Application</h3>
            <p>
              An interactive React quiz that matches users to results
              using dynamic state and conditional rendering.
            </p>
          </div>
          <a href="https://github.com/nehasolai4/book-boyfriend-matcher" className="project-btn">Check It Out</a>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Food Bridge</h3>
            <p>
             A full-stack platform that connects food donors with recipients to reduce waste. 
             Built with React, Node.js, Express, and MongoDB, featuring real-time listings and a smooth claim workflow. 
             Secured with JWT authentication and role-based access control.
            </p>
          </div>
          <a href="https://github.com/nehasolai4/food-bridge-project" className="project-btn">Check It Out</a>
        </div>
        
        <div className="project-card">
          <div className="project-content">
            <h3>Moments in Envelopes</h3>
            <p>
              A React-based interactive UI with animated clickable
              elements that reveal dynamic content.
            </p>
          </div>
          <a href="https://github.com/nehasolai4/anniversary-site" className="project-btn">Check It Out</a>
        </div>


      </div>
    </section>
  );
}

export default Projects;