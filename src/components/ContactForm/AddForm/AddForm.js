import React, { Component } from 'react';
import { connect } from 'react-redux'

import ContactForm from '../ContactForm';
import * as actions from '../../../store/actions/index';


class AddForm extends Component {
  handleSubmit = (contact) => {
    this.props.onContactAdd(contact);
  }
    render() {
        return (
            <div>
                <h1>Add Contact Details</h1>
                <ContactForm
                    buttonLabel='Create Contact'
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactAdd: (contactData) => dispatch(actions.AddContact(contactData)),

    };
}

export default connect(mapDispatchToProps)(AddForm);