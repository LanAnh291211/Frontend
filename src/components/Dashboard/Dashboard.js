import { connect } from 'react-redux';
import React , { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getUsernameFromCookie } from '../../helperFunction/getCookie';

import './_dashboard.scss';

class Dashboard extends Component{

  render(){
    const logginStatus = !!getUsernameFromCookie();
    
    if(logginStatus){
      if( this.props.role === "admin"){
        return (
          <div className="dashboard-container">
          <h1>Chào mừng bạn đến với ứng dụng Quản lý  </h1>
          <p>bảng điều khiển</p>
          <h1>{this.props.username}</h1>
          
           
          <h1>Quản trị viên</h1>
        </div>
        )
      }
      else if (this.props.role === "teacher"){
        return(
          <div className="dashboard-container">
            <h1>Chào mừng bạn đến với ứng dụng Quản lý  </h1>
            <p>bảng điều khiển</p>
            <h1>{this.props.username}</h1>
            
             
            <h1>Giáo viên</h1>
          </div>
  
        )

      }

      return(
        <div className="dashboard-container">
          <h1>Chào mừng bạn đến với ứng dụng Quản lý  </h1>
          <p>bảng điều khiển</p>
          <h1>{this.props.username}</h1>
          
           
          <h1>Học sinh</h1>
        </div>

      )
    }else{
      return <Redirect to="/login" />
    }      
  }
}

const mapStateToProps = (state) =>{
  return{
    username: state.user.username,
    role: state.user.role
  }
}

export default connect(mapStateToProps)(Dashboard);
