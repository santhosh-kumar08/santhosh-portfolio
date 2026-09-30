import {
    FaJava,
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaDatabase,
    FaGithub,
    FaLock,
    FaCode,
    FaLaptopCode
} from "react-icons/fa";

import {
    SiSpring,
    SiSpringboot,
    SiMongodb,
    SiJsonwebtokens,
    SiPostman
} from "react-icons/si";

function Skills() {

    const skills = [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring", icon: <SiSpring /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React JS", icon: <FaReact /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "REST API", icon: <FaCode /> },
        { name: "Maven", icon: <FaCode /> }, ,
        { name: "BCrypt", icon: <FaLock /> },
        { name: "JWT", icon: <SiJsonwebtokens /> },
        { name: "Spring Data JPA", icon: <SiSpring /> }
    ];

    const tools = [
        { name: "IntelliJ IDEA", icon: <FaCode /> },
        { name: "VS Code", icon: <FaLaptopCode /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> }

    ];
    return (
        <section id="skills">

            <h2>Skills</h2>

            <div className="skills-container">

                <h3>Technical Skills</h3>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <div className="skill-icon">
                                {skill.icon}
                            </div>

                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>

                <h3>Tools</h3>

                <div className="skills-grid tools-grid">
                    {tools.map((tool) => (
                        <div className="skill-card" key={tool.name}>
                            <div className="skill-icon">
                                {tool.icon}
                            </div>

                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}

export default Skills;