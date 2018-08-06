import React from 'react';
import classes from './Person.css';

const person = (props) => {
    // const styling = {
    //     '@media (min-width:500px)' : {
    //         width: '450px'
    //     }
    // };

    return (
    <div className={classes.Person}>
        <p onClick={props.click}>Hi I am a {props.name} and I am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};

export default person;