import '../assets/styles/unordered-list.css'

interface Props {
  elements: string[]
}

export default function UnorderedList({elements} : Props) {
    return (
        <ul className="ul--styled">
            {elements.map((content, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: content }}></li>
            ))}
        </ul>
    )
}