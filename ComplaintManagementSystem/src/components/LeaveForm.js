import React, { Component } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';

class LeaveForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            snackbar:false
        }
    }

    approve(e) {
        e.preventDefault();
        this.setState({
            loading: true
        })
        this.approveForm();
    }
    async approveForm() {
        try {
            var res = await axios.patch('http://192.168.56.1:8000/leave/approve', {
                _id: this.props.location.state.leaveData._id
            })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Approving Leave....'
                })
                setTimeout(() => {
                    this.setState({
                        snackbar: false
                    });
                    this.props.history.push('/register')
                }, 500);
            }
        }
        catch (err) {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: 'Try Again Later'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 1500);
        }
    }

    reject(e) {
        e.preventDefault();
        this.setState({
            loading: true
        })
        this.rejectForm();
    }
    async rejectForm() {
        try {
            var res = await axios.patch('http://192.168.56.1:8000/leave/reject', {
                _id: this.props.location.state.leaveData._id
            })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Rejecting Leave....'
                })
                setTimeout(() => {
                    this.setState({
                        snackbar: false
                    });
                    this.props.history.push('/register')
                }, 500);
            }
        }
        catch (err) {
            this.setState({
                loading: false,
                snackbar: true,
                snackbarMsg: 'Try Again Later'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 1500);
        }
    }

    
  
    render() {

        return (
            <div>
                <Navbar />

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
                                    <div style={{ display: 'inline-block' }}><i className="fas fa-pencil-alt" style={{ fontSize: '2.4rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 className="display-2 text-white">Request Leave</h1></div>
                                    <p className="text-white mt-0 mb-5">Request Leave by submitting the Form given below.</p>
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
                                                            <label className="form-control-label" htmlFor="input-first-name">Full name</label>
                                                            <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="Full name" name="name" value={this.props.location.state.leaveData.name} />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-email">Email address</label>
                                                            <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="xyz@bmsit.in" name="email" value={this.props.location.state.leaveData.email} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-mobile">Primary Mobile No.</label>
                                                            <input type="text" id="input-mobile" className="form-control form-control-alternative" placeholder="Mobile No." name="mobile" value={this.props.location.state.leaveData.mobile} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-date">From Date</label>
                                                            <input type="text" id="input-date" className="form-control form-control-alternative" placeholder="02/07/2019" name="from" value={this.props.location.state.leaveData.from} />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-email">Till Date</label>
                                                            <input type="text" id="input-date" className="form-control form-control-alternative" placeholder="05/07/2019" name="till" value={this.props.location.state.leaveData.to} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-date">Designation
                        </label>
                                                            <select className="form-control form-control-alternative" value={this.props.location.state.leaveData.designation} name="designation" >
                                                                {/* value={this.state.value} value={this.props.location.leaveData.}> */}
                                                                <option selected value="Dean-Academics">Dean-Academics</option>
                                                                <option value="Dean-External Relations">Dean-External Relations</option>
                                                                <option value="HOD-Computer Science Engineering">HOD-Computer Science Engineering</option>
                                                                <option value="HOD-Information Science Engineering">HOD-Information Science Engineering</option>
                                                                <option value="HOD-Electronics and Communications Engineering">HOD-Electronics and Communications Engineering</option>
                                                                <option value="HOD-Electrical and Electronics Engineering">HOD-Electrical and Electronics Engineering</option>
                                                                <option value="HOD-Electronics and Telecommunication Engineering">HOD-Electronics and Telecommunication Engineering</option>
                                                                <option value="HOD-Artificial Intelligence & Machine Learning">HOD-Artificial Intelligence & Machine Learning</option>
                                                                <option value="HOD-Mechanical Engineering">HOD-Mechanical Engineering</option>
                                                                <option value="HOD-Civil Engineering">HOD-Civil Engineering</option>
                                                                <option value="HOD-Master of Computer Applications">HOD-Master of Computer Applications</option>
                                                                <option value="HOD-Mathematics">HOD-Mathematics</option>
                                                                <option value="HOD-Physics">HOD-Physics</option>
                                                                <option value="HOD-Chemistry">HOD-Chemistry</option>
                                                                <option value="Faculty-Computer Science Engineering">Faculty-Computer Science Engineering</option>
                                                                <option value="Faculty-Information Science Engineering">Faculty-Information Science Engineering</option>
                                                                <option value="Faculty-Electronics and Communications Engineering">Faculty-Electronics and Communications Engineering</option>
                                                                <option value="Faculty-Electrical and Electronics Engineering">Faculty-Electrical and Electronics Engineering</option>
                                                                <option value="Faculty-Electronics and Telecommunication Engineering">Faculty-Electronics and Telecommunication Engineering</option>
                                                                <option value="Faculty-Artificial Intelligence & Machine Learning">Faculty-Artificial Intelligence & Machine Learning</option>
                                                                <option value="Faculty-Mechanical Engineering">Faculty-Mechanical Engineering</option>
                                                                <option value="Faculty-Civil Engineering">Faculty-Civil Engineering</option>
                                                                <option value="Faculty-Master of Computer Applications">Faculty-Master of Computer Applications</option>
                                                                <option value="Faculty-Mathematics">Faculty-Mathematics</option>
                                                                <option value="Faculty-Physics">Faculty-Physics</option>
                                                                <option value="Faculty-Chemistry">Faculty-Chemistry</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label className="form-control-label" htmlFor="input-email">Request To</label>

                                                            <select className="form-control form-control-alternative" value={this.props.location.state.leaveData.requestTo} name="requestTo">
                                                                <option selected value="Princple">Principle</option>
                                                                <option value="Dean-Academics">Dean-Academics</option>
                                                                <option value="Dean-External Relations">Dean-External Relations</option>
                                                                <option value="HOD-Computer Science Engineering">HOD-Computer Science Engineering</option>
                                                                <option value="HOD-Information Science Engineering">HOD-Information Science Engineering</option>
                                                                <option value="HOD-Electronics and Communications Engineering">HOD-Electronics and Communications Engineering</option>
                                                                <option value="HOD-Electrical and Electronics Engineering">HOD-Electrical and Electronics Engineering</option>
                                                                <option value="HOD-Electronics and Telecommunication Engineering">HOD-Electronics and Telecommunication Engineering</option>
                                                                <option value="HOD-Artificial Intelligence & Machine Learning">HOD-Artificial Intelligence & Machine Learning</option>
                                                                <option value="HOD-Mechanical Engineering">HOD-Mechanical Engineering</option>
                                                                <option value="HOD-Civil Engineering">HOD-Civil Engineering</option>
                                                                <option value="HOD-Master of Computer Applications">HOD-Master of Computer Applications</option>
                                                                <option value="HOD-Mathematics">HOD-Mathematics</option>
                                                                <option value="HOD-Physics">HOD-Physics</option>
                                                                <option value="HOD-Chemistry">HOD-Chemistry</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-control-label">Message</label>
                                                    <textarea name="message" value={this.props.location.state.leaveData.message} rows="4" className="form-control form-control-alternative" placeholder="A brief description of Reason of Leave requested above."></textarea>
                                                </div>
 
                                                 <div style={{ display:'flex',justifyContent:'center'}}>
                                                     <button onClick={(e) => this.approve(e)} className="btn btn-primary my-4" style={{ fontSize: "15px" }}>Approve</button>
                                                     <div style={{paddingRight:'75px'}}></div>
                                                    <button onClick={(e) => this.reject(e)} className="btn btn-primary my-4" style={{ fontSize: "15px"}}>Reject</button>
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

export default LeaveForm;