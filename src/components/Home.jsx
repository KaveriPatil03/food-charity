import React from 'react'
import './style.css'
// import icon_donate from './img/icon_donate.jpg'
import icon_daonate from './img/icon_donate.jpg';
import icon_join2 from './img/icon_join2.png';
import icon_volunteer from './img/icon_volunteer.png';
import fight_hunger1 from './img/fight-hunger1.jpg';
import hunger1 from './img/hunger1.jpg';
import donate1 from './img/donate1.jpg';
import give_icon_green from './img/Give-icon-1-green.png';
import calendar_icon_green from './img/Calendar-icon-green.png';
import plate_icon_green from './img/Plate-icon-green.png';
import give_icon1 from './img/Give-icon-1-green.png';
import { Link } from 'react-router-dom';
import OurCauses from './pages/OurCauses';
import OurVolunteers from './pages/OurVolunteers';
import Testimonials from './pages/Testimonials';

const Home = () => {
  return (
    <>
      <div>

        {/* <!-- slider start --> */}
        <div className="slider">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <!-- <img src="images/slider-1.jpg" className="d-block w-100" alt="..."> --> */}
                <div className="img1"></div>
                <div className="carousel-caption d-md-block" data-aos="zoom-in" data-aos-duration="1500">
                  <h2>Feeding The Need</h2>
                  <p>Raising hope to the hungry people</p>
                  <Link to="/donate">
                    <button type="button" className="btn btn-success">Donate Now</button>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                <div className="img2"></div>
                <div className="carousel-caption d-md-block" data-aos="zoom-in" data-aos-duration="1500">
                  <h2>Daily Feeding Program</h2>
                  <p>We serve cooked meals to people in need daily across India.</p>
                  <a href="auth/donate.html">
                    <button type="button" className="btn btn-success">Donate Now</button>
                  </a>
                </div>
              </div>
              <div className="carousel-item">
                {/* <!-- <img src="..." className="d-block w-100" alt="..."> --> */}
                <div className="img3"></div>
                <div className="carousel-caption d-md-block" data-aos="zoom-in" data-aos-duration="1500">
                  <h2>We're on a mission to Stop Hunger!</h2>
                  <p>Join our network of heroes and begin changing lives today.</p>
                  <a href="auth/donate.html">
                    <button type="button" className="btn btn-success">Donate Now</button>
                  </a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* <!-- slider end --> */}

        {/* <!-- START OF FIGHT HUNGER --> */}
        <section className="goal">
          <div className="wrapper">
            <div className="container">
              <div className="">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                    <div className="goal-content my-5" data-aos="fade-right" data-aos-duration="1500">
                      <p className="p1">WELCOME TO FOOD-DONATION CHARITY</p>
                      <h2>Working together to end hunger</h2>
                      <p className="p2 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                        odio praesentium
                        quidem
                        inventore iste incidunt vel molestias reprehenderit, magni laboriosam officiis
                        soluta
                        voluptatibus, perspiciatis dicta, quaerat labore sed! Possimus, deleniti!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio praesentium
                        quidem
                        inventore iste incidunt vel molestias reprehenderit, magni laboriosam officiis
                        soluta
                        voluptatibus, perspiciatis dicta, quaerat labore sed! Possimus, deleniti!</p>
                      <p className="p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti odio
                        praesentium
                        quidem
                        inventore iste incidunt vel molestias reprehenderit, magni laboriosam officiis
                        soluta
                      </p>

                      <div className="row mt-4">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center mb-2">
                          <div className="gcr">
                            <img src={icon_daonate} alt="" width="60px" height="60px" />
                            <h5 className="pt-3">Start Donating</h5>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center mb-2">
                          <div className="gcr">
                            <img src={icon_join2} alt="" width="60px" height="60px" />
                            <h5 className="pt-3">Join Our Community</h5>
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 text-center mb-2">
                          <div className="gcr">
                            <img src={icon_volunteer} alt="" width="60px" height="60px" />
                            <h5 className="pt-3">Be A Volunteer</h5>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-12 my-4">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3800">
                          <img src={fight_hunger1} className="d-block w-100" alt="..." width="100%"
                            height="590px" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3800">
                          <img src={hunger1} className="d-block w-100" alt="..." width="100%"
                            height="590px" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3800">
                          <img src={donate1} className="d-block w-100" alt="..." width="100%"
                            height="590px" />
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF FIGHT HUNGER --> */}


        {/* <!-- START OF NO ONE CAN THRIVE EMPTY STOMACH --> */}
        <section className="thrive">
          <div>
            <div>
              <div className="img">
                <div className="container-fluid">
                  <div className="img-caption" data-aos="zoom-in" data-aos-duration="1500">
                    <h3 className="text-white pt-3">No One Can Thrive on an Empty Stomach</h3>
                    <p className="text-white pt-3">38 million people face hunger in the India — including more than
                      12 million children. Hunger
                      knows no boundaries — it touches every community in the India, including your own.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF NO ONE CAN THRIVE EMPTY STOMACH --> */}


        {/* <!-- START OF EVERYONE DESERVES HEALTHY FOOD --> */}
        <section className="healthy-food">
          <div className="wrapper">
            <div>
              <div className="container">
                <div className="my-2">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                      <div className="hcr">
                        <h1>EVERYONE DESERVES HEALTHY FOOD</h1>
                        <p>Donate today to help ensure everyone can have access to fresh fruits and veggies.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-1 col-lg-1">

                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                      <div className="hcr">
                        <Link to="/donate">
                          <button type="button" className="btn btn-success">Donate Now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF EVERYONE DESERVES HEALTHY FOOD --> */}

        {/* <!-- START OF OUR CAUSES --> */}
        <OurCauses />
        {/* <!-- END OF OUR CAUSES --> */}

        {/* <!-- START OF HELP END HUNGER TODAY --> */}
        <section className="help-end-hunger">
          <div className="wrapper">
            <div className="banner">

              <div className="container py-5">
                <div className="banner-caption text-center">
                  <h1 className="text-white pt-4">Help End Hunger Today</h1>
                </div>
                <div className="row py-5" data-aos="zoom-in" data-aos-duration="1500">
                  <div className="cr col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="cr1 text-center">
                      <img src={give_icon_green} alt="" width="50px" height="50px" />
                      <h6>GIVE TODAY</h6>
                      <p>Make a secure donation via online payments</p>
                      <Link to="/donate" className="pt-3">Donate Once</Link>
                    </div>
                  </div>

                  <div className="cr col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="cr1 text-center">
                      <img src={calendar_icon_green} alt="" width="50px" height="50px" />
                      <h6>GIVE MONTHLY</h6>
                      <p>Provide meals year-around to your neighbours</p>
                      <Link to="/donate" className="pt-3">Donate Monthly</Link>
                    </div>
                  </div>

                  <div className="cr col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="cr1 text-center">
                      <img src={plate_icon_green} alt="" width="50px" height="50px" />
                      <h6>FUNDRAISE</h6>
                      <p>Create a personal fundraising campaign</p>
                      <Link to="/donate" className="pt-3">Start A Fund Raiser</Link>
                    </div>
                  </div>

                  <div className="cr col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="cr1 text-center">
                      <img src={give_icon1} alt="" width="50px" height="50px" />
                      <h6>VOLUNTEER</h6>
                      <p>Give your time and serve your community</p>
                      <Link to="" className="pt-3">Volunteer</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- END OF HELP END HUNGER TODAY --> */}

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

        {/* <!-- START OF JOIN US --> */}
        <section id="volunteers" className="join-us">
          <div className="wrapper">
            <div className="container-fluid">
              <div className="text-center py-5">
                <h1 className="pt-5">Let's Walk This Path Together</h1>
                <p>Enter your email to join this cause…</p>
                <div className="d-flex justify-content-center join-us-form pt-4">
                  <div className="card" style={{ width: "50rem;" }}>
                    <div className="card-body">

                      <form>

                        <div className="row mt-2">
                          <div className="col-sm-6 col-md-4">
                            <label className="visually-hidden" for="specificSizeInputName">Name</label>
                            <input type="email" className="form-control" id="specificSizeInputName"
                              placeholder="Enter Your Name" />
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <label className="visually-hidden"
                              for="specificSizeInputGroupUsername">Email</label>
                            <div className="input-group">
                              <input type="email" className="form-control"
                                id="specificSizeInputGroupUsername" placeholder="Enter Email" />
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <label className="visually-hidden"
                              for="specificSizeInputGroupUsername">Phone</label>
                            <div className="input-group">
                              <input type="text" className="form-control"
                                id="specificSizeInputGroupUsername" placeholder="Phone Number" />
                            </div>
                          </div>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto p-5">
                          <button className="btn btn-dark" type="button">Join Now</button>
                        </div>

                      </form>
                      <p></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF JOIN US --> */}

        {/* // <!-- HELP US START --> */}
        <section className="help">
          <div className="wrapper">
            <div className="container-fluid">

                        <div className="row">
                          <div className="col-lg-9 col-md-6 col-sm-6 py-5">
                          <h1 className="ms-3">
                    Help us so we can help others
                  </h1>
                          </div>
                          <div className="col-lg-3 col-md-6 col-sm-6 py-5">
                          <a href="schedule_pickup.html">
                      <button type="button" className="btn btn-danger btn-lg">Donate Now</button>
                    </a>
                          </div>
                        </div>
              {/* <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 py-5  req">
                  <h1 className="ms-3">
                    Help us so we can help others
                  </h1>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 req-btn me-5">
                    <a href="schedule_pickup.html">
                      <button type="button" className="btn btn-danger btn-lg">Donate Now</button>
                    </a>
                  </div>
                {/* </div> 
              </div> */}
            </div>
          </div>
        </section>
        {/* <!-- HELP US END --> */}

      </div>
    </>
  )
}

export default Home