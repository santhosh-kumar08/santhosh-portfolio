import {
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact">

            <h2>Contact Me</h2>

            <div className="contact-container">

                {/* LEFT SIDE */}

                <div className="contact-intro">

                    <h3>Let's Connect</h3>

                    <p>
                        I'm currently open to opportunities as a
                        Java Full Stack Developer. If you have a
                        project, opportunity or just want to connect,
                        feel free to reach out.
                    </p>

                    <div className="contact-status">
                        <span></span>
                        Open to opportunities
                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="contact-details">

                    

                    <a
                        href="mailto:rsksanthosh08@gmail.com"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>

                        <div>
                            <span>Email</span>
                            <p>rsksanthosh08@gmail.com</p>
                        </div>
                    </a>


                    

                    <a
                        href="tel:+919025760572"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <FaPhone />
                        </div>

                        <div>
                            <span>Phone</span>
                            <p>+91 9025760572</p>
                        </div>
                    </a>


                    

                    <a
                        href="https://linkedin.com/in/santhoshkumar08-r/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <FaLinkedin />
                        </div>

                        <div>
                            <span>LinkedIn</span>
                            <p>Connect with me</p>
                        </div>
                    </a>


                    

                    <a
                        href="https://github.com/santhosh-kumar08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                    >
                        <div className="contact-icon">
                            <FaGithub />
                        </div>

                        <div>
                            <span>GitHub</span>
                            <p>View my projects</p>
                        </div>
                    </a>

                </div>

            </div>


            

            <div className="contact-footer">
                <p>© 2026 Santhosh Kumar R</p>
                <p>Built with React.js</p>
            </div>

        </section>
    );
}

export default Contact;