
import React, { Component } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import { strValidation } from '../Common/strvalidation';


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName:"",
           password:""
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
        let result = true;


        if (this.state.userName === "" || !strValidation.onlyAlpha(this.state.userName)) {
            userNameError = "*Please Enter Correct User Name"
            result = false
        }

        // if (this.state.confromemail !== this.state.email || this.state.confromemail === "") {
        //     confromemailError = "*Please Enter Correct Confirm Email ID"
        //     result = false

        // }

        // if (!strValidation.emailId(this.state.email) || this.state.email === "") {
        //     emailError = "*Please Enter Email ID"
        //     result = false

        // }

        // if (!strValidation.passwordpattern(this.state.password) || this.state.password === "") {
        //     passwordError = "*least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        //     result = false

        // }

        // if (this.state.confromPassword !== this.state.password || this.state.confromPassword === "") {
        //     confromPasswordError = "*Please Enter Correct Confirm Password"
        //     result = false

        // }

        if (userNameError || emailError ) {
            this.setState({ userNameError, emailError })
            result = false;
        }

        return result;

    }


    render() {
        return (
            <section class="myform-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="form-area login-form">

                                <div class="form-input">
                                    <h2 style={{ letterSpacing: "7px", fontSize: "25px" }}>LOGIN</h2>
                                    <form>
                                        <div class="form-group">
                                            <input type="text" name="userName" placeholder="UserName"/>
                                            <label>User Name</label>
                        <span style={{ fontSize: 11, color: "red", marginTop: -10 }}>{this.state.userNameError}</span>

                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" />
                                            <label>password</label>
                                        </div>
                                        <div class="myform-button">
                                            <button type="button" class="myform-btn" onClick={() => this.handleClick()}>LOGIN</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="form-content">
                                    <ul>
                                        <li><a href="#" class="facebook" ><FcGoogle size="30px" /><span style={{ letterSpacing: "2px", marginLeft: "5%" }}>LOGIN WITH GOOGLE</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
