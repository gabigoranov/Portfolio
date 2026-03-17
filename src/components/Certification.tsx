import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/certification.css';
import UnorderedList from './UnorderedList';

// Featured certificates displayed in the carousel
const FEATURED_CERTIFICATES = [
  {
    id: 'bas_2',
    image: '/images/Certificates/BAS_2.jpg',
    alt: 'BAS - 1st Place Certificate',
    title: '1st place, 11th Students\' Scientific Session, BAS'
  },
  {
    id: 'english_c1',
    image: '/images/Certificates/EnglishC1.jpg',
    alt: 'FCE C1 Level Certificate',
    title: 'FCE (B2 exam) – achieved C1-level English proficiency'
  },
  {
    id: 'noit',
    image: '/images/Certificates/NOIT.jpg',
    alt: 'NOIT 2025 Certificate',
    title: '5th place, NOIT 2025, Software Application (10th grade)'
  }
];

/**
 * Certification section component
 * Displays a list of achievements and a slidable carousel of 3 featured certificates
 * Includes a button to navigate to the full Certificate Gallery
 */
export default function Certification() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [certificates, setCertificates] = useState(FEATURED_CERTIFICATES);

  useEffect(() => {
    if (!galleryRef.current) return;

    const container = galleryRef.current;
    let isDragging = false;
    let startY = 0;
    let currentY = 0;
    let dragElement: HTMLElement | null = null;

    const getY = (e: PointerEvent | TouchEvent) => {
      if ('touches' in e) return e.touches[0].clientY;
      return (e as PointerEvent).clientY;
    };

    const handleDown = (e: PointerEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      // Only allow dragging from the center certificate
      if (!target.closest('.certification__card--center')) return;
      
      isDragging = true;
      startY = getY(e);
      currentY = startY;
      dragElement = target.closest('.certification__card--center');
      
      if (dragElement) {
        dragElement.style.transition = 'none';
      }

      if ('pointerId' in e && typeof container.setPointerCapture === 'function') {
        try { container.setPointerCapture(e.pointerId); } catch {}
      }

      e.preventDefault();
    };

    const handleMove = (e: PointerEvent | TouchEvent) => {
      if (!isDragging || !dragElement) return;
      
      currentY = getY(e);
      const dy = currentY - startY;
      dragElement.style.transform = `translateY(${dy}px)`;
      
      e.preventDefault();
    };

    const handleUp = (e: PointerEvent | TouchEvent) => {
      if (!isDragging || !dragElement) return;
      
      isDragging = false;
      const dy = currentY - startY;
      const threshold = dragElement.offsetHeight * 0.4;

      if (dy > threshold) {
        // Swipe up - move last to first
        setCertificates(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
      } else if (dy < -threshold) {
        // Swipe down - move first to last
        setCertificates(prev => [...prev.slice(1), prev[0]]);
      }

      dragElement.style.transition = 'transform 0.3s ease';
      dragElement.style.transform = 'translateY(0)';
      dragElement = null;

      if ('pointerId' in e && typeof container.releasePointerCapture === 'function') {
        try { container.releasePointerCapture(e.pointerId); } catch {}
      }
    };

    container.addEventListener('pointerdown', handleDown);
    container.addEventListener('touchstart', handleDown, { passive: false });
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: false });
    window.addEventListener('pointerup', handleUp);
    window.addEventListener('touchend', handleUp);
    window.addEventListener('pointercancel', handleUp);

    return () => {
      container.removeEventListener('pointerdown', handleDown);
      container.removeEventListener('touchstart', handleDown);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('pointerup', handleUp);
      window.removeEventListener('touchend', handleUp);
      window.removeEventListener('pointercancel', handleUp);
    };
  }, []);

  return (
    <section className="certification">
      <div>
        <h2>Certification</h2>
        <UnorderedList elements={[
          "5th place, NOIT 2025, Software Application (10th grade)",
          "1st place, 11th Students' Scientific Session, BAS",
          "FCE (B2 exam) – achieved C1-level English proficiency",
          'National autumn tournament "John Atanasov" 2024 – 4th place',
          "25th Students' Conference of HSSIMI – Golden Medal",
          "25th Students' Section of HSSIMI – Golden Medal",
          "5th place, 'Джон Атанасов' (11th grade)",
          "4th place, 'Джон Атанасов' (10th grade)",
        ]}/>
        
        {/* Button to navigate to the Certificate Gallery */}
        <Link to="/certificates" className="certification__gallery-btn">
          View All Certificates
        </Link>
      </div>
      
      {/* Certificate carousel - 1 big center with 2 smaller behind */}
      <div className="certification__carousel" ref={galleryRef}>
        {/* Top certificate (behind) */}
        <div className="certification__card certification__card--top">
          <img 
            src={certificates[2]?.image} 
            alt={certificates[2]?.alt}
            className="certification__card-image"
            loading="lazy"
          />
          <div className="certification__card-overlay">
            <p className="certification__card-title">{certificates[2]?.title}</p>
          </div>
        </div>
        
        {/* Center certificate (front, draggable) */}
        <div className="certification__card certification__card--center">
          <img 
            src={certificates[1]?.image} 
            alt={certificates[1]?.alt}
            className="certification__card-image"
            loading="lazy"
          />
          <div className="certification__card-overlay">
            <p className="certification__card-title">{certificates[1]?.title}</p>
          </div>
        </div>
        
        {/* Bottom certificate (behind) */}
        <div className="certification__card certification__card--bottom">
          <img 
            src={certificates[0]?.image} 
            alt={certificates[0]?.alt}
            className="certification__card-image"
            loading="lazy"
          />
          <div className="certification__card-overlay">
            <p className="certification__card-title">{certificates[0]?.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
