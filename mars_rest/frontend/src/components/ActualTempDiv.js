import React, {Component } from 'react';
import Grid from "@material-ui/core/Grid";

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
            <Grid class="actualDiv" container>
                    <div>
                        <h1>Sol: {da.Sol}</h1>
                        <h1>Day on Earth:</h1>
                        <h2>{date[0]}</h2>
                        <p>Season: {da.season}</p>
                    </div>
                    <div>
                        <h1>Temperature</h1>
                        <p>High Temperature:{h_temp[0]} &#8451;</p>
                        <p>Avg Temperature:{a_temp[0]} &#8451;</p>
                        <p>Min Temperature:{m_temp[0]} &#8451;</p>
                        
                    </div>
            </Grid>        
        );
    }
}