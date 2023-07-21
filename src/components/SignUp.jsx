import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { toast } from 'react-toastify';

import cartContext from '../cartContext';

function SignUp() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState('');


    const navigate = useNavigate();


    const handleSignUp = (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setIsPasswordMatch('Password Not Match');
          return;
        }else{
          setIsPasswordMatch('');
        }
    
        
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                password: password
              })
                .then(() => {
                  toast.success('Signup successful!');
                  navigate('/');
                })
                .catch((error) => {
                  console.log('Error updating profile:', error);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              toast.error('Error: ' + errorMessage);
            });
      };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-center">Create a New Account</h1>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <label
                                            htmlFor="name"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Email address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            autoComplete="off"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        {isPasswordMatch && <p className="text-center text-red-500 text-sm">Password Is Not Match</p>}
                                        <label
                                            htmlFor="confirmPassword"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                            Confirm Password
                                        </label>
                                    </div>
                                    <div className="flex gap-1">
                                        <p className="text-black text-[.9rem]">Already have an account?</p>
                                        <Link to="/login" className="text-blue-600 text-[.9rem]">Login</Link>
                                    </div>
                                    <div className="relative">
                                        <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
