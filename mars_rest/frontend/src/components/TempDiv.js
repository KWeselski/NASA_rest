import React, {Component } from 'react';


export default class TemperatureDiv extends Component{
       
    constructor(props,data){
        super (props);
    }
    render(){
        let da = this.props.temp;
        return(
            <div>
                <h1>Sol: {da.Sol}</h1>
                <p>Max Temperature: {da.max_temp}</p>
                <p>Min Temperature: {da.min_temp}</p>
                <p>Avg Temperature: {da.avg_temp}</p>
                <p>Season: {da.season}</p>           
            </div>
        );
    }
}