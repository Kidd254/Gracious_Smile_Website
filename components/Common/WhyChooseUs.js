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
                <span>Why Choose Us</span>
                <h3>Our Outstanding Experience</h3>
                <p>
                Elevate your journey with a team that boasts a rich history of success and expertise. With a proven track record
                in delivering exceptional results, we bring unparalleled experience to every project. Explore a partnership
                that goes beyond expectations, defining new standards in the digital realm.{" "}
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Aviation-Rooted Expertise</h4>
                  <p>
                  Leveraging Aviation Expertise: Rooted in the aviation industry, our team offers valuable insights tailored to your sector's nuances. 
                  Benefit from our proven track record collaborating with Ethiopian Airlines, demonstrating our ability to deliver results and navigate industry complexities.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Comprehensive Digital Prowess</h4>
                  <p>
                  Diverse Expertise, Tailored Solutions: Rooted in aviation, we offer nuanced insights and a proven track record with Ethiopian Airlines. 
                  Our versatile team, spanning digital realms, ensures a one-stop-shop for your needs. 
                  From creative campaigns to user-centric design, we craft innovative strategies for your distinct presence.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Client-Centric Partnership</h4>
                  <p>
                    Strategic Collaboration for Impact: Partnering closely, we merge aviation insights and a proven track record with a versatile team, offering a unified solution hub. 
                    From innovative campaigns to user-centric design, we tailor strategies for your brand's distinct success.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dedicated Team Member</h4>
                  <p>
                    Discover the excellence of our team, where each member is dedicated to delivering top-notch solutions with passion and expertise.
                    Our commitment to your success drives our collaborative efforts, making us the ideal choice for your digital needs.
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
