import React from "react";
import Link from "next/link";

const FeaturesContent = () => {
  return (
    <>
      <section className="features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="features-content-area">
                <span>Our Care Features</span>
                <h3>Empower Your Business with Our Expertise</h3>
                <p>
                    Elevate your brand with our integrated digital marketing solutions, innovative UI/UX design,
                    and expert web development services. We craft tailored digital strategies, ensuring your online
                    presence is not only visually striking but also effectively reaches and engages your target audience.
                    Our development team transforms ideas into reality with robust and scalable code solutions, creating
                    high-performance and secure digital assets. Fortify your digital operations with industry-leading
                    cybersecurity practices, safeguarding your data against potential threats. Additionally, streamline
                    your business transactions with our seamless payment integration services. From creative design to
                    secure functionality, we prioritize excellence in every aspect of your digital experience.
                </p>
                <div className="features-btn">
                  <Link href="/features" className="features-btn-one">
                    Explore Services
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
                    <h3>Integrated Digital Marketing Solutions</h3>
                    <p>
                    Leverage our digital marketing expertise for tailored strategies—SEO, 
                    social media, and content—to maximize your online presence, reach, and engagement.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-fbe6d4">
                    <div className="icon">
                      <i className="flaticon-analytics"></i>
                    </div>
                    <h3>Innovative UI/UX Design</h3>
                    <p>
                        Enhance your brand with captivating, user-friendly interfaces.
                        Our creative UI/UX team prioritizes aesthetics, functionality, and seamless navigation for superior user experiences.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f0fffc">
                    <div className="icon">
                      <i className="flaticon-laptop"></i>
                    </div>
                    <h3>Web Development</h3>
                    <p>
                    Depend on our expert development team to transform your ideas into reality with robust and scalable code solutions, ensuring high-performance, secure digital assets.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-features-item bg-f8e1eb">
                    <div className="icon">
                      <i className="flaticon-analysis-1"></i>
                    </div>
                    <h3>Secure Digital Operations & Seamless Payments</h3>
                    <p>
                    Fortify digital assets with leading cybersecurity practices. 
                    Ensure secure, user-friendly payments through seamless integration services, meeting industry standards for diverse business needs.
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
