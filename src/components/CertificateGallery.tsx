import { useState, useEffect, useRef } from 'react';
import type { ICertificate } from '../types/ICertificate';
import certificatesData from '../data/certificates.json';
import CertificateCard from './CertificateCard';
import '../assets/styles/certificate-gallery.css';

/**
 * CertificateGallery component - displays all certificates in a grid layout
 * Features:
 * - Grid of certificate cards with hover effects
 * - Modal view for enlarged certificate when clicked
 * - Close modal by clicking outside
 */
export default function CertificateGallery() {
  const certificates: ICertificate[] = certificatesData as ICertificate[];
  const [selectedCertificate, setSelectedCertificate] = useState<ICertificate | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedCertificate &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedCertificate]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCertificate]);

  const handleOpenCertificate = (certificate: ICertificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="certificate-gallery-page">
      <div className="section-wrapper">
        <div className="certificate-gallery-page__grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              {...certificate}
              onOpen={handleOpenCertificate}
            />
          ))}
        </div>
      </div>

      {/* Modal for viewing certificate in full size */}
      {selectedCertificate && (
        <div className="certificate-modal" role="dialog" aria-modal="true">
          <div className="certificate-modal__overlay" onClick={handleCloseModal} />
          <div className="certificate-modal__content" ref={modalRef}>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-modal__image"
            />
            <div className="certificate-modal__info">
              <h2 className="certificate-modal__title">{selectedCertificate.title}</h2>
              <p className="certificate-modal__description">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
