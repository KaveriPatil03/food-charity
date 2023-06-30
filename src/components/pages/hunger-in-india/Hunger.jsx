import React from 'react'
import './Hunger.css';
import hunger1 from '../../img/hunger1.jpg';
import cause2 from '../../img/campaign/cause2.webp';

const Hunger = () => {
    return (
        <>
            <div>
                {/* <!-- slider --> */}
                <div className="hunger_slider">
                    {/* <!-- <div className="d-flex justify-content-center"> --> */}
                    <h1 data-aos="zoom-in" data-aos-duration="1200">Hunger in India</h1>
                    <div className="breadcrumb-section">
                        <nav aria-label="breadcrumb" className="d-flex justify-content-center">
                            <ol className="breadcrumb mt-3" data-aos="zoom-in" data-aos-duration="1200">
                                <li className="breadcrumb-item"><a href="../index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Hunger in India</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- slider end --> */}


                {/* <!-- WHAT IS START--> */}
                <section id="hunger" className="abt_us">
                    <div>
                        <div className="container-fluid">
                            <div className="row px-5 abt-row">

                                <div className="py-5 col-md-7 col-lg-7 col-12" data-aos="fade-right" data-aos-duration="1200">
                                    <h2 className="">What is Hunger?</h2>
                                    <p className="pt-3">According to the UN's Hunger Report, hunger is the term used to define periods
                                        when populations are experiencing severe food insecurity—meaning that they go for entire
                                        days without eating due to lack of money, lack of access to food, or other resources.</p>
                                    <p>Here are some widely accepted definitions of key terms:</p>
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">Hunger is the distress associated with lack of food. The threshold for food
                                            deprivation, or undernourishment, is fewer than 1,800 calories per day.</p>
                                    </span>
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">Undernutrition goes beyond calories to signify deficiencies in energy,
                                            protein, and/or essential vitamins and minerals.</p>
                                    </span>
                                    {/* <!-- <span className="content-arrow d-flex">
                            <i className="fa-solid fa-circle-check mt-2"></i>
                            <p className="ms-3">Malnutrition refers more broadly to both undernutrition and overnutrition
                                (problems with unbalanced diets). </p>
                        </span> --> */}
                                    <span className="content-arrow d-flex">
                                        <i className="fa-solid fa-circle-check mt-2"></i>
                                        <p className="ms-3">Food security relates to food availability, access, and utilization. When a
                                            person always has adequate availability and access to enough safe and nutritious food to
                                            maintain an active and healthy life, they are considered food secure. </p>
                                    </span>
                                </div>

                                <div className="col-md-5 col-lg-5 col-12 hunger-img">
                                    <img src={hunger1} alt="" clas="img-fluid" height="100%" width="550px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- WHAT IS END --> */}

                {/* <!-- START OF HUNGER --> */}
                <section id="hungerInIndia" className="hunger-india">
                    <div className="wrapper">
                        <div className="container-fluid">
                            <div className="row pe-4">
                                <div className="col-sm-12 col-md-5 col-lg-5 hunger-india-img">
                                    <img src={cause2} alt="" width="550px" height="100%" />
                                </div>
                                <div className="py-4 ps-4 col-sm-12 col-md-7 col-lg-7" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="hungerIndia">
                                        <h3>Hunger in India</h3>
                                        <p>India, with a population of over 1.3 billion, has seen tremendous growth in the past two
                                            decades. Gross Domestic Product has increased 4.5 times and per capita consumption has
                                            increased 3 times. Similarly, food grain production has increased almost 2 times.
                                            However, despite phenomenal industrial and economic growth and while India produces
                                            sufficient food to feed its population, it is unable to provide access to food to a
                                            large number of people, especially women and children.</p>
                                    </div>

                                    <div className="StateOfHunger">
                                        <h3>State of Hunger in India</h3>
                                        <p>According to FAO estimates in ‘The State of Food Security and Nutrition in the World,
                                            2020 report, 189.2 million people are undernourished in India. By this measure 14% of
                                            the population is undernourished in India. Also, 51.4% of women in reproductive age
                                            between 15 to 49 years are anaemic. Further according to the report 34.7% of the
                                            children aged under five in India are stunted (too short for their age), while 20%
                                            suffer from wasting, meaning their weight is too low for their height. Malnourished
                                            children have a higher risk of death from common childhood illnesses such as diarrhea,
                                            pneumonia, and malaria. The Global Hunger Index 2020 ranks India at 101 out of 116
                                            countries on the basis of three leading indicators -- prevalence of wasting and stunting
                                            in children under 5 years, under 5 child mortality rate, and the proportion of
                                            undernourished in the population.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END OF HUNGER --> */}

                {/* <!-- START OF KEY FACTS --> */}
                <section id="keyFacts" className="key-facts">
                    <div className="wrapper">
                        <div className="container">
                            <div className="py-5 keyFacts text-center">
                                <h2>Key facts about hunger in India</h2>
                                <p>India is home to the largest undernourished population in the world</p>
                                <div className="marterial-content pt-2" data-aos="zoom-in" data-aos-duration="1200">
                                    <span className="d-flex cont">
                                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                                        <p className="ms-3">189.2 million people i.e. 14% of our population is undernourished.</p>
                                    </span>
                                    <span className="d-flex cont">
                                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                                        <p className="ms-3">20% of children under 5 are underweight.</p>
                                    </span>
                                    <span className="d-flex cont">
                                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                                        <p className="ms-3">34.7% of children under 5 years of age are stunted.</p>
                                    </span>
                                    <span className="d-flex cont">
                                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                                        <p className="ms-3">51.4% women in the reproductive age (15-49 years) are anaemic.</p>
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
                {/* <!-- END OF KEY FACTS --> */}

                {/* <!-- START OF HUNGER THREATENS --> */}
                <section id="impact" className="threaten">
                    <div className="wrapper">
                        <div className="container">
                            <div className="row mx-5">
                                <div className="col-sm-12 col-md-6 col-lg-6 cr">
                                    <h4 className="pt-5">Hunger threatens our nation's future</h4>
                                    <p className="py-3">Many people facing hunger are forced to make tough choices between buying food
                                        and medical bills,
                                        food and rent and/or food and transportation. This struggle goes beyond harming an
                                        individual
                                        family’s future, it can harm us all.</p>
                                </div>

                                <div className="col-sm-12 col-md-6 col-lg-6">
                                    <h4 className="pt-5">What is food insecurity?</h4>
                                    <p className="py-3">Food security is a federal measure of a household’s ability to provide enough
                                        food for every
                                        person in the household to have an active, healthy life. Food insecurity is one way we can
                                        measure the risk of hunger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- END OF HUNGER THREATENS --> */}

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
                {/* <!-- HELP US END --> */}

            </div>
        </>
    )
}

export default Hunger