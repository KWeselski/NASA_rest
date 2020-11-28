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
        let h_wind = parseFloat(da.max_wind).toFixed(3)
        let m_wind = parseFloat(da.min_wind).toFixed(3)
        let a_wind = parseFloat(da.avg_wind).toFixed(3)
        return(
            <div class="tempDiv">
                <h1>Sol: {da.Sol}</h1>
                <div>
                <p>High Temp:{h_temp[0]}&#8451;</p>
                <p>Avg Temp:{a_temp[0]}&#8451;</p>
                <p>Min Temp:{m_temp[0]}&#8451;</p>            
                <p>Day: {date[0]}</p> 
                </div>
                <div>
                    <p>Max speed:{h_wind}</p>
                    <p>Avg speed:{m_wind}</p>
                    <p>Min speed:{a_wind}</p>
                    <p>Direction:{da.direction}</p>
               
                </div>          
            </div>

        );
    }
}
