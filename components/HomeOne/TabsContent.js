import React, { Component } from 'react';
import Link from 'next/link';

class TabsContent extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <span>Boosting</span>
                        <h3>Our Outstanding Experience</h3>
                    </div>

                    <div className="tab boosting-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <i className="flaticon-analysis-2"></i>
                                <span>Children Homes</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab2')} className="bg-eff7e9">
                                <i className="flaticon-hand"></i>
                                <span>PWDs (Persons with Disabilities)</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab3')} className="bg-fff8f0">
                                <i className="flaticon-digital-marketing"></i>
                                <span>Social/Life Education Programs</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab4')} className="bg-ecfaf7">
                                <i className="flaticon-email"></i>
                                <span>Boys & Girls Empowerment</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab5')} className="bg-f2f0fb">
                                <i className="flaticon-network"></i>
                                <span>Community Health Clinics</span>
                            </li>
                            <li onClick={(e) => this.openTabSection(e, 'tab6')} className="bg-c5ebf9">
                                <i className="flaticon-analysis-1"></i>
                                <span>Women's Empowerment Programs</span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            {/* Tabs Item 01 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/1.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Children Homes</h2>
                                            <p>Our organization actively supports and visits various children's homes to bring joy, companionship, and essential resources to children in need. We believe in creating a nurturing environment that encourages their growth and development.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 02 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/2.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>PWDs (Persons with Disabilities)</h2>
                                            <p>Our commitment to inclusivity drives us to engage with Persons with Disabilities (PWDs) to ensure their voices are heard and their unique needs are addressed. We collaborate to provide support, accessibility, and empower them to lead fulfilling lives.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <div className="tab-shape">
                                        <img src="/images/tab/shape.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        
                            {/* Tabs Item 03 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/3.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                        <h2>Social/Life Education Programs</h2>
                                            <p>Empowering individuals through social and life education programs is at the core of our mission. We conduct workshops and sessions that focus on essential life skills, mental well-being, and personal development, contributing to a stronger, more resilient community.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 04 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/4.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                        <h2>Boys & Girls Empowerment</h2>
                                            <p>We are dedicated to empowering young minds through targeted programs for boys and girls. These initiatives aim to instill confidence, impart valuable skills, and create a positive impact on their lives, paving the way for a brighter future.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        
                            {/* Tabs Item 05 */}
                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/5.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                        <h2>Community Health Clinics</h2>
                                            <p>Ensuring the well-being of the community, we operate health clinics that provide accessible healthcare services. From preventive care to health education, our clinics are committed to promoting a healthier and happier community.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>

                            {/* Tabs Item 06 */}
                            <div id="tab6" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image">
                                            <img src="/images/tab/6.jpg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="content">
                                            <h2>Women's Empowerment Programs</h2>
                                            <p>Empowering women is key to creating thriving communities. Our organization conducts women's empowerment programs that focus on education, skill development, and creating opportunities for women to lead, succeed, and contribute to societal progress.</p>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="tab-text-content">
                                                    <i className="flaticon-analysis-2"></i>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-btn">
                                            <Link href="/single-service" className="default-btn-one">
                                                Discover More
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-shape">
                                    <img src="/images/tab/shape.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TabsContent;