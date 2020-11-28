import React from 'react';



switchTemperature(h_temp, m_temp, a_temp){
    if(this.switch.checked){
        h_temp = changeTempToF(h_temp);
        m_temp = changeTempToF(m_temp);
        a_temp = changeTempToF(a_temp);
    }
    else{
        h_temp = changeTempToC(h_temp);
        m_temp = changeTempToC(m_temp);
        a_temp = changeTempToC(a_temp);
    }
};

changeTempToF(temp){
    return (temp*1.8) + 32;
};

changeTempToC(temp){
    return (temp - 32) * 0.5556;
};

