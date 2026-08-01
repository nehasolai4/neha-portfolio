import foodBridgeImage from '../assets/projects/FoodBridge.PNG';
import quizImage from '../assets/projects/Quiz.PNG';
import portfolioImage from '../assets/projects/Portfolio.PNG';

const projects = [
  {
    title: "Food Bridge",
    desc: "Full-stack platform connecting food donors with recipients to reduce waste.",
    image: foodBridgeImage,
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    github: "https://github.com/nehasolai4/food-bridge-project",
    live: "https://food-bridge-platform.netlify.app/" // add your deployed URL here if it exists
  },
    {
    title: "Developer Portfolio",
    desc: "A responsive portfolio built using React and modern CSS with reusable components.",
    image: portfolioImage,
    tags: ["React", "CSS", "Vite"],
    github: "https://github.com/nehasolai4/neha-portfolio",
    live: null
  },
  {
    title: "Quiz Web Application",
    desc: "An interactive React quiz that matches users to results using dynamic state.",
    image: quizImage,
    tags: ["React", "JavaScript"],
    github: "https://github.com/nehasolai4/book-boyfriend-matcher",
    live: "https://book-boyfriend-matcher.vercel.app/"
  }
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">MY WORKS</h2>
      <div className="projects-container">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tech-tags">
                {p.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                  Live demo
                </a>
              )}
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-btn code-btn">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;