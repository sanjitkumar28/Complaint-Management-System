import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Admin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveData: []
        }
    }
    // componentDidMount() {
    //     axios.get('http://192.168.56.1:8000/leave/getLeave/' + localStorage.getItem('staff'))
    //         .then(response => {
    //             this.setState({
    //                 leaveData: response.data.result
    //             })
    //             console.log(this.state.leaveData);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <div>
                <Navbar />

                <div class="main-content">

                    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                        <span class="mask bg-gradient-default opacity-8"></span>
                        <div class="container-fluid d-flex align-items-center">
                            <div class="row">
                                <div class="col-lg-7 col-md-10" style={{ paddingBottom: '20px' }}>
                                    <div style={{ display: 'inline-block' }}><i class="fas fa-history" style={{ fontSize: '2.5rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Leave Status</h1></div>
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
                                            <h3 className="mb-0">Requested Leave Details</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">

                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Application ID</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Phone No.</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Requested To</th>
                                                <th scope="col">Start Date</th>
                                                <th scope="col">End Date</th>

                                            </tr>
                                        </thead>
                                        {this.state.leaveData.map((leave, idx) => (
                                            <tbody>

                                                <tr>
                                                    <th scope="row">
                                                        {leave.mobile}
                                                    </th>
                                                    <td>
                                                        {leave.from}
                                                    </td>
                                                    <td style={{ fontWeight: 'bold' }}>
                                                        {leave.approve}
                                                    </td>
                                                    <td>
                                                        {leave.name}
                                                    </td>
                                                    <td>
                                                        {leave.mobile}
                                                    </td>
                                                    <td>
                                                        {leave.email}
                                                    </td>
                                                    <td>
                                                        {leave.requestTo}
                                                    </td>
                                                    <td>
                                                        {leave.from}
                                                    </td>
                                                    <td>
                                                        {leave.till}
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


export default Admin;