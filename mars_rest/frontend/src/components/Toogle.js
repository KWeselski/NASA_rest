import React from 'react';


export default function Toogle({toggled, onClick}){
    toggled = (toggled == "false" ? true : false)

    return(      
        <div onClick={onClick} className={`toggle${toggled ? " F" : ""}`}>
        <div className="notch"/>
    </div>
      
    ) ;
};

