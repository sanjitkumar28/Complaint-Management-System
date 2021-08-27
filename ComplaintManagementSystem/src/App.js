import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';

function App(){
    return(
        <div>
            <Navbar/>
            
            <div className="main-content">
                
                <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
                <div className="container-fluid">
                    
                    <h1 style={{fontSize:'28px',color:'white',fontFamily:'roboto'}}>Mazon Admin Panel</h1>

                    <ul className="navbar-nav align-items-center d-none d-md-flex">
                    <li className="nav-item dropdown">
                        <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-center">
                            <span className="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="./assets/img/theme/copy.jpg"/>
                            </span>
                            <div className="media-body ml-2 d-none d-lg-block">
                            <span className="mb-0 text-sm  font-weight-bold">Shubham Mishra</span>
                            </div>
                        </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                        <div className=" dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="./examples/profile.html" className="dropdown-item">
                            <i className="fas fa-image"></i>
                            <span>Change Image</span>
                        </a>
                            <Link to="/password" className="dropdown-item">
                                <i className="fas fa-key"></i>
                                <span>Change Password</span>
                            </Link>
                        <div className="dropdown-divider"></div>
                        <div onClick={localStorage.setItem('admin', '')}>
                            <Link to="/login" className="dropdown-item">
                                <i className="ni ni-user-run"></i>
                                <span>Logout</span>
                            </Link>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
                
                <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
                <div className="container-fluid">
                    <div className="header-body">
                    
                    <div className="row">
                        <div className="col-xl-3 col-lg-6">
                        <div className="card card-stats mb-4 mb-xl-0">
                            <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Users</h5>
                                <span className="h2 font-weight-bold mb-0">3,50,897</span>
                                </div>
                                <div className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-nowrap">Overall Duration</span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        <div className="card card-stats mb-4 mb-xl-0">
                            <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Restaurants</h5>
                                <span className="h2 font-weight-bold mb-0">150</span>
                                </div>
                                <div className="col-auto">
                                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-nowrap">Overall Duration</span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        <div className="card card-stats mb-4 mb-xl-0">
                            <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Inorders</h5>
                                <span className="h2 font-weight-bold mb-0">924</span>
                                </div>
                                <div className="col-auto">
                                <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                                    <i className="fas fa-users"></i>
                                </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-nowrap">Overall Duration</span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                        <div className="card card-stats mb-4 mb-xl-0">
                            <div className="card-body">
                            <div className="row">
                                <div className="col">
                                <h5 className="card-title text-uppercase text-muted mb-0">Bookings</h5>
                                <span className="h2 font-weight-bold mb-0">150</span>
                                </div>
                                <div className="col-auto">
                                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                <i class="fas fa-utensils"></i>
                                </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-nowrap">Overall Duration</span>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container-fluid mt--7">                                
                <Footer />
                </div>
            </div>
        </div>
        );
}
const progressStyle = {
    width: '60%'
};

export default App;