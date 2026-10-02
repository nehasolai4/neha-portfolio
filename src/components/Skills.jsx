import { useEffect, useRef, useState } from "react"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si"

const skills = [
  { icon: FaReact, label: "React" },
  { icon: FaJs, label: "JavaScript" },
  { icon: FaPython, label: "Python" },
  { icon: FaJava, label: "Java" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: FaGitAlt, label: "Git" },
  { icon: FaHtml5, label: "HTML" },
  { icon: FaCss3Alt, label: "CSS" },
]

function Skills() {
  const [rotation, setRotation] = useState(0)
  const rotationRef = useRef(0)
  const sectionRef = useRef(null)
  const animationRef = useRef(null)
  const lastInteraction = useRef(Date.now())

  // Auto movement
  useEffect(() => {
    const animate = () => {
      const now = Date.now()

      // Slowly move only when user isn't interacting
      if (now - lastInteraction.current > 1200) {
        rotationRef.current += 0.08
        setRotation(rotationRef.current)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  // Mouse wheel controls the carousel
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect()

      // Only react when the Skills section is reasonably visible
      const isVisible =
        rect.top < window.innerHeight && rect.bottom > 0

      if (!isVisible) return

      lastInteraction.current = Date.now()

      rotationRef.current += e.deltaY * 0.08
      setRotation(rotationRef.current)
    }

    window.addEventListener("wheel", handleWheel, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills-header">
        <p className="skills-eyebrow">WHAT I WORK WITH</p>
        <h2 className="skills-heading">SKILLS</h2>
      </div>

      <div className="skills-orbit-wrapper">
        <div className="skills-orbit">
          {/* Decorative orbit */}
          <div className="orbit-line orbit-line-1"></div>
          <div className="orbit-line orbit-line-2"></div>

          {skills.map(({ icon: Icon, label }, index) => {
            const total = skills.length

            // Start cards around the ellipse
            const baseAngle = (index / total) * 360

            const angle = baseAngle + rotation
            const radians = (angle * Math.PI) / 180

            // Ellipse dimensions
            const radiusX = 430
            const radiusY = 190

            const x = Math.cos(radians) * radiusX
            const y = Math.sin(radians) * radiusY

            // Determine how close card is to the bottom/front
            const normalizedY = (y + radiusY) / (radiusY * 2)

            // Cards near the bottom become larger
            const scale = 0.75 + normalizedY * 0.35

            // Cards near the bottom are brighter
            const opacity = 0.35 + normalizedY * 0.65

            return (
              <div
                className="skill-orbit-card"
                key={label}
                style={{
                  transform: `
                    translate(-50%, -50%)
                    translate(${x}px, ${y}px)
                    scale(${scale})
                  `,
                  opacity,
                  zIndex: Math.round(normalizedY * 100),
                }}
              >
                <Icon className="skill-orbit-icon" />
                <span>{label}</span>
              </div>
            )
          })}

          {/* Center text */}
          <div className="skills-center">
            <span>TECH</span>
            <strong>STACK</strong>
          </div>
        </div>
      </div>

      <p className="skills-hint">
        Scroll to explore
      </p>
    </section>
  )
}

export default Skills