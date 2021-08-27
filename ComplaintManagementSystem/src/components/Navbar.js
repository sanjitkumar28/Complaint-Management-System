import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    logout(){
        localStorage.setItem('admin_email', '')
        localStorage.setItem('admin_name', '')
        localStorage.setItem('admin_phone', '')
        localStorage.setItem('admin_id', '')
    }

    render() {
        return (
                <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                    <div className="container-fluid">
                    <div><h style={{ fontColor: '#5444ec', fontSize: 30, fontWeight: 'bold' }}>Admin Panel</h></div>

                        <div className="collapse navbar-collapse" id="sidenav-collapse-main">

                            <ul className="navbar-nav">
                                
                               

                                <li className="nav-item" >
                                <Link className="nav-link" to="/selectcomp">
                                        <i className="fas fa-layer-group" style={{color:'green'}}></i>Select Complaints
                                    </Link>
                                </li>

                                <li className="nav-item" >
                                    <Link className="nav-link" to="/admincomp">
                                        <i className="fas fa-pencil-alt" style={{color:'#e75480'}}></i>Complaints
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link " to="/compres">
                                    <i className="fas fa-clipboard-check" style={{ color: '#003366' }}></i>Complaints Resolved
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link " to="/receipt">
                                    <i className="fas fa-receipt" style={{ color: 'orange' }}></i>Receipts
                                    </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link className="nav-link " to="/approve">
                                    <i className="fas fa-check-circle" style={{ color: '#ffae42' }}></i>
                                    </Link>
                                </li> */}

                                {/* <li className="nav-item">
                                    <Link className="nav-link " to="/password">
                                        <i className="fas fa-key" style={{color:'#654321'}}></i>Change Password
                                    </Link>
                                </li> */}
                            <li className="nav-item" onClick={this.logout}>
                                    <Link className="nav-link " to="/loginadmin">
                                        <i className="fas fa-power-off" style={{color:'#3cb371'}}></i>Logout
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
           
        );
    }
}

export default Navbar;








