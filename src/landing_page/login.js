import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

async function getUser(cred) {
    var data = await axios.post('http://localhost:3001/login', { token: cred.credential })
    return data.data
}

export default function Login() {

    const navigate = useNavigate()

    const [cred, setCred] = useState(null)
    const { isLoading, isError, data, error, refetch } = useQuery(['getuser', cred], () => getUser(cred), { enabled: cred ? true : false })

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard')
        }
        else if (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
            localStorage.setItem('email', data.email);
            localStorage.setItem('username', data.username);
            localStorage.setItem('profile_picture', data.profile_picture);
            navigate('/dashboard')
        }
    })



    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-3/4 space-y-10'>
                <h1 className='font-bold text-2xl'>Welcome to Expense Tracker</h1>
                <h2>Are you tired of manually tracking your expenses? With our powerful expense management software, you can easily track, categorize, and analyze your spending in one place. Say goodbye to messy spreadsheets and hello to streamlined expense management.</h2>
                <GoogleOAuthProvider clientId='1058138316809-qa06lskk2t7id9j0ccefl3cjeo5nt73b.apps.googleusercontent.com'>
                    <GoogleLogin onSuccess={cred => {
                        console.log('cred', cred)
                        setCred(cred)

                    }}
                        onError={() => {
                            console.log('error')
                        }}
                        shape='rectangle'
                        logo_alignment='center'
                        width='500'
                    ></GoogleLogin>
                </GoogleOAuthProvider>
            </div>
        </div>

    );
}