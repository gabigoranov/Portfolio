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
      const tops = ['25%', '50%', '75%'];
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

    const pointerDownHandler = (e: PointerEvent) => {
      if (e.target !== stack[1]) return;
      dragging = true;
      startY = e.clientY;
      currentY = startY;
      stack[1].style.transition = 'none';
      if (e.pointerId && typeof stack[1].setPointerCapture === "function") {
        try { stack[1].setPointerCapture(e.pointerId); } catch {}
      }
      e.preventDefault();
    };

    const pointerMoveHandler = (e: PointerEvent) => {
      if (!dragging) return;
      currentY = e.clientY;
      const dy = currentY - startY;
      stack[1].style.transform = `translate(-50%, -50%) translateY(${dy}px)`;
    };

    const pointerUpHandler = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      const dy = currentY - startY;
      const threshold = stack[1].offsetHeight * 0.6;

      if (dy > threshold) {
        stack.unshift(stack.pop()!);
      } else if (dy < -threshold) {
        stack.push(stack.shift()!);
      }

      applyPositions();

      if (e && e.pointerId && typeof stack[1].releasePointerCapture === "function") {
        try { stack[1].releasePointerCapture(e.pointerId); } catch {}
      }
    };

    galleryRef.current.addEventListener('pointerdown', pointerDownHandler);
    window.addEventListener('pointermove', pointerMoveHandler);
    window.addEventListener('pointerup', pointerUpHandler);
    window.addEventListener('pointercancel', pointerUpHandler);

    return () => {
      galleryRef.current?.removeEventListener('pointerdown', pointerDownHandler);
      window.removeEventListener('pointermove', pointerMoveHandler);
      window.removeEventListener('pointerup', pointerUpHandler);
      window.removeEventListener('pointercancel', pointerUpHandler);
    };
  }, []);

  return (
    <section className="certification">
      <div>
        <h2>Certification</h2>
        <UnorderedList elements={[
          "5th place, NOIT 2025, Software Application (10th grade)",
          "1st place, 11th Students' Scientific Session, BAS",
          "FCE (B2 exam) – achieved C1-level English proficiency"
        ]}/>
      </div>
      <div className="certification__gallery" ref={galleryRef}>
        <div className="certification__img one card" id="image--back" ref={backRef}></div>
        <div className="certification__img two card" id="image--center" ref={centerRef}></div>
        <div className="certification__img three card" id="image--front" ref={frontRef}></div>
      </div>
    </section>
  );
}
