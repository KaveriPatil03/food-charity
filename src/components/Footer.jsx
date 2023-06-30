import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      {/* <!-- FOOTER START --> */}
      <section className="footer pt-4">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4">
                <form>
                  <h3 className="text-white">Food-Donation</h3>
                  <p>Registered as Hunger Heroes. Under Indian Society Registration Act XXI, 1860.</p>
                  <p>All donations are tax-exempted as eligible under section 80G of the the Income Tax Act,
                    1961.</p>
                </form>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-2 offset-1">
                <h5>Get To Know Us</h5>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-white">About
                    Us</Link></li>
                  <li className="nav-item mb-2"><Link to="/hunger"
                    className="nav-link p-0 text-white">Hunger in India</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/campaign"
                    className="nav-link p-0 text-white">Campaign</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/contactus"
                    className="nav-link p-0 text-white">Contact Us</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/about#faqs"
                    className="nav-link p-0 text-white">FAQs</Link>
                  </li>
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-2">
                <h5>Get Involved</h5>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item mb-2"><Link to="/donate" className="nav-link p-0 text-white">Make a
                    Donation</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/donate" className="nav-link p-0 text-white">Give
                    Once</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/donate" className="nav-link p-0 text-white">Give
                    Monthly</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/donate"
                    className="nav-link p-0 text-white">Fundraise</Link>
                  </li>
                  {/* <!-- <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">More Ways to Give</Link> --> */}
                </ul>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-2">
                <h5>Hunger Facts</h5>
                <ul className="nav flex-column mt-4">
                  <li className="nav-item mb-2"><Link to="/hunger" className="nav-link p-0 text-white">What is Hunger</Link></li>
                  <li className="nav-item mb-2"><Link to="/hunger" className="nav-link p-0 text-white">Hunger in India</Link>
                  </li>
                  <li className="nav-item mb-2"><Link to="/hunger" className="nav-link p-0 text-white">State of Hunger
                  </Link></li>
                  <li className="nav-item mb-2"><Link to="/hunger" className="nav-link p-0 text-white">Key Facts</Link></li>
                  <li className="nav-item mb-2"><Link to="/hunger" className="nav-link p-0 text-white">Impact of Hunger</Link>
                  </li>
                </ul>
              </div>


            </div>

            <div className="d-flex justify-content-between py-5 my-5 border-top">
              <p>© 2021 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><Link to="#" className="text-white"><i className="fa-brands fa-twitter fa-2x"></i></Link></li>

                <li className="ms-3"><Link to="#" className="text-white"><i className="fa-brands fa-instagram fa-2x"></i></Link></li>

                <li className="ms-3"><Link to="#" className="text-white"><i className="fa-brands fa-facebook fa-2x"></i></Link></li>

              </ul>
            </div>

            {/* <!-- Back to top button --> */}
            <button type="button" className="btn btn-outline-success btn-floating btn-lg" id="btn-back-to-top">
              <i className="fas fa-arrow-up"></i>
            </button>
          </footer>

        </div >
      </section >
      {/* <!-- FOOTER END --> */}

    </>
  )
}

export default Footer