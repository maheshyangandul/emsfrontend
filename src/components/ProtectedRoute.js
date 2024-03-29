import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const navigate = useNavigate();
    const {Component} = props;
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
    })
    return (
        <div><Component /></div>
    )
}

export default ProtectedRoute