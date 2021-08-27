import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router , Route,Redirect} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Signup from './components/Signup';
import Users from './components/Users';
import Password from './components/Password';
import Approve from './components/approve';
import LeaveForm from './components/LeaveForm';
import Admin from './components/Admin';
import AdminComp from './components/AdminComp';
import CompRes from './components/CompRes';
import CompForm from './components/CompForm';
import CompHist from './components/CompHist';
import SignupAdmin from './components/SignupAdmin';
import LoginAdmin from './components/LoginAdmin';
import SelectComp from './components/SelectComp';
import Feedback from './components/Feedback';
import Receipt from './components/Receipt';

ReactDOM.render(
<Router>
{/* <Redirect from="/" to="/login" /> */}
<Route path="/login" component={Login}></Route>
<Route path="/register" component={Register}></Route>
<Route path="/signup" component={Signup}></Route>
<Route path="/users" component={Users}></Route>
<Route path="/password" component={Password}></Route>
<Route path="/approve" component={Approve}></Route>
<Route path="/leaveform" component={LeaveForm}></Route>
<Route path="/admin" component={Admin}></Route>
<Route path="/admincomp" component={AdminComp}></Route>
<Route path="/compres" component={CompRes}></Route>
<Route path="/compform" component={CompForm}></Route>
<Route path="/comphist" component={CompHist}></Route>
<Route path="/signupadmin" component={SignupAdmin}></Route>
<Route path="/loginadmin" component={LoginAdmin}></Route>
<Route path="/selectcomp" component={SelectComp}></Route>
<Route path="/feedback" component={Feedback}></Route>
<Route path="/receipt" component={Receipt}></Route>
</Router>
,document.querySelector('#root'));