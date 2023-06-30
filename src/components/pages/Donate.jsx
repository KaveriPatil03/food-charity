import React from 'react'

const Donate = () => {
  return (
    <>
    <div>
    {/* <!-- slider --> */}
            <div className="hunger_slider">
                {/* <!-- <div className="d-flex justify-content-center"> --> */}

                <h1 data-aos="zoom-in" data-aos-duration="2000">Donate Now</h1>
                <div className="breadcrumb-section">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                                <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Donate Now</li>
                            </ol>
                        </nav>
                    </div>
            </div>
            {/* <!-- slider end -->     */}

            {/* <!-- START --> */}
    <section className="donation">
        <div className="wrapper py-5">
            <div className="container">
                <div className="text-center">
                    {/* <!-- <h2>Shop by category</h2> --> */}
                </div>

                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="jwellery-tab" data-bs-toggle="tab"
                                    data-bs-target="#jwellery" type="button" role="tab" aria-controls="jwellery"
                                    aria-selected="true">Donate Once</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="diamond-tab" data-bs-toggle="tab" data-bs-target="#diamond"
                                    type="button" role="tab" aria-controls="diamond" aria-selected="true">Donate
                                    Monthly</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="jwellery" role="tabpanel"
                                aria-labelledby="jwellery-tab">
                                <div className="row my-3" data-aos="zoom-in-up" data-aos-duration="1200">
                                    <form className="row gx-3 gy-2 mt-3 align-items-center">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">Fname</label>
                                                <input type="text" className="form-control" id="specificSizeInputName"
                                                    placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Lname</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">Email</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="Email" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Phone Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-4">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">State</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="State" />
                                            </div>
                                            <div className="col-sm-6 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">City</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Postal Code</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Postal Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <h5>Payment Information</h5>
                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputName">Amount</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="Amount" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Credit Card Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername"
                                                        placeholder="Credit Card Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">


                                            <div className="col-sm-12 col-md-4">
                                                <label className="visually-hidden" htmlFor="specificSizeSelect"></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">Expiry Month</div>
                                                    <select className="form-select" id="specificSizeSelect">
                                                        <option selected>01</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        <option value="5">05</option>
                                                        <option value="6">06</option>
                                                        <option value="7">07</option>
                                                        <option value="8">08</option>
                                                        <option value="9">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>

                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-sm-12 col-md-4 alt-input">
                                                <label className="visually-hidden" htmlFor="specificSizeSelect"></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">Expiry Year</div>
                                                    <select className="form-select" id="specificSizeSelect">
                                                        <option selected>2022</option>
                                                        <option value="1">2022</option>
                                                        <option value="2">2023</option>
                                                        <option value="3">2024</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-sm-12 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-text">CVV Number</div>
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="CVV" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-12">

                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mt-4 ">
                                            <button type="submit"
                                                className="d-grid gap-2 col-lg-2 col-sm-5 mx-auto btn btn-primary">Donate Now
                                            </button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="diamond" role="tabpanel" aria-labelledby="diamond-tab">
                                <div className="row my-3" data-aos="zoom-in-up" data-aos-duration="1200">
                                    <form className="row gx-3 gy-2 mt-3 align-items-center">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">Fname</label>
                                                <input type="text" className="form-control" id="specificSizeInputName"
                                                    placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Lname</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">Email</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="Email" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Phone Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-4">
                                                <label className="visually-hidden" htmlFor="specificSizeInputName">State</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="State" />
                                            </div>
                                            <div className="col-sm-6 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">City</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Postal Code</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="Postal Code" />
                                                </div>
                                            </div>
                                        </div>
                                        <h5>Payment Information</h5>
                                        <div className="row mt-2">
                                            <div className="col-sm-6 col-md-6">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputName">Amount</label>
                                                <input type="email" className="form-control" id="specificSizeInputName"
                                                    placeholder="Amount" />
                                            </div>
                                            <div className="col-sm-6 col-md-6 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Credit Card Number</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername"
                                                        placeholder="Credit Card Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">


                                            <div className="col-sm-12 col-md-4">
                                                <label className="visually-hidden" htmlFor="specificSizeSelect"></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">Expiry Month</div>
                                                    <select className="form-select" id="specificSizeSelect">
                                                        <option selected>01</option>
                                                        <option value="1">01</option>
                                                        <option value="2">02</option>
                                                        <option value="3">03</option>
                                                        <option value="4">04</option>
                                                        <option value="5">05</option>
                                                        <option value="6">06</option>
                                                        <option value="7">07</option>
                                                        <option value="8">08</option>
                                                        <option value="9">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>

                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-sm-12 col-md-4 alt-input">
                                                <label className="visually-hidden" htmlFor="specificSizeSelect"></label>
                                                <div className="input-group">
                                                    <div className="input-group-text">Expiry Year</div>
                                                    <select className="form-select" id="specificSizeSelect">
                                                        <option selected>2022</option>
                                                        <option value="1">2022</option>
                                                        <option value="2">2023</option>
                                                        <option value="3">2024</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="col-sm-12 col-md-4 alt-input">
                                                <label className="visually-hidden"
                                                    htmlFor="specificSizeInputGroupUsername">Username</label>
                                                <div className="input-group">
                                                    <div className="input-group-text">CVV Number</div>
                                                    <input type="text" className="form-control"
                                                        id="specificSizeInputGroupUsername" placeholder="CVV" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-2">
                                            <div className="col-12">

                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                                    placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 mt-4 ">
                                            <button type="submit"
                                                className="d-grid gap-2 col-lg-2 col-sm-5 mx-auto btn btn-primary">Donate
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- END --> */}

    {/* <!-- START OF HOW WILL YOUR DONATIONS BE USED --> */}
    <section className="donation-used">
        <div className="wrapper">
            <div className="container">
                <div className="text-center py-5" data-aos="zoom-in-up" data-aos-duration="1200">
                    <h1>How will your donations be used?</h1>

                    <div className="marterial-content pt-3">
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">Cooked meals and ration kits are prepared at a subsidized rate of ₹10 per
                                meal.</p>
                        </span>
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">These meals are picked up free of cost by our partner NGOs from kitchen
                                locations and served to beneficiaries.</p>
                        </span>
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">Beneficiaries include children, elderly, women, daily wagers, transgenders
                                and other workers.</p>
                        </span>
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">We ensure quality and nutrition of meals and food distribution to deserving
                                individuals by conducting surprise audits and impact assessments.</p>
                        </span>
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">Feeding India is a 100% not for profit organization, every rupee you donate
                                will go towards cooking meals and feeding people.</p>
                        </span>
                        <span className="d-flex cont">
                            <i className="fa-solid fa-arrow-right-long mt-1"></i>
                            <p className="ms-3">We believe in complete transparency. Our processes are validated by Grant
                                Thornton Bharat LLP.</p>
                        </span>
                    </div>
                </div>


            </div>
        </div>
    </section>
    {/* <!-- END OF HOW WILL YOUR DONATIONS BE USED --> */}
    </div>
    </>
  )
}

export default Donate