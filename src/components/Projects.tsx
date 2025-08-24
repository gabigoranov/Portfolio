import '../assets/styles/projects.css'
import projectsData from "../data/projects.json"
import type { IProject } from "../types/IProject.tsx";
import Project from './Project.tsx';

export default function Projects() {
    const projects: IProject[] = projectsData;

    return(
        <section className="projects" id='projects'>
            <h2 className="projects__title">Projects</h2>
            <div className="projects__container">
                {projects.map((proj, idx) => (
                    <Project key={idx} {...proj} />
                ))}
            </div>
        </section>
    )
}