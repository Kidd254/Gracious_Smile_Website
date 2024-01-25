import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section pt-100">
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
                <h3>We are a dynamic team of cheerful givers</h3>
                <strong>
                Welcome to Gracious Smiles Organization, where we enlighten the world by helping the less priviledged. 
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
                      12
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Events Attended</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Satisfied People</p>
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
