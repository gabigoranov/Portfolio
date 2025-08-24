import '../assets/styles/certification.css'
import UnorderedList from './UnorderedList'

export default function Certification() {
    return (
        <section className="certification">
            <div>
                <h2>Certification</h2>
                <UnorderedList elements={[
                    "5th place, NOIT 2025, Software Application (10th grade)",
                    "1st place, 11th Students' Scientific Session, BAS",
                    "FCE (B2 exam) – achieved C1-level English proficiency"
                ]}/>

                <a className='certification__button'>View More - Gallery</a>
            </div>
            <div className='certification__gallery'>
                <div className='certification__img1 certification__img'>a</div>
                <div className='certification__img2 certification__img'>a</div>
                <div className='certification__img3 certification__img'>a</div>
                <div className='certification__img4 certification__img'>a</div>
            </div>
        </section>
    )
}