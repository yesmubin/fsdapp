function About() {
  return (
    <section className="page-section">
      <p className="section-tag">ABOUT US</p>
      <h1>About StudentHub</h1>

      <p>
        StudentHub is a learning platform designed to help students
        learn modern technologies and develop practical skills.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <h2>📚 Learn</h2>
          <p>Learn programming and modern technologies.</p>
        </div>

        <div className="info-card">
          <h2>💻 Build</h2>
          <p>Build real-world applications and projects.</p>
        </div>

        <div className="info-card">
          <h2>🚀 Grow</h2>
          <p>Improve your technical and professional skills.</p>
        </div>
      </div>
    </section>
  );
}
export default About;
