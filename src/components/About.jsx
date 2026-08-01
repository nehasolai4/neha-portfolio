import profile from "../assets/Profile.jpeg";

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
            I'm a passionate frontend developer focused on building responsive
            and user-friendly web applications using React and modern CSS.
          </p>

          <p>
            I enjoy turning ideas into real-world projects and continuously
            improving my problem-solving skills through hands-on development.
          </p>

          <p>
            Currently seeking internship opportunities where I can contribute,
            learn, and grow in a collaborative environment.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;