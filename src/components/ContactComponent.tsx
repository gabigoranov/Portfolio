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
            <span className="contact-info__title">{title}</span>
            <p>{value}</p>
            </div>
        </div>
    )
}