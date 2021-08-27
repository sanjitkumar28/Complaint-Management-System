import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment'


class CompRes extends React.Component {

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
        axios.get('http://localhost:8000/admindonecomplaints/' + localStorage.getItem('admin_id'))
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
                                    <div style={{ display: 'inline-block' }}><i class="fas fa-clipboard-check" style={{ fontSize: '2.5rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Complaints Resolved</h1></div>
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
                                            <h3 className="mb-0">Complaint Details</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">

                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Complaint ID</th>
                                                <th scope="col">Complaint Subject</th>
                                                <th scope="col">Complainant Name</th>
                                                <th scope="col">Complaint Status</th>
                                                <th scope="col">Complaint Date</th>
                                            </tr>
                                        </thead>
                                        {this.state.compData.map((comp, idx) => (
                                            <tbody>

                                                <tr>
                                                    <th scope="row">
                                                        {comp.COMPLAINT_ID}
                                                    </th>
                                                    <th scope="row">
                                                        {comp.SUBJECT}
                                                    </th>
                                                    <td>
                                                        {comp.USER_NAME}
                                                    </td>                                                    
                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {comp.COMPLAINT_STATUS}
                                                    </td>
                                                    <td>
                                                        {moment(comp.COMPLAINT_DATE).format('DD-MM-YYYY')}
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


export default CompRes;