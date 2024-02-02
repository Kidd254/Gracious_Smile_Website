import React from 'react';

const AboutContent = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about.JPG" alt="about" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <h3>We are a dynamic team of cheerful givers</h3>
                <strong>
                  Welcome to Gracious Smiles Organization, where we enlighten
                  the world by helping the less priviledged.
                </strong>
                <p>
                  The Gracious Smile Givers was established by people who firmly
                  believe in the transformative power of simple deeds of
                  kindness. Our team is made up of enthusiastic community
                  members and volunteers that are dedicated in improving the
                  community we live in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
