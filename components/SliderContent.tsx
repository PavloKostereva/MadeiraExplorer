'use client'

import { useEffect, useRef, useState } from 'react'

interface Slide {
  id: number
  title: string
  description: string
}

interface SliderContentProps {
  slides: Slide[]
  activeIndex: number
}

export default function SliderContent({ slides, activeIndex }: SliderContentProps) {
  const slidesRef = useRef<{ [key: number]: boolean }>({})
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    // Initialize letter animations for all slides only once
    const headerElements = document.querySelectorAll('.letters')
    headerElements.forEach((e, slideIndex) => {
      const element = e as HTMLElement
      const slideId = slideIndex

      // Only initialize if not already initialized for this slide
      if (!slidesRef.current[slideId] && element.children.length === 0) {
        const text = element.textContent || ''
        element.innerHTML = text
          .replace(/ (-|#|@){1}/g, (s) => s[1] + s[0])
          .replace(/(\S*)/g, (m) => {
            return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
          })

        const letters = element.querySelectorAll('.letter')
        letters.forEach((l, i) => {
          const letter = l as HTMLElement
          letter.style.zIndex = `-${i}`
          letter.style.transitionDuration = `${i / 5 + 1}s`
        })

        slidesRef.current[slideId] = true
      }
    })
    setInitialized(true)
  }, [slides])

  // Manage active class for slides to trigger animations
  useEffect(() => {
    if (!initialized) return

    const allSlides = document.querySelectorAll('.header-content__slide')
    
    // Remove active class from all slides first
    allSlides.forEach((slide) => {
      slide.classList.remove('active')
    })

    // Force a reflow to ensure the removal is processed
    void document.body.offsetHeight

    // Add active class to current slide - this triggers the CSS animation
    requestAnimationFrame(() => {
      const currentSlide = allSlides[activeIndex] as HTMLElement
      if (currentSlide) {
        currentSlide.classList.add('active')
      }
    })
  }, [activeIndex, initialized])

  return (
    <div className="header-content">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`header-content__slide ${activeIndex === index && initialized ? 'active' : ''}`}
        >
          <h1 className="letters">{slide.title}</h1>
          <div className="header-content__info">
            <p>{slide.description}</p>
            <br />
            <button className="button button--main">Explore Madeira</button>
          </div>
        </div>
      ))}
    </div>
  )
}
