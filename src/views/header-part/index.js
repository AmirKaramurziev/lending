import React from 'react';
import './index.css'

class HeaderPart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="section-header">
                <div className="header-container">
                    <div className="header-title">
                        <h1 className="blue">Indo </h1>{" "}
                        <h1 className="grey">Tourism</h1>
                        <div className="links">
                            <div className="link-item">Home</div>
                            <div className="link-item">About us</div>
                            <div className="link-item">Projects</div>
                            <div className="link-item"> Contact us</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HeaderPart