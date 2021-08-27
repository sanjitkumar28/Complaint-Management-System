import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import UserNavbar from './UserNavbar';

class CompForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            snackbar: false,
            snackbarMsg: '',
            subject:'',
            category:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

   

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async complaint() {
        try {
            var res = await axios.post('http://localhost:8000/createcomplaint', { 
                user_email: localStorage.getItem('user_email'), 
                user_name: localStorage.getItem('user_name'), 
                user_phone: localStorage.getItem('user_phone'), 
                user_id: localStorage.getItem('user_id'), 
                category: this.state.category, 
                subject: this.state.subject })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Registering Complaint....'
                });

                setTimeout(() => {
                    this.setState({
                        snackbar: false
                    });
                    this.props.history.push('/comphist')
                }, 500);

            }
        }
        catch (err) {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: 'Please try again...'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 2500);
        }
    }

    submit(e){
        this.setState({
            loading: true
        })
        e.preventDefault();
        this.complaint();
    }    

    reject(e) {
        this.setState({
            loading: false,
            snackbar: false,
            snackbarMsg: '',
            subject: '',
            category: ''
        });
    }
    
    render() {

        return (
            <div>
                <UserNavbar/>

                <div className="main-content">
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={this.state.snackbar}
                        message={<span style={{ textAlign: 'center' }}>{this.state.snackbarMsg}</span>}
                    />

                    {this.state.loading == true && <LinearProgress />}
                    <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                        <span className="mask bg-gradient-default opacity-8"></span>
                        <div className="container-fluid d-flex align-items-center">
                            <div className="row">
                                <div className="col-lg-7 col-md-10">
                                    <div style={{ display: 'inline-block' }}><i className="fas fa-clipboard-list" style={{ fontSize: '2.4rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 className="display-2 text-white">Raise Complaint</h1></div>
                                    <p className="text-white mt-0 mb-5">Raise a Complaint by submitting the Form given below.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid mt--7">
                        <div className="row">
                            <div className="col-xl-8 order-xl-1">
                                <div className="card bg-secondary shadow">

                                    <div className="card-header bg-white border-0">
                                        <div className="row align-items-center">
                                            <div className="col-8" >
                                                <div style={{ display: 'inline-block', paddingRight: '8px' }}><h3 className="mb-0">Form Details</h3></div><div style={{ display: 'inline-block' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <form>

                                            <div className="pl-lg-4">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-first-name">Complaint Category</label>
                                                            <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Enter the Category of Complaint" name="category" onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                </div>                                                                                           

                                                <div className="form-group">
                                                    <label className="form-control-label">Complaint Subject</label>
                                                    <textarea name="subject" rows="4" className="form-control form-control-alternative" placeholder="Enter the Subject of Complaint" onChange={this.handleChange}></textarea>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <button onClick={(e)=> this.submit(e)} className="btn btn-primary my-4" style={{ fontSize: "15px" }}>Submit</button>
                                                    <div style={{ paddingRight: '75px' }}></div>
                                                    <button onClick={(e) => this.reject(e)} className="btn btn-primary my-4" style={{ fontSize: "15px" }}>Cancel</button>
                                                </div>

                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const headStyle = {
    minHeight: '600px',
    backgroundImage: 'url(../assets/img/theme/profile-cover.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top'
};

export default CompForm;