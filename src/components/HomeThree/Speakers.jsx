import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
 
class Speakers extends React.Component {

    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section className="speakers-area-two ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Listen to the Event Speakers</span>
                        <h2>Who's Speaking</h2>
                        <div className="bar"></div>
                        <LaxDiv text="Speakers" dataPreset="driftRight" />
                        <Link to="#" className="btn btn-primary">View More Speakers</Link>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers1.jpg")}
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">James Anderson</Link></h3>
                                    <span>Founder & CEO</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers2.jpg")} 
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">Steven Smith</Link></h3>
                                    <span>Lead Designer</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers3.jpg")}
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">Lucy Mandana</Link></h3>
                                    <span>Developer Expert</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers4.jpg")}
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">David Warner</Link></h3>
                                    <span>Senio Visual Designer</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers5.jpg")}
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">Alberta Amelia</Link></h3>
                                    <span>Lead Designer</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-speakers-box">
                                <div className="speakers-image">
                                    <img 
                                        src={require("../../assets/images/speakers6.jpg")} 
                                        alt="speaker" 
                                    />
                                </div>

                                <div className="speakers-content">
                                    <h3><Link to="#">Abbie Edie</Link></h3>
                                    <span>Lead Designer</span>

                                    <ul className="social">
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-linkedin"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <i className="icofont-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Speakers;