import React from 'react';
import './index.css';

class BoxPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="section-box">
                <div className="box-container">
                    <h1>Places You Must Visit In Your Lifetime</h1>
                    <div className="img-box">
                    <div className="first-part">
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                    </div>
                    <div className="terd-part">
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                        <div className="img-item">
                            <img src={require('../../img-view/box.png')}></img>
                            <p>Azheekal</p>
                        </div>
                    </div>
                    </div>
                    <div className="green-palace"></div>
                </div>
            </div>
        )
    }
}
export default BoxPart;