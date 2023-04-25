import React from "react";
import Header from "./Header.js";
import Layout from "./Layout.js";
import User from "./user.js";
import Product from "./product.js";
import Role from "./role.js";
import Customer from "./customer.js";
import Arole from "./arole.js";
import Auser from "./auser.js";
import Order from "./order.js";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
 
    return (
        <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Layout}>
             <Route path="user" component={User} />
             <Route path="product" component={Product} />
             <Route path="role" component={Role} />
             <Route path="customer" component={Customer} />
             <Route path="arole" component={Arole} />
             <Route path="auser" component={Auser} />
             <Route path="order" component={Order} />
           

            </Route>
          
          </Routes>
        </BrowserRouter>


        <Header  />
        <Layout />
      
      </div>
    );
};

export default App;
        
