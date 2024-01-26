import React from 'react';
import Link from 'next/link';

const FeaturesContent = () => {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                <span>Our Core Activities</span>
                <h3>Sharing is Caring</h3>
                <p>
                  The Gracious Smile Givers Foundation mission is to use the
                  power of compassion and smiles to improve the lives of those
                  who are in need. Our goal is to build a compassionate society
                  where everyone, no matter what their circumstances, can find
                  love, happiness, and support. A community where generosity,
                  compassion, and support are at the base of everything we do is
                  what Gracious Smile Givers Foundation envisions. We want to be
                  an inspiration of hope, giving people we interact with a smile
                  , a helping hand, and chances to grow and succeed. Our goal is
                  to create a stronger, more connected community where everyone
                  is appreciated, able to succeed, and feels empowered.
                </p>
                <div className="features-btn">
                  <Link href="/features" className="features-btn-one">
                    Explore Core Values
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f1eff8">
                    <div className="icon">
                      <i className="flaticon-seo"></i>
                    </div>
                    <h3>Compassion</h3>
                    <p>
                    We approach every situation with kindness and understanding, taking into account the
unique challenges that each individual could be facing.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-analytics"></i>
                    </div>
                    <h3>Community</h3>
                    <p>
                    We believe that our neighbourhood is strong and that working together may result in
positive change.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-laptop"></i>
                    </div>
                    <h3>Empowerment</h3>
                    <p>
                    By supplying individuals with knowledge, inspiration, and resources, we seek to
empower them and provide them the tools they need to build better futures.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f8e1eb">
                    <div className="icon">
                      <i className="flaticon-analysis-1"></i>
                    </div>
                    <h3>Sustainability & Transparency</h3>
                    <p>We are committed to sustainable programmes that enhance the long-term quality of life
in our neighbourhood. We promote transparency in all areas of our organisation, including finances and
decision-making, to gain the trust of our supporters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <img src="/images/shape/8.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/5.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesContent;
