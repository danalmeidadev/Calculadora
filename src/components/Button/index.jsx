import React from 'react';
import './styles.css';

export default props => {
    return (
    <button className={`
        button        
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}    `}
        onClick={(event) => {props.click && props.click(event.target.innerHTML)}}
        >
        {props.label}
        </button>
    );
}