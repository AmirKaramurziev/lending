import React from 'react';
import './index.css'
import AboutPart from '../about-part';

class CentralPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="section-central"> 
                <div className="container-central">
                    <div className="center-title">
                        <div className="text">
                            <h1>I Like To Ask The Same Question</h1>
                            <p>Many Many Times</p>
                        </div>
                        <div className="btn-ask">
                            <h1>Ok ask me!</h1>
                        </div>
                    </div>
                    <AboutPart/>
                </div>
            </div>
        )
    }
}
export default CentralPart;