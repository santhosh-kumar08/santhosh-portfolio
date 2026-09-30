function Home() {
  return (
    <section id="home">

      <div className="home-container">

        
        <div className="home-photo">
          <img
            src="/Santhosh.png"
            alt="Santhosh Kumar"
          />
        </div>

        
        <div className="home-content">

          <p>Hello, I'm</p>

          <h1>Santhosh Kumar R</h1>

          <h2>Java Full Stack Developer</h2>

          <p>
            I build web applications using Java, Spring Boot,
            React and SQL.
          </p>

          <div className="home-buttons">

            <button
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              View My Projects
            </button>

            <a
              href="/Santhosh_Kumar_R.pdf"
              download
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;