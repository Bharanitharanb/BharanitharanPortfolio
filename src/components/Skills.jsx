import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiGit, SiGithub,
  SiNodedotjs, SiMongodb, SiExpress, SiApachenetbeanside
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress color="#fff" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'REST API', icon: <SiApachenetbeanside color="#f39c12" /> },
    { name: 'Git', icon: <SiGit color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub color="#fff" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
