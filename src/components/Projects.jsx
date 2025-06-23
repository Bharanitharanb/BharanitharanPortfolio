import React from "react";
import "./Projects.css";
import { FaInstagram, FaComments, FaMapMarkerAlt, FaUserShield, FaNetworkWired } from "react-icons/fa";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-list">

        {/* New Cybersecurity Project */}
        <div className="project-item">
          <FaNetworkWired className="project-icon" />
          <h3>Cyberblitz - Cybersecurity Tool</h3>
        <p>
          Cyberblitz is a cybersecurity tool specializing in continuous security validation and breach & attack simulation.
          It provides detailed reports on how well the company's network is secured against cyberattacks.
        </p>
        <p><strong>Role:</strong> Frontend & Backend Developer</p>
        <p><strong>Technologies:</strong> React.js, Material-UI, React Flow, Node.js, RESTful APIs</p>
        <ul>
          <li>Developed a responsive web application using React.js, Material-UI, and React Flow for dynamic data visualization.</li>
          <li>Created and implemented RESTful APIs with Node.js, ensuring seamless data flow and robust backend logic.</li>
        </ul>
        </div>

        {/* Existing old projects */}
        <div className="project-item">
            <h2>Social Media (MERN)</h2>
          <FaInstagram className="project-icon" />
          <h3>Image Posting</h3>
          <p>Users can upload, view and share images with other users.</p>
       
          <FaComments className="project-icon" />
          <h3>Real-time Chat</h3>
          <p>Users can chat in real-time with other users.</p>
       
          <FaMapMarkerAlt className="project-icon" />
          <h3>Top 5 Places Nearby</h3>
          <p>Users can view top 5 places nearby based on location.</p>
        
          <FaUserShield className="project-icon" />
          <h3>Authentication</h3>
          <p>Secure user authentication system with JWT and OAuth.</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;



 