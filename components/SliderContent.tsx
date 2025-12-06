'use client';

import { useEffect, useRef, useState } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
}

interface SliderContentProps {
  slides: Slide[];
  activeIndex: number;
}

export default function SliderContent({ slides, activeIndex }: SliderContentProps) {
  const slidesRef = useRef<{ [key: number]: boolean }>({});
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const headerElements = document.querySelectorAll('.letters');
    headerElements.forEach((e, slideIndex) => {
      const element = e as HTMLElement;
      const slideId = slideIndex;

      if (!slidesRef.current[slideId] && element.children.length === 0) {
        const text = element.textContent || '';
        element.innerHTML = text
          .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
          .replace(/(\S*)/g, (m) => {
            return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>');
          });

        const letters = element.querySelectorAll('.letter');
        letters.forEach((l, i) => {
          const letter = l as HTMLElement;
          letter.style.zIndex = `-${i}`;
          letter.style.transitionDuration = `${i / 5 + 1}s`;
        });

        slidesRef.current[slideId] = true;
      }
    });
    setInitialized(true);
  }, [slides]);

  useEffect(() => {
    if (!initialized) return;

    const allSlides = document.querySelectorAll('.header-content__slide');

    allSlides.forEach((slide) => {
      slide.classList.remove('active');
    });

    void document.body.offsetHeight;

    requestAnimationFrame(() => {
      const currentSlide = allSlides[activeIndex] as HTMLElement;
      if (currentSlide) {
        currentSlide.classList.add('active');
      }
    });
  }, [activeIndex, initialized]);

  return (
    <div className="header-content">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`header-content__slide ${
            activeIndex === index && initialized ? 'active' : ''
          }`}>
          <h1 className="letters">{slide.title}</h1>
          <div className="header-content__info">
            <p>{slide.description}</p>
            <br />
            <button className="button button--main">Explore Madeira</button>
          </div>
        </div>
      ))}
    </div>
  );
}
