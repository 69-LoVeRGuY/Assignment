import React, { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [authUser, setauthUser] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    
    const value = {
        authUser,
        isLoggedIn,
        setauthUser,
        setIsLoggedIn
    };

    return( 
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}