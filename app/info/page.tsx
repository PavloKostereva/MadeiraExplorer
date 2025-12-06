'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

export default function InfoPage() {
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

  return (
    <div className="page-wrapper">
      <div className="container">
        <Header />
        <main className="page-content">
          {/* Hero Section */}
          <div className="hero-section" ref={addToRefs}>
            <div className="hero-image">
              <Image
                src="/img/slides/slide1.jpg"
                alt="Madeira Landscape"
                fill
                sizes="100vw"
                className="hero-img"
                priority
                style={{ objectFit: 'cover' }}
              />
              <div className="hero-overlay"></div>
            </div>
            <h1 className="page-title hero-title">Discover Madeira</h1>
          </div>

          <div className="content-section">
            <section className="info-section" ref={addToRefs}>
              <div className="section-content">
                <div className="section-image">
                  <Image
                    src="/img/slides/slide2.jpg"
                    alt="Madeira Nature"
                    width={600}
                    height={400}
                    className="section-img"
                  />
                </div>
                <div className="section-text">
                  <h2>About Madeira</h2>
                  <p>
                    Madeira is a Portuguese island in the Atlantic Ocean, located southwest of
                    Portugal and west of Morocco. Known as the "Pearl of the Atlantic," Madeira is
                    famous for its stunning natural beauty, mild climate, and rich cultural
                    heritage.
                  </p>
                  <p>
                    The archipelago consists of Madeira Island, Porto Santo, and the Desertas
                    Islands. Funchal, the capital, is nestled on the southern coast and offers a
                    perfect blend of historic charm and modern amenities.
                  </p>
                </div>
              </div>
            </section>

            {/* Geography Section */}
            <section className="info-section reverse" ref={addToRefs}>
              <div className="section-content">
                <div className="section-text">
                  <h2>Geography & Climate</h2>
                  <p>
                    The island features dramatic mountain landscapes reaching over 1,800 meters,
                    lush forests, and beautiful coastal areas. Madeira's unique topography includes
                    deep valleys, steep cliffs, and terraced hillsides covered in vegetation.
                  </p>
                  <p>
                    Madeira enjoys a subtropical climate with warm summers averaging 24°C (75°F) and
                    mild winters around 19°C (66°F). This year-round pleasant weather makes it an
                    ideal destination for travelers seeking both relaxation and adventure.
                  </p>
                  <div className="highlight-box">
                    <strong>Fun Fact:</strong> Madeira is one of the sunniest places in Europe, with
                    over 2,500 hours of sunshine per year!
                  </div>
                </div>
                <div className="section-image">
                  <Image
                    src="/img/slides/slide3.jpg"
                    alt="Madeira Mountains"
                    width={600}
                    height={400}
                    className="section-img"
                  />
                </div>
              </div>
            </section>

            {/* UNESCO Section */}
            <section className="info-section" ref={addToRefs}>
              <div className="section-content">
                <div className="section-image">
                  <Image
                    src="/img/slides/slide4.jpg"
                    alt="Laurisilva Forest"
                    width={600}
                    height={400}
                    className="section-img"
                  />
                </div>
                <div className="section-text">
                  <h2>UNESCO World Heritage</h2>
                  <p>
                    Madeira is home to the Laurisilva forest, a UNESCO World Heritage site
                    recognized in 1999. This ancient laurel forest is a unique ecosystem that dates
                    back to the Tertiary period, millions of years ago.
                  </p>
                  <p>
                    Covering 15,000 hectares, this pristine forest is home to a rich diversity of
                    plant and animal species, many of which are endemic to the island. The forest
                    plays a crucial role in water collection and conservation.
                  </p>
                  <ul className="feature-list">
                    <li>15,000 hectares of protected forest</li>
                    <li>Over 150 endemic species</li>
                    <li>Critical water catchment area</li>
                    <li>Unique biodiversity hotspot</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Activities Section */}
            <section className="activities-section" ref={addToRefs}>
              <h2>Activities & Attractions</h2>
              <div className="activities-grid">
                <div className="activity-card">
                  <div className="activity-icon">🏔️</div>
                  <h3>Hiking & Levada Walks</h3>
                  <p>
                    Explore over 2,000 km of levada irrigation channels and mountain trails offering
                    breathtaking views and diverse landscapes.
                  </p>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">🏊</div>
                  <h3>Water Sports</h3>
                  <p>
                    Enjoy diving, surfing, sailing, and whale watching in the crystal-clear Atlantic
                    waters surrounding the island.
                  </p>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">🍷</div>
                  <h3>Wine Tasting</h3>
                  <p>
                    Discover the world-famous Madeira wine through tastings at historic cellars and
                    local vineyards.
                  </p>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">🌺</div>
                  <h3>Botanical Gardens</h3>
                  <p>
                    Visit stunning gardens showcasing Madeira's unique flora, including the Monte
                    Palace Tropical Garden and the Madeira Botanical Garden.
                  </p>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">🍽️</div>
                  <h3>Local Cuisine</h3>
                  <p>
                    Savor traditional dishes like espetada, bolo do caco, and passion fruit pudding
                    at local markets and restaurants.
                  </p>
                </div>
                <div className="activity-card">
                  <div className="activity-icon">🎭</div>
                  <h3>Festivals & Events</h3>
                  <p>
                    Experience vibrant celebrations including the Flower Festival, New Year's Eve
                    fireworks, and traditional folklore performances.
                  </p>
                </div>
              </div>
            </section>

            {/* Getting There Section */}
            <section className="info-section" ref={addToRefs}>
              <div className="section-content">
                <div className="section-text">
                  <h2>Getting There</h2>
                  <p>
                    Madeira is easily accessible by air, with regular flights from major European
                    cities to Cristiano Ronaldo Madeira International Airport (FNC) in Funchal.
                  </p>
                  <div className="info-boxes">
                    <div className="info-box">
                      <h4>✈️ By Air</h4>
                      <p>
                        Direct flights from Lisbon, Porto, London, Paris, Frankfurt, and many other
                        European cities. Flight time from Lisbon is approximately 1.5 hours.
                      </p>
                    </div>
                    <div className="info-box">
                      <h4>🚢 By Sea</h4>
                      <p>
                        The island welcomes cruise ships year-round and has ferry connections to the
                        mainland Portugal during summer months.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="section-image">
                  <Image
                    src="/img/slides/slide1.jpg"
                    alt="Madeira Transportation"
                    width={600}
                    height={400}
                    className="section-img"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
