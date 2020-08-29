import React,{useContext} from 'react';
import {AuthContext} from '../Contexts/AuthContext';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import ProductContextProvider from '../Contexts/ProductContext';

const MainScreen = () => {

    const AuthData=useContext(AuthContext);
    const {loggedInUser}=AuthData;

    return(
    <div>
    {
     (loggedInUser===null)?(<LoginForm/>):(
         <ProductContextProvider>
         <Dashboard/>
         </ProductContextProvider>
        )
    }
    </div>)
};

export default MainScreen;