import React, { Component } from 'react';
import { connect } from 'react-redux'

import ContactForm from '../ContactForm';
import * as actions from '../../../store/actions/index';


class EditForm extends Component {
  handleSubmit = (contact) => {
    this.props.onContactEdit(contact)
  }
    render() {
        return (
            <div>
                <h1>Add Contact Details</h1>
                <ContactForm
                    buttonLabel='Edit Contact'
                    handleSubmit={this.handleSubmit}
                    contactData={this.props.contact}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactEdit: (contactData) => dispatch(actions.editContact(contactData)),

    };
}

export default connect(mapDispatchToProps)(EditForm);