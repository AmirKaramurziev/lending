import React from 'react';
import HeaderPart from '../views/header-part';
import CentralPart from '../views/cetral-part';

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="section-main">
                <HeaderPart/>
                <CentralPart/>
                {/* <BoxPart/> */}
            </div>
        )
    }
}
export default MainPage;