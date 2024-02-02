import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-area">
                <span>Why Support Our Cause</span>
                <h3>Proven Impact, Proven Dedication</h3>
                <p>
                Join us in our mission with a team that has a rich history of making a difference. With a proven track record of impactful initiatives, we bring unparalleled dedication to every project. Explore a partnership that goes beyond expectations, setting new standards in the realm of charitable work.{" "}
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Philanthropic Roots</h4>
                  <p>
                  Grounded in Philanthropy: Rooted in the principles of giving, our team offers valuable insights tailored to the nuances of charitable endeavors. Benefit from our proven track record of successful collaborations with renowned charitable organizations, demonstrating our ability to deliver meaningful results and navigate the complexities of the nonprofit sector.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Comprehensive Social Impact</h4>
                  <p>
                  Diverse Expertise, Tailored Solutions: Rooted in philanthropy, we offer nuanced insights and a proven track record with various charitable causes. Our versatile team, spanning different aspects of social impact, ensures a one-stop-shop for your charitable needs. From innovative campaigns to community-centric programs, we craft thoughtful strategies for meaningful change.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Community-Centric Partnership</h4>
                  <p>
                  Strategic Collaboration for Lasting Change: Partnering closely, we merge philanthropic insights and a proven track record with a versatile team, offering a unified solution hub. From impactful campaigns to community-centric programs, we tailor strategies for the distinct success of your charitable initiatives.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dedicated Advocates</h4>
                  <p>
                  Discover the Excellence of our Advocates, where each member is dedicated to delivering impactful solutions with passion and expertise. Our commitment to making a difference drives our collaborative efforts, making us the ideal choice for supporting your charitable cause.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-image">
                <img src="/images/choose-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
