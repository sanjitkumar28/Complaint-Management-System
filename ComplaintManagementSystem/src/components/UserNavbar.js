import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UserNavbar extends React.Component {

    logout(){
        localStorage.setItem('user_email', '')
        localStorage.setItem('user_name', '')
        localStorage.setItem('user_phone', '')
        localStorage.setItem('user_id', '')
    }

    render() {
        return (
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
                <div className="container-fluid">
                    <div><h style={{ fontColor:'#5444ec',fontSize:35,fontWeight:'bold'}}>User Panel</h></div>

                    <div className="collapse navbar-collapse" id="sidenav-collapse-main">

                        <ul className="navbar-nav">



                            <li className="nav-item" >
                                <Link className="nav-link" to="/compform">
                                    <i className="fas fa-clipboard-list" style={{ color: '#e75480' }}></i>Raise Complaints
                                    </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link " to="/comphist">
                                    <i className="fas fa-history" style={{ color: '#003366' }}></i>Complaints History
                                    </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/feedback">
                                    <i className="fas fa-comments" style={{ color: 'orange' }}></i>Feedback
                                    </Link>
                            </li>

                            {/* <li className="nav-item">
                                    <Link className="nav-link " to="/approve">
                                    <i className="fas fa-check-circle" style={{ color: '#ffae42' }}></i>
                                    </Link>
                                </li> */}

                            {/* <li className="nav-item">
                                <Link className="nav-link " to="/password">
                                    <i className="fas fa-key" style={{ color: '#654321' }}></i>Change Password
                                    </Link>
                            </li> */}
                            <li className="nav-item" onClick={this.logout}>
                                <Link className="nav-link " to="/login">
                                    <i className="fas fa-power-off" style={{ color: '#3cb371' }}></i>Logout
                                    </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default UserNavbar;








