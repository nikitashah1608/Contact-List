import React, { Component } from 'react';
import { connect } from 'react-redux';

import Contact from './Contact/Contact';
import * as action from '../../store/actions/index';
import EditForm from '../ContactForm/EditForm/EditForm';

class ContactList extends Component {

    deleteContactHandler = (id) => {
        this.props.ondeleteContact(id);
    }

    editContactHandler = (id) => {
        this.props.oneditContact(id);
    }

    render () {
        return (
            <div className='Contact'>
                <p>Contact list App</p>
                {this.props.contact.map(ctrl => (
                    (this.props.editing) ? <EditForm contact={ctrl}/> :
                    <Contact key={ctrl.id} 
                        name={ctrl.label} 
                        email={ctrl.email}
                        phone={ctrl.phone}
                        deleteContact={() => this.deleteContactHandler(ctrl.id)}
                        editContact={() => this.editContactHandler(ctrl.id)}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    editable: state.editing
})

const mapDispatchToProps = dispatch => {
    return {
        ondeleteContact: (id) => dispatch(action.removeContact(id)),
        oneditcontact: (id) => dispatch(action.editStart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);