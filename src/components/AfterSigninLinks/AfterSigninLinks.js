import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import logout from '../../helperFunction/logout';
import './_afterSigninLinks.scss';

import { getRoleFromCookie } from '../../helperFunction/getCookie';


class AfterSigninLinks extends Component {
    render() {
        const userRole = getRoleFromCookie();
        return ( <div className = "after-signin-nav" >
            <div className = "user-profile-div" >
            <a href = "/"
            className = "user-image" >
            <img src = "https://i.ibb.co/bgWRkwb/nguyenthilananh.jpg"
            alt = "User" />

            </a> 
            <p className = "username" > Nguyen Thi Lan Anh </p>
             </div> <div className = "sidepane-nav" >
            <div className = 'navigation' > {
                userRole === 'student' &&
                <React.Fragment >
                <Link to = "/enroll"
                className = 'navigation-item' > Đăng ký khóa học </Link> <Link to = "/showAttendance"
                className = 'navigation-item' > Hiển thị tham dự </Link> { /* <Link to="/attendance" className='navigation-item'>Attendance</Link> */ } </React.Fragment>
            } {
                userRole === 'teacher' &&
                    <React.Fragment >
                    <Link to = "/attendance"
                className = 'navigation-item' > Tham gia </Link> <Link to = "/showAttendance"
                className = 'navigation-item' > Đã tham gia </Link> <Link to = "/message"
                className = "navigation-item" > Tin nhắn </Link> </React.Fragment>
            } {
                userRole === 'admin' &&
                    <React.Fragment >
                    <Link to = "/department"
                className = "navigation-item" > Thêm bộ phận </Link> <Link to = "/addCourse"
                className = "navigation-item" > Thêm khóa học </Link> <Link to = "/addTeacher"
                className = "navigation-item" > Thêm giáo viên </Link> <Link to = "/addStudent"
                className = "navigation-item" > Thêm sinh viên </Link> <Link to = "/showTeachers"
                className = "navigation-item" > Danh sách giáo viên </Link> <Link to = "/showCourses"
                className = "navigation-item" > Danh sách lớp học  </Link> <Link to = "/message"
                className = "navigation-item" > Tin nhắn </Link> </React.Fragment>
            } <a href = "/"
            className = 'navigation-item'
            onClick = { logout } > Đăng xuất </a> </div> </div> </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username,
        userRole: state.user.role
    }
}

export default connect(mapStateToProps)(AfterSigninLinks);