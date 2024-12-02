'use client';
import React, { useState } from "react";
import Link from "next/link";
// import { authOptions } from "@/app/api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth"

export default function Signup() {


  // const session = getServerSession(authOptions);
  // console.log("Session ---------------------------->", session)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.cPassword) {
      setError("Passwords do not match");
      return;
    }
    setError('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      });
      const data = await response.json();
      if (response.ok) {
        alert('Account created successfully');
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred');
    }
  };

  return (
    <div className="flex justify-center mt-16">
      <div style={{ minWidth: "30%" }}>
        <div className="shadow-lg flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <label htmlFor="cPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  id="cPassword"
                  name="cPassword"
                  type="password"
                  required
                  value={formData.cPassword}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already registered?{' '}
              <Link href="/login">
                <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
