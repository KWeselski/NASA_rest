import React, {Component } from 'react';


export default class TemperatureDiv extends Component{
       
    constructor(props){
        super (props);
        this.state= {
            toggled: true,
            sol : null,
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
            direction : null,
        }; 
    };

    get_data(){
        let da = this.props.temp;
        this.state.sol = da.Sol;
        this.state.direction = da.direction;
        this.state.date = String(da.first_utc).split('T')[0];
        this.state.h_temp = String(da.max_temp).split('.')[0]
        this.state.m_temp = String(da.min_temp).split('.')[0]
        this.state.a_temp = String(da.avg_temp).split('.')[0]
        this.state.h_wind = parseFloat(da.max_wind).toFixed(3)
        this.state.m_wind = parseFloat(da.min_wind).toFixed(3)
        this.state.a_wind = parseFloat(da.avg_wind).toFixed(3)
    }
    /*
    changeTempToF(temp){
        return (temp*1.8) + 32;
    };
    changeTempToC(temp){
        return (temp - 32)/ 1.8;
    };
    
    componentDidMount(){
        let degree; 
        let celsius = "\u2103";
        let f = "\u2109";
        var toogle = document.getElementsByClassName('toggle')
        console.log(toogle.toogled)
        if (toogle.toogled == true){
            this.state.toogled = true;
            
        }
        else{ this.state.toogled = false;}       
        if(this.state.toggled == true){this.switchTemperature(true); degree=f}
        else{
            this.switchTemperature(); degree=celsius;}
        this.render()
    }
    
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
    };*/


    render(){
        if(this.state.h_temp == null){this.get_data()}            
        return(
            <div class="tempDiv">
                <h1>Sol: {this.state.sol}</h1>
                
                <div>
                <p>High Temp:{this.state.h_temp}</p>
                <p>Avg Temp:{this.state.m_temp}</p>
                <p>Min Temp:{this.state.a_temp}</p>            
                <p>Day: {this.state.date}</p> 
                </div>
                <div>
                    <p>Max speed:{this.state.h_wind}</p>
                    <p>Avg speed:{this.state.m_wind}</p>
                    <p>Min speed:{this.state.a_wind}</p>
                    <p>Direction:{this.state.direction}</p>    
                </div>          
            </div>

        );
    }
}
