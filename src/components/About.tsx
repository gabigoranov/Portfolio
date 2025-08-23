import React from "react";
import "../assets/styles/about.css";
import { FaReact, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGit, FaFigma } from "react-icons/fa";
import { SiTypescript, SiFlutter, SiDotnet } from "react-icons/si";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

const techs: Tech[] = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "React", icon: <FaReact /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Git", icon: <FaGit /> },
  { name: "Figma", icon: <FaFigma /> },
];

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Me</h2>
      <p className="about__description">
        I’m a web & mobile developer with experience in building modern,
        responsive, and scalable applications using .NET, Flutter, React, and
        other technologies. I enjoy creating applications that people love to use.
      </p>

      <div className="about__techGrid">
        {techs.map((tech) => (
          <div key={tech.name} className="about__techCard">
            <span className="about__techIcon">{tech.icon}</span>
            <span className="about__techName">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
