import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            {/* <a href="https://sterlingmedialabs.com/" className="nav-link" target="_blank" style={{color:'#ffffff'}}>Eduvoke</a> */}
                        </div>
                        <div className="col-xl-6">
                            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                                <li className="nav-item">
                                    {/* <div className="copyright text-center text-xl-left text-muted">
                                        © 2019 <a href="https://sterlingmedialabs.com/" className="font-weight-bold ml-1" target="_blank">Sterling Media Labs</a>
                                    </div> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;