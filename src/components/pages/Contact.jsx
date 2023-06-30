import React from 'react'

const Contact = () => {
    return (
        <>
            <div>
                {/* <!-- slider --> */}
                <div className="hunger_slider">
                    {/* <!-- <div className="d-flex justify-content-center"> --> */}

                    <h1 data-aos="zoom-in" data-aos-duration="1200">Contact Us</h1>
                    <div className="breadcrumb-section">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                                <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- slider end --> */}


                {/* <!-- CONTACT US --> */}
                <section className="contact" data-aos="zoom-in-up" data-aos-duration="1200">
                    <div>
                        <div className="container mb-5">
                            <div className="d-flex justify-content-center">
                                {/* <!-- <h2 className="pt-5">Contact</h2> --> */}
                            </div>

                            <div className="row mt-3">
                                <div className="col-sm-12 col-md-6 col-lg-9">
                                    <form className="row g-3">
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label"></label>
                                            <input type="text" className="form-control" id="name" placeholder="Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="emailid" className="form-label"></label>
                                            <input type="email" className="form-control" id="emailid" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="subject" className="form-label"></label>
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="message" className="form-label"></label>
                                            <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="d-grid gap-2 col-lg-2  col-sm-5 mx-auto btn btn-primary">Send
                                                Message</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <div className="position-absolute pt-4 fs-5">
                                        <h4>Reach out to us!</h4>
                                        <div className="contact-us pt-2">
                                            <p>
                                                <i className="fa fa-envelope pe-2"></i>
                                                fooddonation@gmail.com
                                            </p>

                                        </div>
                                        <div className="contact-us">
                                            <p>
                                                <i className="fa fa-phone pe-2"></i>
                                                9876542011
                                            </p>
                                        </div>
                                        <div className="contact-us">
                                            <p>
                                                <i className="fa fa-globe pe-2"></i>
                                                www.fooddonation.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                </section>
                {/* <!-- END OF CONTACT US --> */}
            </div>
        </>
    )
}

export default Contact