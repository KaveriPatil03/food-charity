import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../img/about/testimonal1.webp';
import img2 from '../img/about/testimonal2.webp';
import img3 from '../img/about/testimonal3.webp';

const Testimonials = () => {


    return (
        <>
            {/* <!-- Testimonial Section --> */}
            <section className="testimonial-section mb-5">
                <div className="container">
                    <div className="testimonial-bg">

                        <div className='container-fluid testimonial-carousel' >

                            <OwlCarousel items={3}

                                className="owl-theme"
                                // loop 
                                nav={true}
                                animateOut={"slideOutDown"}
                                animateIn={"zoomIn"}
                                loop={true}
                                mouseDrag={true}
                                touchDrag={true}
                                autoplay={true}
                                dots={true}
                                margin={8}
                                responsiveclassName={true}
                                responsive={{
                                    '0': { items: 1, nav: false, loop: true },
                                    '768': { items: 2, nav: false, loop: true },
                                    '990': { nav: true },
                                }}
                                navText={[
                                    '<i className="las la-arrow-left"></i>',
                                    '<i className="las la-arrow-right"></i>',
                                ]}
                            >

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img1} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>Roger Scott</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img2} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>John Smith</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img3} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>Denzil Lobo</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img1} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>Jonas Smith</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img2} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>Clita D'souz</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial Block  */}
                                <div className="testimonial-block">
                                    <div className="testimonals-content">
                                        <div className="testimonal-content">
                                            <p>Far far away, behind the word mountains, far from the countries
                                                Vokalia
                                                and
                                                Consonantia, there live the blind texts.</p>
                                        </div>
                                        <div className="testimonal-content1 d-flex">
                                            <div className="img">
                                                <img src={img3} alt="" width="100px"
                                                    height="100px" className="rounded-circle" />
                                            </div>
                                            <div className="testi-content">
                                                <h5>Jenna</h5>
                                                <p> Marketing Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </OwlCarousel>

                        </div>

                        {/* </div> */}

                    </div>
                    {/* </OwlCarousel> */}
                </div>
            </section>
            {/* <!-- Testimonial Section End --> */}
        </>
    )
}

export default Testimonials