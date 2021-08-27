import React, { Component } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';



class LoginAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            snackbar: false,
            snackbarMsg: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async login() {
        try {
            var res = await axios.post('http://localhost:8000/adminslogin', { admin_email: this.state.email, admin_password: this.state.password })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Logging In....'
                });

                localStorage.setItem('admin_email', this.state.email)
                localStorage.setItem('admin_name', res.data.ADMIN_NAME)
                localStorage.setItem('admin_phone', res.data.ADMIN_PHONE)
                localStorage.setItem('admin_id', res.data.ADMIN_ID)


                setTimeout(() => {
                    this.setState({
                        snackbar: false
                    });
                    this.props.history.push('/compres')
                }, 500);

            }
        }
        catch (err) {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: 'Invalid Credentials'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 2500);
        }
    }

    submitForm(e) {
        this.setState({
            loading: true
        })
        e.preventDefault();
        this.login();
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

                <div className="container mt--8 pb-5" >
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card bg-secondary shadow border-0">
                                <div className="card-body px-lg-5 py-lg-5">

                                    <div className="text-center text-muted mb-4">
                                        <h2>Admin Login Portal</h2>
                                    </div>

                                    <form role="form">
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input name="email" onChange={this.handleChange} className="form-control" placeholder="Email" type="email" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="input-group input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input name="password" onChange={this.handleChange} className="form-control" placeholder="Password" type="password" />
                                            </div>
                                        </div>

                                        {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id=" customCheckLogin" type="checkbox"/>
                                                    <label className="custom-control-label" for=" customCheckLogin">
                                                        <span className="text-muted">Remember me</span>
                                                    </label>
                                            </div> */}

                                        <div className="text-center">
                                            <button onClick={(e) => this.submitForm(e)} type="button" className="btn btn-primary my-4">Log In</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-4 text-light">
                                    <Link to="/signupadmin">
                                        <small style={{ color: 'white' }}>Register as Admin</small>
                                    </Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link to="/login">
                                        <small style={{ color: 'white' }}>Login as User</small>
                                    </Link>
                                </div>
                                <div className="col-4 text-right">
                                    <Link to="/signup">
                                        <small style={{ color: 'white' }}>Register as Users</small>
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

export default LoginAdmin;