import React, { Component } from "react";
import {connect} from 'react-redux';

import Input from '../Input/input';

class ContactForm extends Component {
    state = {
        formisValid: true,
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }, 
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'tel',
                    placeholder: 'Your Phone'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        }
    }

    contactHandler = () => {
        event.preventDefault();
        
        const formData = {};
        for (let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;     
        }
        const contact = {
            contactData: formData
        }

        this.props.handleSubmit(contact);
    }

    checkValidity = (values, rules) => {
        let isValid = true;
        if (!rules) {
            return;
        }

        if (rules.required) {
            isValid = values.trim() !== '' && isValid;
        }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        }
        const updatedForm = {...updatedContactForm[inputIdentifier]};
        updatedForm.value = event.target.value;
        updatedForm.valid = this.checkValidity(updatedForm.value, updatedForm.validation);
        updatedForm.touched = true;
        updatedContactForm[inputIdentifier] = updatedForm;
        
        let formisValid = true;

        for (let inputIdentifier in updatedContactForm) {
            formisValid = updatedContactForm[inputIdentifier].valid && formisValid;
        }
        this.setState({contactForm: updatedContactForm, formisValid: formisValid});
    }

    render () {
        const formElementArray = [];
        for (let key in this.state.contactForm) {
            formElementArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }
        let form = (
            <form onSubmit={this.contactHandler}>
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.config.value} 
                        touched={formElement.config.touched}
                        invalid = {!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        defaultValue={this.props.contact[formElement.id]}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <button onClick={this.contactHandler}>{this.props.buttonLabel}</button>
            </form>
        );
        return (
            <div className="ContactData">
                {form}
            </div>
        );
    }
}

export default ContactForm;