import React from 'react';
import lax from 'lax.js';
import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {

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
            <section className="about-area-two ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Who We Are</span>
                                <h2>The largest network of world’s top legal counsels, lawyers & legal technology providers.</h2>
                                <p>Global Legal Association (GLA) is a brand of Effectual Services PVT Ltd that devote a majority of their practice to legal industry. We are here to support and provide insight on all issues pertaining to legal Matters.
GLA provides a platform for legal professionals from all over to world to engage, connect, generate, promote business prospects and to receive the recognition they deserve. GLA represents a diverse and wide spectrum of individuals from law firms, Corporates, Universities and Venture capitalists involved indirectly or directly in the practice of law.</p>
                                
                                <p>GLA provides you with timely, relevant and unique event outcomes enabling you to seamlessly connect with the right knowledge, ideas, people, marketplaces and opportunities to remain ahead of the curve. We intent to cover each and every aspects of legal matters in this few years to come.
Our commitment to service and quality are the basis for our reputation as we tend to provide the best legal platform in the world. GLA influences the development of international law reform and shapes the future of the legal profession throughout the world.</p>

                                {/* <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="about" />
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/about3.jpg")} className="about-img1" alt="about" />

                                <LaxButton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;