import { useEffect, useRef } from 'react';
import '../assets/styles/certification.css';
import UnorderedList from './UnorderedList';

export default function Certification() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current || !backRef.current || !centerRef.current || !frontRef.current) return;

    let stack = [backRef.current, centerRef.current, frontRef.current];
    let dragging = false;
    let startY = 0;
    let currentY = 0;

    const getSizes = () => {
      const s = getComputedStyle(document.documentElement);
      return {
        wCenter: s.getPropertyValue('--w-center').trim() || '250px',
        hCenter: s.getPropertyValue('--h-center').trim() || '150px',
        wSmall: s.getPropertyValue('--w-small').trim() || '187.5px',
        hSmall: s.getPropertyValue('--h-small').trim() || '112.5px'
      };
    };

    const applyPositions = () => {
      const tops = ['35%', '50%', '65%'];
      const sizes = getSizes();
      stack.forEach((el, i) => {
        el.style.transition = 'transform 300ms ease, top 300ms ease, width 300ms ease, height 300ms ease';
        el.style.top = tops[i];
        el.style.left = '50%';
        el.style.transform = 'translate(-50%, -50%)';
        el.style.zIndex = i === 1 ? '30' : '20';
        if (i === 1) {
          el.style.width = sizes.wCenter;
          el.style.height = sizes.hCenter;
        } else {
          el.style.width = sizes.wSmall;
          el.style.height = sizes.hSmall;
        }
      });
    };

    applyPositions();

    const getY = (e: PointerEvent | TouchEvent) => {
      if ('touches' in e) return e.touches[0].clientY;
      return (e as PointerEvent).clientY;
    };

    const downHandler = (e: PointerEvent | TouchEvent) => {
      if (e.target !== stack[1]) return;
      dragging = true;
      startY = getY(e);
      currentY = startY;
      stack[1].style.transition = 'none';

      if ('pointerId' in e && typeof stack[1].setPointerCapture === 'function') {
        try { stack[1].setPointerCapture(e.pointerId); } catch {}
      }

      e.preventDefault();
    };

    const moveHandler = (e: PointerEvent | TouchEvent) => {
      if (!dragging) return;
      currentY = getY(e);
      const dy = currentY - startY;
      stack[1].style.transform = `translate(-50%, -50%) translateY(${dy}px)`;
      e.preventDefault(); // prevent scrolling while dragging
    };

    const upHandler = (e: PointerEvent | TouchEvent) => {
      if (!dragging) return;
      dragging = false;
      const dy = currentY - startY;
      const threshold = stack[1].offsetHeight * 0.6;

      if (dy > threshold) stack.unshift(stack.pop()!);
      else if (dy < -threshold) stack.push(stack.shift()!);

      applyPositions();

      if ('pointerId' in e && typeof stack[1].releasePointerCapture === 'function') {
        try { stack[1].releasePointerCapture(e.pointerId); } catch {}
      }
    };

    galleryRef.current.addEventListener('pointerdown', downHandler);
    galleryRef.current.addEventListener('touchstart', downHandler, { passive: false });
    window.addEventListener('pointermove', moveHandler);
    window.addEventListener('touchmove', moveHandler, { passive: false });
    window.addEventListener('pointerup', upHandler);
    window.addEventListener('touchend', upHandler);
    window.addEventListener('pointercancel', upHandler);

    return () => {
      galleryRef.current?.removeEventListener('pointerdown', downHandler);
      galleryRef.current?.removeEventListener('touchstart', downHandler);
      window.removeEventListener('pointermove', moveHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('pointerup', upHandler);
      window.removeEventListener('touchend', upHandler);
      window.removeEventListener('pointercancel', upHandler);
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
          "25th Students' Section of HSSIMI – Golden Medal"
        ]}/>
      </div>
      <div className="certification__gallery" ref={galleryRef}>
        <div className="certification__img one card" id="image--back" ref={backRef}>
          <p>This is a certificate I haven't scanned yet.</p>
        </div>
        <div className="certification__img two card" id="image--center" ref={centerRef}>
          <p>This is a certificate I haven't scanned yet.</p>
        </div>
        <div className="certification__img three card" id="image--front" ref={frontRef}>
          <p>This is a certificate I haven't scanned yet.</p>
        </div>
      </div>
    </section>
  );
}
