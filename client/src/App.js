import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyOwnNavbar from './components/dumb-components/navbar/Navbar'
import Jumbotronjs from './components/dumb-components/Jumbotron/Jumbotron'
import Messageboard from './components/dumb-components/Messageboard/MessageBoardPage'

import LoginBox from './components/dumb-components/loginbox/loginbox'
import SignupBox from './components/dumb-components/signupbox/signupbox'

import './App.css';
import LoginPage from './components/Pages/LoginPage/LoginPage'
import DashBoard from './components/Pages/DashBoard/Dashboard'
import CreateroomPage from './components/Pages/CreateroomPage'
import MessageBoard from '../src/components/dumb-components/Messageboard/MessageBoardPage'
import Profilepage from './components/Pages/ProfilePage/ProfilePage'
import BillsPage from "./components/Pages/BillsPage"

import {
  
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';


import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
//import Createroompage from './components/dumb-components/CreateRoomPage/CreateroomPage';



// class App extends Component {

const App = () => (
  <Router>
  <div>
    <Nav />
    <Route exact path="/" component={LoginPage}/>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/signup" component={Profilepage} />
    <Route exact path="/createroom" component={CreateroomPage} />
    <Route exact path="/dashboard" component={DashBoard} />
    <Route exact path="/bills" component={BillsPage} />
  </div>
</Router>

//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
       

      
     


//         </div>

        

     
//     );
//   }
// }
);


export default App;
