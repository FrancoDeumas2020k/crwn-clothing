import React,{ Component } from 'react';

import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState( {
            email : '',
            password : ''
        })
    }

    handleChange = e => {
        const { value , name } = e.target;
        this.setState ({
            [name] : value
        })   
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>

                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <div className="buttons">
                        <Button type="submit">Sign in</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignin>Sign in with google</Button>
                    </div>
                </form>
            </div>
        )
    }
}


export default Signin;
