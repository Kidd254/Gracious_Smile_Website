import React from "react";
import Link from "next/link";

const ProjectsStyleOne = () => {
  return (
    <>
      <section className="project-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Events</span>
            <h3>Our Events</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/1.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/2.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/3.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/4.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/5.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/6.JPG" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">A Visit</Link>
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

export default ProjectsStyleOne;
