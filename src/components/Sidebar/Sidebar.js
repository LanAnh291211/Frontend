import React from 'react'
import { connect } from 'react-redux'
import AfterSigninLinks from '../AfterSigninLinks'
import BeforeSigninLinks from '../BeforeSigninLinks'

import './_sidebar.scss'

const Sidebar = (props) => {

  return (
    <div className="sidepane">
         <div className="sidepaneLogo">
           <h1>Quản lý App</h1>
        </div>
                
      <div>
        {
        !props.username ? 
        (
          <BeforeSigninLinks />
        ) : 
        (
            <AfterSigninLinks />
        )}
      </div>
    </div>


  )
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username 
  };
};

export default connect(mapStateToProps)(Sidebar);