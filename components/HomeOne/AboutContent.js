import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>About Us</span>
                <h3>We are Dynamic Team of Digital Solutions Agency</h3>
                <strong>
                Welcome to Guramayle Digital Solutions, where innovation converges with expertise to shape the digital landscape. 
                </strong>
                <p>
                We are more than a team; we are a collective force of diverse talents, united by a passion for crafting impactful digital experiences. 
                In close collaboration with Ethiopian Airlines, our team includes digital marketing virtuosos, UI/UX visionaries, code maestros, cybersecurity guardians,
                 and payment integration wizards, leading the way in comprehensive digital solutions. 
                Together, we embark on a journey to elevate your brand's presence and redefine the digital skies.
                </p>
              </div>

              {/* <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Project Completed</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
