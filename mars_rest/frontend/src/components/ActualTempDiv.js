import React, {Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Toogle from './Toogle.js'

export default class TemperatureDiv extends Component{      
    constructor(props){
        super (props);
        this.state= {     
            toggled: true,
            sol : null,
            season: null,
            h_temp: null,
            m_temp: null,
            a_temp: null,
            h_wind: null,
            m_wind: null,
            a_wind: null,
            h_press: null,
            m_press: null,
            a_press: null,
            date: "",
            direction : null
        };  
    };

    get_data(){
        let da = this.props.temp;
        this.state.sol = da.Sol 
        this.state.season = da.season;     
        this.state.date = String(da.first_utc).split('T')[0];
        this.state.h_temp = String(da.max_temp).split('.')[0];
        this.state.m_temp = String(da.min_temp).split('.')[0];
        this.state.a_temp = String(da.avg_temp).split('.')[0];
        this.state.h_wind = parseFloat(da.max_wind).toFixed(3)
        this.state.m_wind = parseFloat(da.min_wind).toFixed(3)
        this.state.a_wind = parseFloat(da.avg_wind).toFixed(3)
        this.state.h_press = parseFloat(da.max_press).toFixed(3)
        this.state.m_press = parseFloat(da.min_press).toFixed(3)
        this.state.a_press = parseFloat(da.avg_press).toFixed(3) 
        this.state.direction = da.direction;
    }

    changeTempToF(temp){
        return (temp*1.8) + 32;
    };
    changeTempToC(temp){
        return (temp - 32)/ 1.8;
    };

    switchTemperature(tog){
        let tog_ = tog;
        if(tog_ == true){   
            this.state.h_temp = this.changeTempToF(this.state.h_temp);
            this.state.m_temp = this.changeTempToF(this.state.m_temp);
            this.state.a_temp= this.changeTempToF(this.state.a_temp);
            this.state.h_temp = String(this.state.h_temp).split('.')[0];
            this.state.m_temp = String(this.state.m_temp).split('.')[0];
            this.state.a_temp = String(this.state.a_temp).split('.')[0];
        }
        else{
            this.state.h_temp = this.changeTempToC(this.state.h_temp);
            this.state.m_temp = this.changeTempToC(this.state.m_temp);
            this.state.a_temp= this.changeTempToC(this.state.a_temp);
            this.state.h_temp = String(this.state.h_temp).split('.')[0];
            this.state.m_temp = String(this.state.m_temp).split('.')[0];
            this.state.a_temp = String(this.state.a_temp).split('.')[0];

        }  
    };

    render(){
        let celsius = "\u2103";
        let f = "\u2109";
        let degree;  
        if(this.state.h_temp == null){this.get_data()} 
        if(this.state.toggled == true){this.switchTemperature(true); degree=f}
        else{
            this.switchTemperature(); degree=celsius;}    
        return(
            <Grid class="actualDiv" container>
                    <div>
                        <h1>Sol: {this.state.sol}</h1>
                        <h1>Day on Earth:</h1>
                        <h2>{this.state.date}</h2>
                        <p>Season: {this.state.season}</p>
                        <p>Wind Direction: {this.state.direction}</p> 
                                             
                    </div>
                    <div>
                        <h1>Temperature</h1>
                        <p>High Temp:{this.state.h_temp}{degree}</p>
                        <p>Avg Temp:{this.state.a_temp}{degree}</p>
                        <p>Min Temp:{this.state.m_temp}{degree}</p> 
                        <div id="tog"><p>&#8457;</p>
                        <Toogle toggled={this.state.toggled.toString()}
                         onClick={() => this.setState(prevState => ({toggled:!prevState.toggled}))}></Toogle>
                         <p>&#8451;</p>
                         </div>
                         
                    </div>
                    <div class="secDiv">
                        <h1>Wind Speed [m/s]</h1>
                        <p>Max speed:{this.state.h_wind}</p>
                        <p>Avg speed:{this.state.m_wind}</p>
                        <p>Min speed:{this.state.a_wind}</p>
                    </div>
                    <div class="secDiv">
                        <h1>Pressure (Pascal)</h1>
                        <p>Max pressure:{this.state.h_press}</p>
                        <p>Avg pressure:{this.state.a_press}</p>
                        <p>Min pressure:{this.state.m_press}</p>
                    </div>
                        
            </Grid>        
        );
    }
}