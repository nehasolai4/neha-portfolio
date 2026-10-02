import profile from "../assets/Neon Pink Saree Portrait.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-image about-image-target">
          <img src={profile} alt="profile"  />
        </div>

        <div className="about-content">
          <h2>THE PERSON BEHIND THE CODE</h2>

          <p>
            I'm a CS student at VIT Chennai who loves building for the web, from React interfaces to the APIs behind them. 
            I'm endlessly curious, which is how I ended up exploring GenAI, semantic search, and machine learning alongside my full-stack projects.
          </p>

          <p>
            I learn best by building, so I'm always picking up something new and turning ideas into real, working projects.
          </p>

          <p>
            Right now I'm looking for an internship where I can contribute, keep learning, and grow with a great team.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;