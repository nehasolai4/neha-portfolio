import foodBridgeImage from '../assets/projects/FoodBridge.PNG';
import quizImage from '../assets/projects/Quiz.PNG';
import worldCupImage from '../assets/projects/Worldcup.PNG';

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
    title: "World-Cup ai predictor",
    desc: "ML-powered match predictor that forecasts Home Win, Draw, or Away Win using historical team stats.",
    image: worldCupImage,
    tags: ["Python", "Scikit-learn", "FastAPI", "React"],
    github: "https://github.com/nehasolai4/world-cup-ai-predictor",
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