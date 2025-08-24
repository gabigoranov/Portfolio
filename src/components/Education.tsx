import '../assets/styles/education.css'
import UnorderedList from './UnorderedList'

export default function Education() {
    
    return (
        <section className="education">
            <div>
                <h2 className='education__title'>Education</h2>
                <UnorderedList elements={
                ['<b>11th grade</b> in Specialized Mathematics and Science High School – Montana.',
                    'Graduated the highly regarded <b>"SoftUni"</b> at the age of 13 with the back-end .NET software engeneer carrer path.',
                    'Participated in the <b>Summer Research School</b>, organized by HSSIMI, in July of 2025.'
                ]}/>
            </div>
            <img className='education__image' src='/images/diploma.png' alt="diploma"/>
        </section>
    )
}