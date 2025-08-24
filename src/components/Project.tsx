import '../assets/styles/project.css'
import type { IProject } from '../types/IProject'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import UnorderedList from './UnorderedList';

export default function Project({image, title, descriptions, technologies, github, demo} : IProject) {
    return (
        <div className='project'>
            <img src={image} alt='demo-img' className='project__img' />
            <div>
                <h3 className='project__title'>{title}</h3>
                <UnorderedList elements={descriptions} />
                <div className="project__technologies">
                    {technologies.map((tech, idx) => (
                        <span key={idx}>{tech}</span>
                    ))}
                </div>
                <div className="project__links">
                    <a href={github}><FaGithub />View Code</a>
                    <a href={demo}><FaExternalLinkAlt />Live Demo</a>
                </div>
            </div>
        </div>
    )
}