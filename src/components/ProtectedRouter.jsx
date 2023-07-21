import React, { useContext } from 'react'
import cartContext from '../cartContext';
import { Navigate } from 'react-router-dom';

function ProtectedRouter({ children }) {
    const { user } = useContext(cartContext);
    if (user) {
        return children
    } else {
        return <Navigate to="/signup" />
    }
    
}

export default ProtectedRouter