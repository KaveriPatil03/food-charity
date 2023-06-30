import React from 'react'
import cause4 from '../img/campaign/cause4.webp'
import cause2 from '../img/campaign/cause2.webp'
import cause3 from '../img/campaign/cause3.webp'

const OurCauses = () => {
  return (
    <>
    <div>
     {/* <!-- START OF OUR CAUSES --> */}
     <section className="causes">
          <div className="wrapper py-5">
            <div className="container">
              <div className="text-center">
                <h1>Our Causes</h1>
              </div>
              <div className="row py-5" data-aos="fade-up" data-aos-duration="1500">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={cause4} alt="" />
                    </div>
                    <div className="card-body">
                      <div className="edu text-center">
                        <h5>Donate</h5>
                      </div>
                      <h5 className="card-title">Give Food to Homeless Children</h5>
                      <p className="card-text">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.</p>
                    </div>
                    <div className="card-footer">
                      <div className="names my-4">
                        <div className="progress w-100">
                          <div className="progress-bar bg-danger" role="progressbar" style={{
                            width: "78%",
                            ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100"
                          }}>78%</div>
                        </div>
                        <p className="">Fundraised: Rs.20,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={cause2} alt="" />
                    </div>
                    <div className="card-body">
                      <div className="edu text-center">
                        <h5>Donate</h5>
                      </div>
                      <h5 className="card-title">Give Food to Homeless Children</h5>
                      <p className="card-text">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.</p>
                    </div>
                    <div className="card-footer">
                      <div className="names my-4">
                        <div className="progress w-100">
                          <div className="progress-bar bg-danger" role="progressbar" style={{
                            width: "78%",
                            ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100"
                          }}>78%</div>
                        </div>
                        <p className="">Fundraised: Rs.20,000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mb-3">
                  <div className="card">
                    <div className="card-img-top">
                      <img src={cause3} alt="" />
                    </div>
                    <div className="card-body">
                      <div className="edu text-center">
                        <h5>Donate</h5>
                      </div>
                      <h5 className="card-title">Give Food to Homeless Children</h5>
                      <p className="card-text">Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia.</p>
                    </div>
                    <div className="card-footer">
                      <div className="names my-4">
                        <div className="progress w-100">
                          <div className="progress-bar bg-danger" role="progressbar" style={{
                            width: "78%",
                            ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100"
                          }}>78%</div>
                        </div>
                        <p className="">Fundraised: Rs.20,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- END OF OUR CAUSES --> */}
    </div>
    </>
  )
}

export default OurCauses