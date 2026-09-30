function Projects() {

  const projects = [
    {
      title: "Vernacular AI for Rural Digital Banking",

      image: "Vernacular Ai.png",

      description:
        "Developed a bilingual Tamil-English voice-enabled banking application designed to simplify digital banking for rural users.",

      features:
        "Voice commands, balance enquiry, UPI transfers, bill payment, loan functionality and etc...",

      techStack:
        "Java, Spring Boot, Spring Data JPA, MySQL, JWT, JavaScript, Web Speech API",

      link:
        "https://vernacular-ai-for-rural-digital-banking.onrender.com/auth.html",

      loadingNote:
        "Initial loading may take a few seconds."
    },

    {
      title: "Expense Tracker",

      image: "expense_tracker.png",

      description:
        "Developed a responsive web application to manage and track personal income and expenses.",

      features:
        "Implemented interactive charts for visualizing expense patterns and financial data.",

      techStack:
        "React.js, JavaScript",

      link:
        "https://expense-tracker-using-react-js-pi.vercel.app"
    }
  ];

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <p>{project.features}</p>

              <p>
                <strong>Tech Stack:</strong> {project.techStack}
              </p>

              {project.loadingNote && (
                <p className="loading-note">
                  ⚡ {project.loadingNote}
                </p>
              )}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;