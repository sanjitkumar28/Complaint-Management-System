import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Approve extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            leaveData: []
        }
    }
    componentDidMount() {
        console.log(localStorage.getItem('designation').substring(0, 7));
        axios.get('http://192.168.56.1:8000/leave/approveLeave/' + localStorage.getItem('designation'))
            .then(response => {
                this.setState({
                    leaveData: response.data.result
                })
                console.log(this.state.leaveData);
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            (localStorage.getItem('designation').substring(0,7)=="Faculty")
            ?<div>
                <Navbar />

                <div class="main-content">

                    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                        <span class="mask bg-gradient-default opacity-8"></span>
                        <div class="container-fluid d-flex align-items-center">
                            <div class="row">
                                <div class="col-lg-7 col-md-10" style={{ paddingBottom: '20px' }}>
                                    <div style={{ display: 'inline-block' }}></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Access Forbidden</h1></div>
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
                                                <h3 className="mb-0">Sorry You Don't have Access to this Page.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>


                : <div>
                    <Navbar />

                    <div class="main-content">

                        <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style={{ headStyle }}>
                            <span class="mask bg-gradient-default opacity-8"></span>
                            <div class="container-fluid d-flex align-items-center">
                                <div class="row">
                                    <div class="col-lg-7 col-md-10" style={{ paddingBottom: '20px' }}>
                                        <div style={{ display: 'inline-block' }}><i class="fas fa-check-circle" style={{ fontSize: '2.5rem', color: 'white', paddingRight: '10px' }}></i></div><div style={{ display: 'inline-block' }}><h1 class="display-2 text-white">Approve Leave</h1></div>
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
                                                <h3 className="mb-0">Requested Leaves</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">

                                        <table className="table align-items-center table-flush">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Application ID</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th scope="col">View Application</th>

                                                </tr>
                                            </thead>
                                            {this.state.leaveData.map((leave, idx) => (
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" style={{ fontSize: '15px' }}>
                                                            {leave._id}
                                                        </th>
                                                        <td style={{ fontSize: '15px' }}>
                                                            {leave.from}
                                                        </td>

                                                        <td style={{ fontSize: '15px' }}>
                                                            {leave.name}
                                                        </td>
                                                        <td style={{ fontSize: '15px' }}>
                                                            {leave.mobile}
                                                        </td>
                                                        <td>
                                                            <div className="col-4a text-right">
                                                                <Link to={{ pathname: "/leaveform", state: { leaveData: this.state.leaveData[idx] } }} className="btn btn-primary my-4" style={{ fontSize: "15px" }} >
                                                                    View
                                                            </Link>
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


export default Approve;