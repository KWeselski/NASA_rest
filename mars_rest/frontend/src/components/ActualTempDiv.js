import React, {Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Switch from '@material-ui/core/Switch'
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
        return(
            <Grid class="actualDiv" container>
                    <div>
                        <h1>Sol: {da.Sol}</h1>
                        <h1>Day on Earth:</h1>
                        <h2>{date[0]}</h2>
                        <p>Season: {da.season}</p>
                    </div>
                    <div>
                        <h1>Wind Speed [m/s]</h1>
                        <p>Max speed:{da.max_wind}</p>
                        <p>Avg speed:{da.avg_wind}</p>
                        <p>Min speed:{da.min_wind}</p>
                    </div>
                    <div>
                        <h1>Pressure (Pascal)</h1>
                        <p>Max pressure:{da.max_press}</p>
                        <p>Avg pressure:{da.avg_press}</p>
                        <p>Min pressure:{da.min_press}</p>
                    </div>
                    <div>
                        <h1>Temperature</h1>
                        <p>High Temperature:{h_temp[0]}&#8451;</p>
                        <p>Avg Temperature:{a_temp[0]}&#8451;</p>
                        <p>Min Temperature:{m_temp[0]}&#8451;</p>
                        F<Switch
                defaultChecked
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}/>&#8451;  
                    </div>
            </Grid>        
        );
    }
}