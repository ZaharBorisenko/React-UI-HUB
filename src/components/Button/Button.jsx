import React from 'react';
import './Button.css';
import './unusualButtons/UnusualButtons.css'


function Button(props) {
    const {variant = 'primary', size = 'medium', text, ...rest} = props;
 return(
     <button className={`button ${variant} ${size}`} {...rest}>
         {text}
     </button>
 )
}

export default Button