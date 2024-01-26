import React from 'react';
import Link from 'next/link';

const ServicesContent = () => {
  return (
    <>
      <section className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>How We Can Help?</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>
                  <Link href="/single-service/">
                    Emergency Relief Assistance
                  </Link>
                </h3>
                <p>
                  In times of crisis, our organization swiftly responds with
                  emergency relief assistance. This includes providing immediate
                  aid such as food, shelter, and essential supplies to
                  individuals and communities affected by natural disasters,
                  conflicts, or other emergencies.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-cafbf1">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Healthcare Initiatives</Link>
                </h3>
                <p>
                  Committed to promoting health and well-being, our healthcare
                  initiatives go beyond clinics. We conduct health camps,
                  awareness programs, and preventive healthcare campaigns,
                  aiming to improve overall community health. Access to
                  healthcare services and education is a fundamental aspect of
                  our mission.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-ddd5fb">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>
                  <Link href="/single-service/">
                    Community Infrastructure Development
                  </Link>
                </h3>
                <p>
                  Our organization invests in community infrastructure projects
                  to enhance living conditions. This includes the construction
                  of schools, community centers, and sanitation facilities,
                  contributing to improved quality of life for residents in
                  underserved areas.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-fcdeee">
                  <i className="flaticon-application"></i>
                </div>
                <h3>
                  <Link href="/single-service/">
                    Crisis Counseling and Mental Health Support
                  </Link>
                </h3>
                <p>
                  Mental health is a crucial aspect of overall well-being. Our
                  organization offers crisis counseling and mental health
                  support services, providing a safe space for individuals
                  facing emotional challenges. This initiative aims to reduce
                  stigma and promote mental health awareness in the community.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c5ebf9">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Legal Aid and Advocacy</Link>
                </h3>
                <p>
                  Upholding justice and human rights, we offer legal aid
                  services to those who may not have access to legal
                  representation. Our advocacy initiatives seek to address
                  systemic issues, promote social justice, and ensure that
                  marginalized communities have a voice in legal matters.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f8fbd5">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>
                  <Link href="/single-service/">
                    Environmental Conservation Programs
                  </Link>
                </h3>
                <p>
                  Committed to the preservation of our planet, our organization
                  actively engages in environmental conservation initiatives.
                  These programs include tree planting campaigns, waste
                  management projects, and awareness campaigns on sustainable
                  practices. By fostering a sense of environmental
                  responsibility, we aim to contribute to a healthier and more
                  sustainable future for current and future generations. Through
                  partnerships and community involvement, our organization
                  strives to protect ecosystems, conserve biodiversity, and
                  mitigate the impact of climate change.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
