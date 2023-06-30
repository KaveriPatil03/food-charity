import React from 'react'
import './About.css'
import OurVolunteers from '../OurVolunteers'
import our_mission from '../../img/about/our-mission.jpg';
import our_vission from '../../img/about/about-vision.jpg';
import our_plan from '../../img/about/about-plan.jpg';
import about1 from '../../img/about1.webp';
import Testimonials from '../Testimonials';

const About = () => {
    return (
        <>
            <div>
                {/* <!-- slider --> */}
                <div className="abt_slider">
                    {/* <!-- <div className="d-flex justify-content-center"> --> */}

                    <h1 data-aos="zoom-in" data-aos-duration="1200">About Us</h1>
                    <div className="breadcrumb-section">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                        <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                        </nav>
                    </div>
                    {/* <nav style={{"--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);",
                        ariaLabel:"breadcrumb"}}>
                        <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                            <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav> */}
                    {/* <!-- </div> --> */}
                </div>
                {/* <!-- slider end --> */}


                {/* <!--PLAN TO END HUNGER--> */}
                <section className="abt_us my-5">
                    <div>
                        <div className="container-fluid">
                            <div className="row mx-2">
                                <div className="col-md-5 col-lg-5 col-12">
                                    <img src={about1} alt="" clas="img-fluid" height="100%" width="100%" />
                                </div>
                                <div className="text-justify col-md-7 col-lg-7 col-12" data-aos="fade-left" data-aos-duration="1200">
                                    <h2>Together We're On A Plan To End Hunger</h2>
                                    <p className="pt-3">Extreme hunger and malnutrition are morally unacceptable. They create a trap
                                        from which people cannot easily escape. Hunger and malnutrition mean less productive
                                        individuals, who are more prone to disease and often unable to earn more and improve their
                                        livelihood. There are nearly 800 million people, mostly in developing countries, who suffer
                                        from hunger.

                                    </p>
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">In collaboration with our partners, we are making a meaningful difference in
                                            the lives of vulnerable families by providing them with non-perishable essential
                                            staples. Together we are ensuring that they have enough food to eat and remain healthy.
                                        </p>
                                    </span>
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">Daily Wagers build our homes and run our cities. But during the Covid 19
                                            outbreak, they are in great distress due to loss of livelihoods and have been struggling
                                            to feed their families.</p>
                                    </span>
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">India FoodBanking Network is reaching out to them with Ration Kits to help
                                            them tide over the food crisis. We continue to help these vulnerable families to rebuild
                                            their lives and are actively seeking support from individuals and organizations with
                                            monetary donations for rations (raw food materials) and packaged products.</p>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- PLAN TO END HUNGER END --> */}

                {/* <!-- OUR MISSION START --> */}
                <section className="mission py-4" data-aos="fade-up" data-aos-duration="1200">
                    <div className="wrapper">
                        <div className="container">
                            <div className="text-center pt-5">
                                <h1>Our Mission</h1>
                                <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi commodi, eius
                                    adipisci
                                    delectus quae distinctio eveniet animi deserunt alias tenetur vitae impedit nulla possimus
                                    consequuntur! Magni eligendi provident aperiam aliquid.</p>
                            </div>

                            <div className="container py-4">
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <img src={our_mission} alt="" width="100%" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Our Mission</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                                    tempor
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <img src={our_vission} alt="" width="100%" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Our Vision</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                                    tempor
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4 col-lg-4">
                                        <div className="card">
                                            <div className="card-img-top">
                                                <img src={our_plan} alt="" width="100%" />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">Our Plan</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                                    tempor
                                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                    exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- OUR MISSION END --> */}


                {/* <!-- START OF TECHNICAL STATS --> */}
                <section className="technical">
                    <div className="wrapper">
                        <div className="tech-img">
                            <div className="container text-center py-5">
                                <div className="tech-content">
                                    <p className="text-white">GREAT REVIEWS FOR OUR SERVICES</p>
                                    <h3 className="text-white">Technical Statistics</h3>
                                </div>
                                <div className="row py-5" data-aos="zoom-in-up" data-aos-duration="1200">
                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="tech-cr">
                                            <img src="" alt="" />
                                            <h3>60M</h3>
                                            <p>FUND RAISED</p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="tech-cr">
                                            <img src="" alt="" />
                                            <h3>9,200</h3>
                                            <p>COMPLETED PROJECTS</p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="tech-cr">
                                            <img src="" alt="" />
                                            <h3>5,800</h3>
                                            <p>DONATION</p>
                                        </div>
                                    </div>

                                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                                        <div className="tech-cr">
                                            <img src="" alt="" />
                                            <h3>2,750</h3>
                                            <p>VOLUNTEER</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- END OF TECHNICAL STATS --> */}

                {/* <!-- OUR VOLUNTEERS START --> */}
               <OurVolunteers />
                {/* <!-- OUR VOLUNTEERS END --> */}

                {/* <!-- START OF TESTIMONALS --> */}
                <section className="testimonal">
                    <div className="wrapper">
                        <div>
                            <div className="testimonal-img">
                                <div className="text-center py-5">
                                    <p className="text-white">TESTIMONIAL</p>
                                    <h1 className="text-white">What People Say About Us</h1>
                                </div>

                               <Testimonials />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END OF TESTIMONALS --> */}


                {/* <!-- FAQ'S START--> */}
                <section id="faqs" className="faq my-5" data-aos="fade-down" data-aos-duration="1200">
                    <div>
                        <div className="container py-5">
                            <div className="text-center pb-5">
                                <h1>Frequently Asked Questions</h1>
                            </div>
                            <div className="accordion accordion-flush" id="accordionFlushExample" data-aos="zoomin-left"
                                data-aos-offset="200">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            How do I make a donation for children being served across India?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">You can make a donation online, by calling us or emailing to us
                                            at donations@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                            aria-controls="flush-collapseTwo">
                                            How can I donate food?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">You can donate raw rice, pulses, wheat flour, cooking oil and
                                            other groceries for children. Companies, individuals, schools and groups of people can
                                            collect food by running a food drive in your network. We also have partnerships with
                                            food and retail companies to donate safe raw food/ration.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                                            aria-controls="flush-collapseThree">
                                            Can I make a donation in memory of family members and contribute and serve for just one
                                            day’s meals?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Yes. You can donate in memory of family members and contribute
                                            for just one day’s meals. You can also serve at a feeding center nearest to you on that
                                            particular observance day if you chose to. If you cannot make it to the feeding sites to
                                            serve, we will serve meals in remembrance and memory of your loved ones.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFour" aria-expanded="false"
                                            aria-controls="flush-collapseFour">
                                            Can I donate non-food items or supplies for children?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Yes, you can donate school bags, stationery, clothes and toys
                                            for children that study at our feeding sites.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseFive" aria-expanded="false"
                                            aria-controls="flush-collapseFive">
                                            Will I get a receipt for my donation?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Yes, once your donation has been received, you will receive a
                                            letter and receipt that you can keep for your personal records or tax deductions. It may
                                            take 4-6 weeks to receive by post. You can receive the receipt and 80G exemption
                                            certificate immediately emailed to you if you make online donations through our payment
                                            gateway online.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- FAQ'S END--> */}


                {/* <!-- HELP US START --> */}
                <section className="help-us">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between py-5  req">
                                    <h1 className="ms-3">
                                        Help us so we can help others
                                    </h1>
                                    <div className="req-btn me-5">
                                        <a href="schedule_pickup.html">
                                            <button type="button" className="btn btn-danger btn-lg">Donate Now</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- HELP US END --></div> */}
            </div>
        </>
    )
}

export default About