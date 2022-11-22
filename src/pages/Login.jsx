import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {

  const navigate = useNavigate()
    const [email , setEmail] =useState('')
    const [password , setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
            
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }


  return (
    <>
    <div className='w-full h-screen' >
        <img className='hidden sm:block absolute w-full h-full object-cover'  src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/d2e8fa91-c948-412f-b377-b9d9b9f2aa3f/AR-es-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='/' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50' >
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white' >
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'> Sign In </h1>
                    {error ? <p className='p-3 bg-red-400 my-2'> {error} </p> : null}
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input 
                          onChange={(e) => setEmail(e.target.value)}
                          className='p-3 my-2 bg-gray-500 rounded'
                          type='email' 
                          placeholder='email' 
                          autoComplete='email' 
                        />
                        <input
                        onChange={(e) => setPassword(e.target.value)} 
                          className='p-3 my-2 bg-gray-500 rounded'
                          type='password' 
                          placeholder='password' 
                          autoComplete='current-password' 
                        />
                        <button 
                            className='bg-red-600 py-3 my-6 font-bold rounded'
                        >      
                            Sign In 
                        </button>
                        <div 
                            className='flex justify-between items-center text-sm text-gray-600' 
                        >
                            <p> 
                                <input 
                                    className='mr-2' type="checkbox"  /> 
                                    Remember me  
                            </p>
                            <p> Need Help? </p>
                        </div>
                        <p className='py-8'> 
                            <span className='text-gray-600'> 
                                New to Netflix? 
                            </span> {' '}
                            <Link to='/signUp'>
                                Sign Up 
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login