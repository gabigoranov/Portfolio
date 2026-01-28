import "../assets/styles/project.css";
import type { IProject } from "../types/IProject";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import UnorderedList from "./UnorderedList";

export default function Project({
  image,
  title,
  descriptions,
  technologies,
  github,
  demo,
  video,
}: IProject) {
  return (
    <div className="project">
      {image ? (
        <div className="project__img-wrapper">
          <img src={image} alt="demo-img" className="project__img" />
        </div>
      ) : video ? (
        <video
          className="project__video"
          src={video!}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="project__img-wrapper">
          <h3 className="project__img-under-construction-wrapper">Under Construction...</h3>
        </div>
      )}
      <div className="project__description-wrapper">
        <h3 className="project__title">{title}</h3>
        <UnorderedList elements={descriptions} />
        <div className="project__technologies">
          {technologies.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
        <div className="project__links">
          <a href={github}>
            <FaGithub />
            View Code
          </a>
          {demo != null ? (
            <a href={demo!}>
              <FaExternalLinkAlt />
              Live Demo
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
