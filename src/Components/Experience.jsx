import { useState } from "react";

function Experience() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const preventDownload = (e) => {
        e.preventDefault();
    };

    return (
        <section id="experience">

            <h2>Experience & Certifications</h2>

            {/* INTERNSHIP */}

            <div className="experience-section">

                <h3>Internship</h3>

                <div className="internship-card">

                    <div className="internship-content">

                        <h4>Web Development Intern</h4>

                        <p className="company">
                            Technova Solutions
                        </p>

                        <p className="internship-duration">
                            Remote | July 2025 - August 2025
                        </p>

                        <p className="internship-description">
                            Completed a 15-day web development internship
                            focused on building web applications using React.js.
                            Gained hands-on experience in developing frontend
                            components using React.js, JavaScript, HTML and CSS.
                        </p>

                        <div className="internship-tech">
                            <span>React.js</span>
                            <span>JavaScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>

                    </div>

                    <button
                        className="certificate-btn"
                        onClick={() =>
                            setSelectedCertificate("/certificates/intern.jpg")
                        }
                    >
                        View Internship Certificate
                    </button>

                </div>

            </div>


            {/*CERTIFICATIONS*/}

            <div className="certifications-section">

                <h3>Certifications & Achievements</h3>

                <div className="certificate-grid">

                    

                    <div
                        className="certificate-card"
                        onClick={() =>
                            setSelectedCertificate("/certificates/anudip.jpg")
                        }
                    >
                        <img
                            src="/certificates/anudip.jpg"
                            alt="Anudip Certificate"
                            draggable="false"
                            onContextMenu={preventDownload}
                            onDragStart={preventDownload}
                        />
                    </div>


                    

                    <div
                        className="certificate-card"
                        onClick={() =>
                            setSelectedCertificate("/certificates/Azure.jpg")
                        }
                    >
                        <img
                            src="/certificates/Azure.jpg"
                            alt="Microsoft Azure Fundamentals Certificate"
                            draggable="false"
                            onContextMenu={preventDownload}
                            onDragStart={preventDownload}
                        />
                    </div>

                </div>

            </div>


            

            {selectedCertificate && (

                <div className="certificate-overlay">

                    <div className="certificate-modal">

                        <button
                            className="certificate-close"
                            onClick={() => setSelectedCertificate(null)}
                        >
                            ✕
                        </button>

                        <img
                            src={selectedCertificate}
                            alt="Certificate Preview"
                            draggable="false"
                            onContextMenu={preventDownload}
                            onDragStart={preventDownload}
                        />

                    </div>

                </div>

            )}

        </section>
    );
}

export default Experience;