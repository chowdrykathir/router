import React from 'react';
import { Outlet,Link } from 'react-router-dom';
const Layout =() => {
    return (
        <div>
          <div className="layout">
            <ul>
              <li>
               <Link to ="/user">User</Link>
              </li>
              <li>
               <Link to ="/product">Product</Link>
              </li>
              <li>
                <Link to ="/role">Role</Link>
              </li>
              <li>
                <Link to ="/customer">Customer</Link>
              </li>
              <li>
                <Link to ="/arole">Arole</Link> 
              </li>
             <li>
                <Link to ="/auser">Auser</Link>
             </li>
           </ul>
            <Outlet />
           
          </div>
        
        </div>
    );
};

export default Layout;