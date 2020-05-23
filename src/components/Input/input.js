import React from 'react';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement'];

    if (props.invalid && props.shouldValidate) {
        inputClasses.push('Invalid');
    }

    switch(props.elementType) {
        case 'input':
            inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} defaultValue={props.defaultValue} />
            break;
        default:
            inputElement = <input onChange={props.changed} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} />
            break;

    }
    return (
       <div className='Input'>
           <label className='Label'>props.label</label>
           {inputElement}
       </div>
    );
}

export default input;