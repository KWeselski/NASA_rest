import React, {Component} from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default class HideButton extends Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.SolDiv_ = document.getElementsByClassName('tempDiv');
    }

    handleClick() {
        const wrapper = this.wrapperRef.current;
        const Sol = this.SolDiv_;
        console.log(Sol)
        /*wrapper.classList.toogle('is-nav-open')*/
        if (wrapper.classList.contains('is-nav-open')){
            wrapper.classList.remove('is-nav-open')
            for (let index = 0; index < Sol.length; index++) {
                Sol[index].classList.remove('is-hide')            
            }           
        }
        else{
        wrapper.classList.add('is-nav-open')
        for (let index = 0; index < Sol.length; index++) {
            Sol[index].classList.add('is-hide')       
        }  
        }
        console.log("Działa")
    }

    

    render() {
        return (
            <div ref={this.wrapperRef} className='wrapper'>
                <div className="nav">
                    <ArrowDownwardIcon fontSize="large" className="nav__icon"            
                    onClick={()=> this.handleClick()}/>
                <div className='nav__body'>
                    
                </div>
                </div>
            </div>
        );
    }
}