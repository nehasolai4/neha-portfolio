import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript } from "react-icons/si"

const skillCategories = [
  {
    title: "Languages",
    items: [
      { icon: FaJs, label: "JavaScript" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: FaPython, label: "Python" },
      { icon: FaJava, label: "Java" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: FaReact, label: "React" },
      { icon: FaHtml5, label: "HTML" },
      { icon: FaCss3Alt, label: "CSS" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & tools",
    items: [
      { icon: FaNodeJs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: FaGitAlt, label: "Git" },
    ],
  },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      {skillCategories.map((category) => (
        <div className="skills-category" key={category.title}>
          <h3 className="skills-category-title">{category.title}</h3>
          <div className="skills-grid">
            {category.items.map(({ icon: Icon, label }) => (
              <div className="skill-card" key={label}>
                <Icon size={36} />
                <span className="skill-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills