import React from 'react';
import fund1 from '../img/campaign/fund1.jpg';
import fund2 from '../img/campaign/fund2.jpg';
import OurCauses from './OurCauses';


const Campaign = () => {
    return (
        <>
            <div>
                {/* <!-- slider --> */}
                <div className="hunger_slider">
                    {/* <!-- <div className="d-flex justify-content-center"> --> */}

                    <h1 data-aos="zoom-in" data-aos-duration="1200">Campaign</h1>
                    <div className="breadcrumb-section">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                                <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Campaign</li>
                            </ol>
                        </nav>
                    </div>
                    {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                        <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Campaign</li>
                    </ol>
                </nav> */}
                    {/* <!-- </div> --> */}
                </div>
                {/* <!-- slider end --> */}

                {/* <!-- START OF SUPPORT --> */}
                <section className="support" data-aos="fade-up" data-aos-duration="1000">
                    <div className="wrapper">
                        <div className="container">
                            <div className="text-center py-5">
                                <h2>Your Support Matters </h2>
                                <p>All our initiatives are designed to provide essential food support to underserved communities in
                                    the form of raw grains, freshly cooked food or packaged food products depending on the need. Our
                                    aim is to ensure, hunger never comes in the way of a brighter future.</p>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="yourSupport">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-6 your-sprt-img">
                                                <img src={fund1} alt="" width="100%" height="100%" />
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="your-support ps-2">
                                                    <h5 className="pt-5 ps-3">Fundraiser for Kids</h5>
                                                    <p className="pb-3 ps-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Mauris tempus vestib
                                                        ulum
                                                        mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                                                    <a href="auth/donate.html" className="ps-5">
                                                        <button type="button" className="btn btn-danger">Donate Now</button>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="names my-4">
                                            <div className="progress w-75">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{
                                                    width: "78%",
                                                    ariaValuenow: "75", ariaValuemin: "0", ariaValuemax: "100"
                                                }}>78%</div>
                                            </div>
                                            <p className="">Fundraised: Rs.20,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <div className="yourSupport">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-6 your-sprt-img">
                                                <img src={fund2} alt="" width="100%" height="100%" />
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <div className="your-support ps-2">
                                                    <h5 className="pt-5 ps-3">Fundraiser for Kids</h5>
                                                    <p className="pb-3 ps-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Mauris tempus vestib
                                                        ulum
                                                        mauris. Lorem ipsum dolor sit amet, consectetur.</p>
                                                    <a href="auth/donate.html" className="ps-5">
                                                        <button type="button" className="btn btn-danger">Donate Now</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="names my-4">
                                            <div className="progress w-75">
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
                </section>
                {/* <!-- END OF SUPPORT --> */}

                {/* <!-- START --> */}
                <OurCauses />
                {/* <!-- END --> */}

                {/* <!-- HELP US START --> */}
                <section className="help">
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
                {/* <!-- HELP US END --> */}
            </div>
        </>
    )
}

export default Campaign