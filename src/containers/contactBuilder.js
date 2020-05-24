import React, { Component } from 'react';
import { connect } from 'react-redux';

import Bux from '../hoc/Bux';
import ContactList from '../components/ContactList/ContactList';
import * as action from '../store/actions/index';

class ContactBuilder extends Component {
    componentDidMount () {
        this.props.fetchContacts();
    }

    render () {
        return (
            <Bux>
                <ContactList contact = {this.props.contacts}/>
            </Bux>
        );
        
    }
}

const mapStateToProps = state => ({
    error: state.error,
    contacts: state.contacts,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(action.fetchContactsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactBuilder);
