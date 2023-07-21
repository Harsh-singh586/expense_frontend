import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../settings';

async function getUser(cred) {
    var data = await axios.get('http://localhost:5000/auth/login/success')
    return data.data
}

export default function Login() {

    const { data, error } = useQuery({ queryKey: ['login-user'], queryFn: getUser, retry: false })
    const navigate = useNavigate()

    const google = () => {
        let url = baseUrl + "/auth/google"
        window.open(url, "_self");
    };

    console.log('-----------', data)

    if (data?.success) {
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('profile_picture', data.user.profile_picture)
        navigate('dashboard')
    }


    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-3/4 space-y-10'>
                <h1 className='font-bold text-2xl'>Welcome to Expense Tracker</h1>
                <h2>Are you tired of manually tracking your expenses? With our powerful expense management software, you can easily track, categorize, and analyze your spending in one place. Say goodbye to messy spreadsheets and hello to streamlined expense management.</h2>
                <button className="h-10 text-white text-left pl-4 w-36 rounded-md bg-blue-500" onClick={google}>Login</button>
            </div>
        </div>

    );
}