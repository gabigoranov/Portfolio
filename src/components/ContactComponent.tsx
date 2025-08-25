import type { IconType } from "react-icons"

interface Props {
  icon: IconType,
  title: string,
  value: string,
}

export default function ContactComponent({icon: Icon, title, value} : Props) {
    return(
        <div className="contact-info card">
            <div className="contact-info__icon">
            <Icon />
            </div>
            <div className="contact-info__text">
            <h4>{title}</h4>
            <p>{value}</p>
            </div>
        </div>
    )
}