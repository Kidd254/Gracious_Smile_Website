import React from "react";

const SingleServiceContent = () => {
  return (
    <>
      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>Visit Children Homes</h3>
                  <p>
                    We contribute money, foodstuffs, clothes, and other neccesary materials need. We visit children homes to assist and offer companion
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Key Features
                    </h4>
                    <p>
                      From creative UI/UX design to secure payment gateway
                      integration, we ensure ongoing maintenance and updates for
                      optimal performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img src="/images/services-details-image/1.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-overview">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img src="/images/services-details-image/2.jpg" alt="image" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3>E-commerce Solutions</h3>
                  <p>
                    Elevate your business with our comprehensive e-commerce
                    solutions. We specialize in website development, payment
                    integration, product catalog design, and user experience
                    optimization.
                  </p>

                  <div className="features-text">
                    <h4>
                      <i className="flaticon-check-mark"></i> Key Features
                    </h4>
                    <p>
                      Our services include cybersecurity and data protection,
                      SEO, and digital marketing strategies tailored for
                      e-commerce businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleServiceContent;
