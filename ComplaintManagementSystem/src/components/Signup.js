import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            confirmPassword: '',
            loading: false,
            snackbar: false,
            snackbarMsg: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async signup() {
        try {
            var res = await axios.post('http://localhost:8000/users', {
                user_email: this.state.email,
                user_password: this.state.password,
                user_name: this.state.name,
                user_phone: this.state.phone,
                user_address: this.state.address
            })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Registering....'
                })
                setTimeout(() => {
                    this.setState({
                        snackbar: false
                    });
                    this.props.history.push('/login')
                }, 500);
            }
        }
        catch (err) {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: ' :( Try Again Later...'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 2500);
        }
    }

    submitForm(e) {
        e.preventDefault();
        if (this.state.password == this.state.confirmPassword) {
            this.setState({
                loading: true
            })
            this.signup();
        }
        else {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: 'Passwords not matched'
            });
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 2500);
        }
    }

    render() {
        return (
            <div className="main-content" style={{ background: "linear-gradient(#396afc, #4A00E0)" }}>

                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={this.state.snackbar}
                    message={<span style={{ textAlign: 'center' }}>{this.state.snackbarMsg}</span>}
                />

                {this.state.loading == true && <LinearProgress />}

                <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
                    <div className="container px-4">
                        {/* <a className="navbar-brand" href="../index.html">
                            <img src="../assets/img/brand/white.png" />
                        </a> */}
                    </div>
                </nav>

                <div className="header bg-gradient-primary py-7 py-lg-8">
                    <div className="container">
                        <div className="header-body text-center mb-7">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-6">
                                    {/* <img src="./assets/img/logo@5x.png" alt="..." style={{ width: '200px' }} /> */}

                                    <h1 style={{ paddingTop: '40px' }}>Complaint Management System</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon style={{ fill: '#403ff1' }} points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>

                <div className="container mt--8 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-body px-lg-5 py-lg-5">

                                    <div className="text-center text-muted mb-4">
                                        <h2>Users Registration Portal</h2>
                                    </div>

                                    <form role="form">

                                        <div class="form-group">
                                            <div class="input-group input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Name" type="text" name="name" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="Email" type="email" name="email" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Mobile No" type="text" name="phone" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group input-group-alternative mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><i class="fas fa-home"></i></span>
                                                </div>
                                                <input class="form-control" placeholder="Address" type="text" name="address" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="Password" type="password" name="password" onChange={this.handleChange} />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input className="form-control" placeholder="Confirm Password" type="password" name="confirmPassword" onChange={this.handleChange} />
                                            </div>
                                        </div>



                                        <div className="text-center">
                                            <button onClick={(e) => this.submitForm(e)} type="button" className="btn btn-primary my-4">Register</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4 text-light">
                                    <Link to="/loginadmin">
                                        <small style={{ color: 'white' }}>Login as Admin</small>
                                    </Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link to="/signupadmin">
                                        <small style={{ color: 'white' }}>Register as Admin</small>
                                    </Link>
                                </div>
                                <div className="col-4 text-right">
                                    <Link to="/login">
                                        <small style={{ color: 'white' }}>Login as Users</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Signup;