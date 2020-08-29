import React, {createContext, useState} from 'react';

export const AuthContext=createContext();

const AuthContextProvider = (props) => {

    const [authDetails,onAuthChange]=useState({loggedInUser:null});
    
    return(
        <AuthContext.Provider value={{...authDetails,onAuthChange}}>
        {props.children}
        </AuthContext.Provider>
    )

};

export default AuthContextProvider;