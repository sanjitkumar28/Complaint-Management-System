import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

import moment from 'moment'

class Receipt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            compData: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/receipts/')
            .then(response => {
                this.setState({
                    compData: response.data[0]
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

                    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                        <span class="mask bg-gradient-default opacity-8"></span>
                        <div class="container-fluid d-flex align-items-center">
                            <div class="row">
                                <div class="col-lg-7 col-md-10" style={{ paddingBottom: '20px' }}>
                                    <div style={{ display: 'inline-block' }}><i class="fas fa-receipt" style={{ fontSize: '2.5rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Receipts</h1></div>
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
                                            <h3 className="mb-0">Receipts Details</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">

                                    <table className="table align-items-center table-flush">
                                        <thead className="thead-light">
                                            <tr>
                                                <th scope="col">Receipt ID</th>
                                                <th scope="col">Complaint ID</th>
                                                <th scope="col">User ID</th>
                                                <th scope="col">User Name</th>
                                                <th scope="col">Admin ID</th>
                                                <th scope="col">Admin Name</th>
                                                <th scope="col">Feedback ID</th>
                                                <th scope="col">Feedback</th>
                                                <th scope="col">Receipt Date</th>
                                            </tr>
                                        </thead>
                                        {this.state.compData.map((comp, idx) => (
                                            <tbody>

                                                <tr>
                                                    <th scope="row">
                                                        {comp.RECEIPT_ID}
                                                    </th>
                                                    <td>
                                                        {comp.COMPLAINT_ID}
                                                    </td>
                                                    <td>
                                                        {comp.USER_ID}
                                                    </td>
                                                    <td>
                                                        {comp.USER_NAME}
                                                    </td>
                                                    <td>
                                                        {comp.ADMIN_ID}
                                                    </td>
                                                    {
                                                        (comp.ADMIN_NAME === "")
                                                            ? <td>Unassigned</td>
                                                            : <td>{comp.ADMIN_NAME}</td>
                                                    }
                                                    <td>
                                                        {comp.FEEDBACK_ID}
                                                    </td>
                                                    <td>
                                                        {comp.FEEDBACK_VALUE}
                                                    </td>
                                                    <td>
                                                        {moment(comp.RECEIPT_DATE).format('DD-MM-YYYY')}
                                                    </td>
                                                    {/* <td>
                                                        {comp.mobile}
                                                    </td>
                                                    <td>
                                                        {comp.email}
                                                    </td>
                                                    <td>
                                                        {comp.requestTo}
                                                    </td>
                                                    <td>
                                                        {comp.from}
                                                    </td>
                                                    <td>
                                                        {comp.till}
                                                    </td> */}
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


export default Receipt;