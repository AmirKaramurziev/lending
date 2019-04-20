import React from 'react';
import './index.css'

class AboutPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="about-section">
                <div className="about-container">
                    <h1>
                        We’ve since expanded our life list to 43 sites around the world
                        43 Places to See Before You Die
                    </h1>
                    <div className="cyrcle-block">
                        <div>
                            <div className="cyrcle">
                                <img src={require('../../img-view/globus.png')}/>
                            </div>
                            <p>Sites the world</p>
                        </div>
                        <div>
                            <div className="cyrcle">
                                <img src={require('../../img-view/basket.png')}/>
                            </div>
                            <p>Shopping</p>
                        </div>
                        <div>
                            <div className="cyrcle">
                                <img src={require('../../img-view/camera.png')}/>
                            </div>
                            <p>Photography</p>
                        </div>
                        <div>
                            <div className="cyrcle">
                                <img src={require('../../img-view/search.png')}/>
                            </div>
                            <p>Find the best</p>
                        </div>
                    </div>
                </div>
                <div className="ending">
                    <p>Designed by cssauthor.com</p>
                </div>
            </div>
        )
    }
}
export default AboutPart;