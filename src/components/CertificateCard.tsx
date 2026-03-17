import type { ICertificate } from '../types/ICertificate';

interface CertificateCardProps extends ICertificate {
  onOpen: (certificate: ICertificate) => void;
}

/**
 * CertificateCard component - displays a single certificate with hover effects
 * Clicking opens the certificate in a modal view
 */
export default function CertificateCard({
  image,
  title,
  description,
  onOpen
}: CertificateCardProps) {
  return (
    <div
      className="certificate-card"
      onClick={() => onOpen({ id: '', image, title, description })}
    >
      <div className="certificate-card__image-container">
        <img
          src={image}
          alt={title}
          className="certificate-card__image"
          loading="lazy"
        />
      </div>
      <div className="certificate-card__info">
        <h3 className="certificate-card__title">{title}</h3>
        <p className="certificate-card__description">{description}</p>
      </div>
    </div>
  );
}
