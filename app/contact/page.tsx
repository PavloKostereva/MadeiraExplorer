'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 },
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <Header />
        <main className="page-content">
          {/* Hero Section */}
          <div className="hero-section" ref={addToRefs}>
            <div className="hero-image">
              <Image
                src="/img/slides/slide3.jpg"
                alt="Contact Madeira"
                fill
                sizes="100vw"
                className="hero-img"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-overlay"></div>
            </div>
            <h1 className="page-title hero-title">Contact Us</h1>
          </div>

          <div className="content-section">
            <div className="contact-wrapper">
              {/* Contact Info Section */}
              <section className="contact-info-section" ref={addToRefs}>
                <h2>Get in Touch</h2>
                <p className="intro-text">
                  We'd love to hear from you! Whether you have questions about Madeira, need travel
                  advice, or want to share your experiences, feel free to reach out to us.
                </p>

                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:pavlokostereva@gmail.com">pavlokostereva@gmail.com</a>
                    </p>
                    <p className="contact-note">We respond within 24 hours</p>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <h3>Location</h3>
                    <p>Madeira, Portugal</p>
                    <p className="contact-note">Atlantic Ocean</p>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">💬</div>
                    <h3>Social Media</h3>
                    <p>Follow us for updates and inspiration</p>
                    <div className="social-links">
                      <a href="#" className="social-link" aria-label="Facebook">
                        Facebook
                      </a>
                      <a href="#" className="social-link" aria-label="Instagram">
                        Instagram
                      </a>
                      <a href="#" className="social-link" aria-label="Twitter">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>

                <div className="map-section">
                  <div className="map-placeholder">
                    <Image
                      src="/img/slides/slide2.jpg"
                      alt="Madeira Map"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="map-img"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="map-overlay">
                      <p>📍 Madeira Island, Portugal</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Form Section */}
              <section className="contact-form-section" ref={addToRefs}>
                <h2>Send us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" required>
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="travel">Travel Advice</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us what's on your mind..."></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`button button--main ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
