import React, {Component } from 'react';


export default class TemperatureDiv extends Component{
       
    constructor(props,data){
        super (props);
    }
    render(){
        let da = this.props.temp;
        let date = String(da.first_utc).split('T');
        let h_temp = String(da.max_temp).split('.')
        let m_temp = String(da.min_temp).split('.')
        let a_temp = String(da.avg_temp).split('.')
        return(
            <div class="tempDiv">
                <h1>Sol: {da.Sol}</h1>
                <p>High Temp:{h_temp[0]} &#8451;</p>
                <p>Min Temp:{m_temp[0]} &#8451;</p>
                <p>Avg Temp:{a_temp[0]} &#8451;</p>
                <p>Day: {date[0]}</p>           
            </div>
        );
    }
}
