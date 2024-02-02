import React from 'react';
import Link from 'next/link';

const ProjectsStyleTwo = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <span>Activities</span>
            <h3>Our Past Events</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/1.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project/">Events</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/2.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/3.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/4.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/5.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/6.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/7.JPG" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Events</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStyleTwo;
