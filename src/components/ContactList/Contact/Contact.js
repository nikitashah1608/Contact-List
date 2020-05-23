import React from 'react';

const contact = (props) => (
    <div className='Contact'>
        <div className='Label'>
            {props.name}
        </div>
        <div>
            {props.email}
        </div>
        <div>
            {props.phone}
        </div>
        <button onClick={() => props.deleteContact(props.key)}>Delete</button>
        <button onClick={() => props.editContact(props.key)}>Edit</button>
    </div>
);

export default contact;