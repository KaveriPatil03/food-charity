import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     {/* <!-- START OF HEADER --> */}
    <section className="header">
        <div>
            {/* <!-- Start of navbar --> */}
            <div className="conatiner-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id='nav'>
                    <div className="container-fluid mx-5 py-2">
                        <NavLink className="navbar-brand" to="#">Food-<span className="nb">Donation</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/hunger">Hunger in India</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/campaign">Campaign</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                                </li>
                                <li className="nav-item px-2">
                                    <div className="button">
                                        <NavLink className="nav-link" to="/donate">Donate Now</NavLink>
                                    </div>
                                </li>

                                {/* <!-- <li className="nav-item px-2">
                                    <button className="btn btn-outline-success" type="submit">
                                        <NavLink to="auth/donate.html">Donate Now</NavLink>
                                    </button>
                                </li> --> */}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* <!-- End of navbar --> */}

          
        </div>
    </section>
    {/* <!-- END OF HEADER --> */}
    </>
  )
}

export default Navbar