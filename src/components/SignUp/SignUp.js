import React, { Component } from 'react'
import { strValidation } from '../Common/strvalidation'
import './SignUp.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            email: '',
            confromemail: '',
            confromPassword: '',
            password: ''
        }
    }

    handleClick = () => {
        if (this.validation()) {
        console.warn(this.state)
        // window.location.href = "/accountmanagement"
    }
}

validation = () => {

    let userNameError = "";
    let emailError = "";
    let confromemailError = "";
    let confromPasswordError = "";
    let passwordError = "";
    let result = true;


    if (this.state.userName === "" || !strValidation.onlyAlpha(this.state.userName)) {
        userNameError = "*Please Enter Correct User Name"
        result = false
    }

    if (this.state.confromemail !== this.state.email || this.state.confromemail === "") {
        confromemailError = "*Please Enter Correct Confirm Email ID"
        result = false

    }

    if (!strValidation.emailId(this.state.email) || this.state.email === "") {
        emailError = "*Please Enter Email ID"
        result = false

    }

    if (!strValidation.passwordpattern(this.state.password) || this.state.password === "") {
        passwordError = "*least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        result = false

    }

    if (this.state.confromPassword !== this.state.password || this.state.confromPassword === "") {
        confromPasswordError = "*Please Enter Correct Confirm Password"
        result = false

    }

    if (userNameError || emailError || confromemailError || passwordError || confromPasswordError) {
        this.setState({ userNameError, emailError, confromemailError, passwordError, confromPasswordError })
        result = false;
    }

    return result;

}
    
    render() {
        return (
            <div>
                  <section class="myform-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="form-area login-form">

                                <div class="form-input">
                                    <h2 style={{ letterSpacing: "7px", fontSize: "25px" }}>REGISTER</h2>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" name="userName" placeholder="UserName"/>
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.userNameError}</span>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" name="email" placeholder="E-mail"/>
                                            <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.emailError}</span>
                                        </div>

                                        <div class="form-group">
                                            <input type="text" name="confromemail" placeholder="Confirm Email"/>
                                            <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.confromemailError}</span>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="password" placeholder="Password"/>
                                            <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.passwordError}</span>
                                        </div>

                                        <div class="form-group">
                                            <input type="password" name="confromPassword" placeholder="Confrom Password"/>
                                            <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.confromPasswordError}</span>
                                        </div>

                                      
                                        <div class="myform-button">
                                            <button type="button" class="myform-btn" onClick={() => this.handleClick()}>Submit</button>
                                        </div>
                                        
                                    </form>
                                </div>
                                <div class="form-content">
                                    <ul>
                                        <li><a href="#" class="facebook" ><span style={{ letterSpacing: "2px", marginLeft: "5%" }}>Login Page</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}
