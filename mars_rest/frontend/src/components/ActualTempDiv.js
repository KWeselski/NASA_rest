import React, {Component } from 'react';
import Grid from "@material-ui/core/Grid";


export default class TemperatureDiv extends Component{      
    constructor(props,data){
        super (props);
        
    }
    render(){
        let da = this.props.temp;
        console.log(da);
        let date = String(da.first_utc).split('T');
        let h_temp = String(da.max_temp).split('.')
        let m_temp = String(da.min_temp).split('.')
        let a_temp = String(da.avg_temp).split('.')
        let h_wind = parseFloat(da.max_wind).toFixed(3)
        let m_wind = parseFloat(da.min_wind).toFixed(3)
        let a_wind = parseFloat(da.avg_wind).toFixed(3)
        let h_press = parseFloat(da.max_press).toFixed(3)
        let m_press = parseFloat(da.min_press).toFixed(3)
        let a_press = parseFloat(da.avg_press).toFixed(3)

        return(
            <Grid class="actualDiv" container>
                    <div>
                        <h1>Sol: {da.Sol}</h1>
                        <h1>Day on Earth:</h1>
                        <h2>{date[0]}</h2>
                        <p>Season: {da.season}</p>
                        <p>Wind Direction: {da.direction}</p>
                    </div>
                    <div>
                        <h1>Temperature</h1>
                        <p>High Temp:{h_temp[0]}&#8451;</p>
                        <p>Avg Temp:{a_temp[0]}&#8451;</p>
                        <p>Min Temp:{m_temp[0]}&#8451;</p>   
                    </div>
                    <div class="secDiv">
                        <h1>Wind Speed [m/s]</h1>
                        <p>Max speed:{h_wind}</p>
                        <p>Avg speed:{m_wind}</p>
                        <p>Min speed:{a_wind}</p>
                    </div>
                    <div class="secDiv">
                        <h1>Pressure (Pascal)</h1>
                        <p>Max pressure:{h_press}</p>
                        <p>Avg pressure:{a_press}</p>
                        <p>Min pressure:{m_press}</p>
                    </div>
                        
            </Grid>        
        );
    }
}