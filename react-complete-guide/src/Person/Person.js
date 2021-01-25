import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/* displays any code that is inbetween the <Person> tags in App. */}
            <p>{props.children}</p>
        </div>
    )

}

export default person;