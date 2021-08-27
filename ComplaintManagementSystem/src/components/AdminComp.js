import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';

class AdminComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            snackbar: false,
            snackbarMsg: '',
            compData: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/admincomplaints/' + localStorage.getItem('admin_id'))
            .then(response => {
        this.setState({
            compData: response.data
        })
        console.log(this.state.compData);
    })
    .catch(error => {
        console.log(error);
    });
    }

    async setCompStatus(compId,status) {
        try {
            var res = await axios.post('http://localhost:8000/changestatus', { status:status, complaint_id: compId })
            if (res.status == 200) {
                this.setState({
                    loading: false,
                    snackbar: true,
                    snackbarMsg: 'Setting Complaint....'
                });

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
                snackbarMsg: 'Please Try Again....'
            })
            setTimeout(() => {
                this.setState({
                    snackbar: false
                });
            }, 2500);
        }
    }


    update(e, compId,status) {
        this.setState({
            loading: true
        })
        e.preventDefault();
        this.setCompStatus(compId,status);
    }

    render() {
        return (
            <div>
                <Navbar />

                <div class="main-content">

                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={this.state.snackbar}
                        message={<span style={{ textAlign: 'center' }}>{this.state.snackbarMsg}</span>}
                    />

                    {this.state.loading == true && <LinearProgress />}

                    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                        <span class="mask bg-gradient-default opacity-8"></span>
                        <div class="container-fluid d-flex align-items-center">
                            <div class="row">
                                <div class="col-lg-7 col-md-10" style={{ paddingBottom: '20px' }}>
                                    <div style={{ display: 'inline-block' }}><i class="fas fa-pencil-alt" style={{ fontSize: '2.5rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Complaints</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid mt--7">
                        <div className="col-xl-8 mb-5 mb-xl-0">
                            <div className="card shadow">
                                <div className="card-header border-0">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h3 className="mb-0">Complaints Details</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">

                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Complaint ID</th>
                                                <th scope="col">Admin Name</th>
                                                <th scope="col">Complainant Name</th>
                                                <th scope="col">Complainant Phone</th>
                                                <th scope="col">Complainant Email</th>
                                                <th scope="col">Complaint Status</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Subject</th>
                                                <th scope="col">Complaint Date</th>
                                                <th scope="col">Change Status</th>
                                            </tr>
                                        </thead>
                                        {this.state.compData.map((comp, idx) => (
                                            <tbody>

                                                <tr>
                                                    
                                                    <th scope="row">
                                                        {comp.COMPLAINT_ID}
                                                    </th>
                                                    {
                                                        (comp.ADMIN_NAME === "")
                                                            ? <td>Unassigned</td>
                                                            : <td>{comp.ADMIN_NAME}</td>
                                                    }
                                                    <td>
                                                        {comp.USER_NAME}
                                                    </td>
                                                    <td>
                                                        {comp.USER_PHONE}
                                                    </td>
                                                    <td>
                                                        {comp.USER_EMAIL}
                                                    </td>
                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {comp.COMPLAINT_STATUS}
                                                    </td>
                                                    <td>
                                                        {comp.CATEGORY}
                                                    </td>
                                                    <td>
                                                        {comp.SUBJECT}
                                                    </td>
                                                    <td>
                                                        {moment(comp.COMPLAINT_DATE).format('DD-MM-YYYY')}
                                                    </td>
                                                    <td>
                                                        <div className="col-4a text-right">
                                                            <button onClick={(e) => { this.update(e, comp.COMPLAINT_ID,'In Process') }} className="btn btn-primary my-3" style={{ fontSize: "12px",backgroundColor:'orange' }}>In Process</button>
                                                        
                                                        
                                                            <button onClick={(e) => { this.update(e, comp.COMPLAINT_ID,'Done') }} className="btn btn-primary my-3" style={{ fontSize: "12px", backgroundColor: 'green' }}>Resolved</button>
                                                        </div>
                                                    </td>                                                    
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>
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


export default AdminComp;