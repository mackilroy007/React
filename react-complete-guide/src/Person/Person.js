import React from 'react';

// import the css file
import './Person.css';

const person = (props) => {
    return (
        <div className='Person' onClick={props.click}>
            {/* props.click refers to the App.js custom property event handler */}
            <p >I'm {props.name} and I am {props.age} years old!</p>
            {/* displays any code that is inbetween the <Person> tags in App. */}
            <p>{props.children}</p>
            {/* props.changed also refers to the custom property */}
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )

}

export default person;