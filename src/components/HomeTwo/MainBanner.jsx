import React from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';

class MainBanner extends React.Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    }

    render(){
        return (
            <React.Fragment>
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='xwAYL-9pl1k' 
                    onClose={() => this.setState({isOpen: false})} 
                />

                <div className="main-banner item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content banner-content-center">
                                    <p>Are you <span>ready</span> to attend?</p>
                                    <h1>Global Legal <span>Association</span> <br /> Conference <b>2</b><b>0</b><b>2</b><b>3</b></h1>
                                    <ul>
                                        <li><i className="icofont-compass"></i> Dubai</li>
                                        <li><i className="icofont-calendar"></i> 7-11 Jan, 2023</li>
                                    </ul>
                                    <div className="button-box">
                                        <Link to="#" className="btn btn-primary">Buy Tickets Now!</Link>
                                        <Link 
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            to="#" 
                                            className="video-btn popup-youtube"
                                        >
                                            <i className="icofont-ui-play"></i> Watch Promo Video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="shape1">
                        <img src={require("../../assets/images/shapes/1.png")} alt="shape1" />
                    </div>
                    <div className="shape2 rotateme">
                        <img src={require("../../assets/images/shapes/2.png")} alt="shape2" />
                    </div>
                    <div className="shape3 rotateme">
                        <img src={require("../../assets/images/shapes/3.png")} alt="shape3" />
                    </div>
                    <div className="shape4">
                        <img src={require("../../assets/images/shapes/4.png")} alt="shape4" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default MainBanner;