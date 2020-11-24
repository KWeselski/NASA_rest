import React, { Component } from "react";
import { render } from "react-dom";
import Grid from "@material-ui/core/Grid";
import TempDiv from './TempDiv';

export default class App extends Component {
  constructor(props){
    super (props);
    this.state = {
       data: [],
       loaded: false,
       placeholder: "Loading"
    }
  }

  componentDidMount(){
      fetch("api/").then(response => {
          if (response.status > 400) {
              return this.setState(() => {
                  return { placeholder: "Something went wrong"};
              });
          }
          return response.json();
      })
    .then(data => {
        this.setState(() => {
            return { 
                data,
                loaded:true
            };
        });
    });
  }
  render() {
    if (this.state.loaded == true){
     let data_ = this.state.data;
      console.log(data_);
        return (    
        <Grid container spacing={24}>Hello
            <Grid item xs={12} align="center">       
                <TempDiv temp={data_[data_.length-1]}/>
            </Grid>
            <Grid item xs={2}>
            <TempDiv temp={data_[0]}/>
            </Grid>
            <Grid item xs={2}>
            <TempDiv temp={data_[1]}/>
            </Grid>
            <Grid item xs={2}>
            <TempDiv temp={data_[2]}/>
            </Grid>
            <Grid item xs={2}>
            <TempDiv temp={data_[3]}/>
            </Grid>
            <Grid item xs={2}>
            <TempDiv temp={data_[4]}/>
            </Grid>           
      </Grid>);
        } 
  else{
    return(
      <div>Lol</div>
    )
  };
}
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);