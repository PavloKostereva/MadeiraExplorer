'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

export default function PlantNowPage() {
  const [selectedTree, setSelectedTree] = useState('');
  const [formData, setFormData] = useState({
    quantity: 1,
    name: '',
    email: '',
  });

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

  const trees = [
    { id: 'laurel', name: 'Laurisilva Laurel', price: 25, icon: '🌳' },
    { id: 'mahogany', name: 'Madeira Mahogany', price: 35, icon: '🌲' },
    { id: 'olive', name: 'Wild Olive', price: 20, icon: '🫒' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tree = trees.find((t) => t.id === selectedTree);
    if (tree) {
      const total = tree.price * formData.quantity;
      alert(
        `Thank you ${formData.name}! You're planting ${formData.quantity} ${tree.name}(s) for €${total}. You'll receive a confirmation email shortly.`,
      );
    }
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
                src="/img/slides/slide4.jpg"
                alt="Plant Trees Madeira"
                fill
                sizes="100vw"
                className="hero-img"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-overlay"></div>
            </div>
            <h1 className="page-title hero-title">Plant Now</h1>
            <p className="hero-subtitle">Help restore Madeira's natural heritage</p>
          </div>

          <div className="content-section">
            {/* Introduction Section */}
            <section className="plant-intro-section" ref={addToRefs}>
              <div className="intro-content">
                <div className="intro-text">
                  <h2>Join Our Reforestation Initiative</h2>
                  <p>
                    Help us preserve and restore Madeira's unique ecosystem by participating in our
                    tree planting program. Together, we can contribute to the conservation of the
                    island's natural heritage and combat climate change.
                  </p>
                  <p>
                    Every tree you plant helps restore the ancient Laurisilva forest, protect
                    biodiversity, and create a sustainable future for Madeira and the planet.
                  </p>
                </div>
                <div className="intro-image">
                  <Image
                    src="/img/slides/slide1.jpg"
                    alt="Forest Conservation"
                    width={500}
                    height={400}
                    className="intro-img"
                  />
                </div>
              </div>
            </section>

            {/* Why Plant Section */}
            <section className="why-plant-section" ref={addToRefs}>
              <h2>Why Plant Trees in Madeira?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🌿</div>
                  <h3>Preserve Ecosystems</h3>
                  <p>
                    Restore the unique Laurisilva forest ecosystem and protect endemic species found
                    nowhere else on Earth.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌍</div>
                  <h3>Combat Climate Change</h3>
                  <p>
                    Each tree absorbs CO2, helping reduce your carbon footprint and fight global
                    warming.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🦋</div>
                  <h3>Protect Biodiversity</h3>
                  <p>
                    Support native species and create habitats for Madeira's unique flora and fauna.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">💧</div>
                  <h3>Water Conservation</h3>
                  <p>
                    Prevent soil erosion and maintain water quality in Madeira's crucial water
                    catchment areas.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌱</div>
                  <h3>Sustainable Future</h3>
                  <p>
                    Create a lasting legacy for future generations by supporting long-term forest
                    conservation.
                  </p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">📜</div>
                  <h3>Personal Impact</h3>
                  <p>
                    Receive a certificate and regular updates about your tree's growth and impact on
                    the ecosystem.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works-section" ref={addToRefs}>
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Choose Your Tree</h3>
                  <p>
                    Select from native Madeiran tree species that are adapted to the local climate
                    and ecosystem. Each tree is carefully chosen for its environmental benefits.
                  </p>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Make a Donation</h3>
                  <p>
                    Your contribution helps us acquire trees, prepare planting sites, provide
                    necessary care, and maintain the forest for years to come.
                  </p>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <h3>We Plant</h3>
                  <p>
                    Our team of expert foresters and conservationists plants your tree in designated
                    conservation areas during the optimal planting season.
                  </p>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Track Growth</h3>
                  <p>
                    Receive regular updates, photos, and GPS coordinates of your tree as it grows
                    and contributes to the restoration of Madeira's forests.
                  </p>
                </div>
              </div>
            </section>

            {/* Available Trees Section */}
            <section className="trees-section" ref={addToRefs}>
              <h2>Available Trees</h2>
              <p className="section-description">
                Choose from native Madeiran species that are essential to the island's ecosystem
              </p>
              <div className="tree-options">
                {trees.map((tree) => (
                  <div
                    key={tree.id}
                    className={`tree-option ${selectedTree === tree.id ? 'selected' : ''}`}
                    onClick={() => setSelectedTree(tree.id)}>
                    <div className="tree-icon">{tree.icon}</div>
                    <h3>{tree.name}</h3>
                    <p className="tree-description">
                      {tree.id === 'laurel' &&
                        'Native evergreen tree, vital for the Laurisilva ecosystem'}
                      {tree.id === 'mahogany' &&
                        'Endemic hardwood tree, provides long-term carbon storage'}
                      {tree.id === 'olive' &&
                        'Traditional Mediterranean tree, supports local biodiversity'}
                    </p>
                    <div className="tree-price">€{tree.price}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Plant Form Section */}
            <section className="plant-form-section" ref={addToRefs}>
              <div className="form-header">
                <h2>Plant Your Tree Today</h2>
                <p>Fill out the form below to start your tree planting journey</p>
              </div>
              <form className="plant-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tree-type">Tree Type *</label>
                    <select
                      id="tree-type"
                      name="tree-type"
                      value={selectedTree}
                      onChange={(e) => setSelectedTree(e.target.value)}
                      required>
                      <option value="">Select a tree...</option>
                      {trees.map((tree) => (
                        <option key={tree.id} value={tree.id}>
                          {tree.name} (€{tree.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Quantity *</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="100"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: parseInt(e.target.value) })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="plant-name">Your Name (for certificate) *</label>
                    <input
                      type="text"
                      id="plant-name"
                      name="plant-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="plant-email">Email *</label>
                    <input
                      type="email"
                      id="plant-email"
                      name="plant-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {selectedTree && (
                  <div className="order-summary">
                    <h4>Order Summary</h4>
                    <div className="summary-row">
                      <span>
                        {formData.quantity}x {trees.find((t) => t.id === selectedTree)?.name}
                      </span>
                      <span>
                        €{trees.find((t) => t.id === selectedTree)?.price! * formData.quantity}
                      </span>
                    </div>
                  </div>
                )}

                <button type="submit" className="button button--main">
                  Plant Now
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
