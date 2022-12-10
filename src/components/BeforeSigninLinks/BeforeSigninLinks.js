import React from 'react'
import { NavLink } from 'react-router-dom';

import './_beforeSigninLinks.scss'

const BeforeSigninLinks = () => (
      <div className="BeforeSigninLinks__wrapper">
        <button className=" button"><NavLink to="/login">Đăng nhập</NavLink></button>
        <button className="button"><NavLink to="/signup">Đăng ký</NavLink></button>
        <button className="button"><NavLink to="/help">Giúp đỡ</NavLink></button>
      </div> 
      
);
export default BeforeSigninLinks;
