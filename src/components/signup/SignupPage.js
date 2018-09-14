import React, { Component} from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm'
import {connect} from 'react-redux'
import {userSignup} from '../../actions/signupActions'
import {addFlashMsg} from '../../actions/flashMsgs'
class SignupPage extends Component {
   static propTypes = {
    userSignup: PropTypes.func.isRequired
   }
    render() {
        return (
            <div>
                <h1>Join our community!</h1>
                <SignupForm addFlashMsg={this.props.addFlashMsg} userSignup={this.props.userSignup}></SignupForm>
            </div>
        );
    }
}

export default connect(null,{userSignup,addFlashMsg})(SignupPage);