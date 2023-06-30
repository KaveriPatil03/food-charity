import React from 'react'
import staff1 from '../img/about/staff1.webp';
import staff2 from '../img/about/staff2.webp';
import staff3 from '../img/about/staff3.webp';
import staff4 from '../img/about/staff4.webp';

const OurVolunteers = () => {
  return (
    <>
    <div>
         {/* <!-- OUR VOLUNTEERS START --> */}
         <section id="ourVolunteers" className="volunteer py-5">
          <div className="wrapper">
            <div className="container-fluid">
              <div className="volunteer-heading text-center">
                <p className="pt-5">MEET OUR VOLUNTEER</p>
                <h1>Our Volunteer</h1>
              </div>

              <div className="row py-5" data-aos="fade-down" data-aos-duration="1500">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <div className="staff">
                    <div className="staff-img">
                      <img src={staff1} alt="" width="200px" height="200px"
                        className="rounded-circle" />
                    </div>
                    <div className="staff-content">
                      <h3 className="pt-5">Jason Smith</h3>
                      <p>Volunteer</p>
                      <p>
                        <ul className="list-unstyled d-flex">
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-twitter fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-instagram fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-facebook fa-2x"></i></a>
                          </li>
                        </ul>
                      </p>
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <div className="staff">
                    <div className="staff-img">
                      <img src={staff2} alt="" width="200px" height="200px"
                        className="rounded-circle" />
                    </div>
                    <div className="staff-content">
                      <h3 className="pt-5">Anne Hayes</h3>
                      <p>Volunteer</p>
                      <p>
                        <ul className="list-unstyled d-flex">
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-twitter fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-instagram fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-facebook fa-2x"></i></a>
                          </li>
                        </ul>
                      </p>
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <div className="staff">
                    <div className="staff-img">
                      <img src={staff3} alt="" width="200px" height="200px"
                        className="rounded-circle" />
                    </div>
                    <div className="staff-content">
                      <h3 className="pt-5">Martha Smith</h3>
                      <p>Volunteer</p>
                      <p>
                        <ul className="list-unstyled d-flex">
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-twitter fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-instagram fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#" className="text-white"><i
                            className="fa-brands fa-facebook fa-2x"></i></a>
                          </li>
                        </ul>
                      </p>
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-3 col-lg-3">
                  <div className="staff">
                    <div className="staff-img">
                      <img src={staff4} alt="" width="200px" height="200px"
                        className="rounded-circle" />
                    </div>
                    <div className="staff-content">
                      <h3 className="pt-5">Mike Tyson</h3>
                      <p>Volunteer</p>
                      <p>
                        <ul className="list-unstyled d-flex">
                          <li className="ms-3"><a href="#"><i className="fa-brands fa-twitter fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#"><i className="fa-brands fa-instagram fa-2x"></i></a>
                          </li>
                          <li className="ms-3"><a href="#"><i className="fa-brands fa-facebook fa-2x"></i></a>
                          </li>
                        </ul>
                      </p>
                      <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- OUR VOLUNTEERS END --> */}
    </div>
    </>
  )
}

export default OurVolunteers