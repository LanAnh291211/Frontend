import React , { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authenticate from './Authenticate';
// import Cookies from 'universal-cookie';


import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage';
import SignUpPage from '../components/SignUpPage';
import AddStudentPage from '../components/AddStudentPage';
import AddTeacherPage from '../components/AddTeacherPage';
import AttendancePage from '../components/AttendancePage';
import MessagePage from '../components/MessagePage';
import Help from '../components/Help'

const AuthHelp = Authenticate(Help)

class AppRouter extends Component{

  

  render() {
    return (
      <BrowserRouter>
        <div >
          <Sidebar />
          <Switch>
            <Route path="/" component={Dashboard} exact={true} />>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/help" render={ (routeProps)=>(<AuthHelp requiredRole="teacher" {...routeProps} />) } />
            <Route path="/attendance" component={ AttendancePage } />
            <Route path="/message" component={ MessagePage } />
            <Route path="/addTeacher" component={ AddTeacherPage } />
            <Route paht="/addStudent" component={ AddStudentPage } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;