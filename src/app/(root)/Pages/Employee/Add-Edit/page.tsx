"use client";
import React from 'react'
import { useEffect, useState } from "react";

const AddEditEmployee = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fetch('/api/add-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name, Email, City })
      })

    } catch (error) {
      console.error(error)
    }

    setName('');
    setEmail('');
    setCity('');
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/add-post", {
        method: "GET",
      });
      const data = await response.json();
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="bg-white rounded shadow-lg px-4 md:p-8 mb-6">
        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-12">
            <div className='flex items-center justify-center'>
              <h1 className='font-bold py-2 px-12 text-2xl'>Employee</h1>
            </div>
            <div className="grid gap-6 gap-y-4 text-sm grid-cols-1 md:grid-cols-6">

              <div className="md:col-span-3">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  onChange={handleNameChange}
                  value={Name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  onChange={handleEmailChange}
                  value={Email}
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Address / Street</label>
                <input
                  id="address"
                  // onChange={handleAddressChange}
                  // value={address}
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  onChange={handleCityChange}
                  value={City}
                  type="text"
                  name="city"
                  placeholder="City"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">Country / Region</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    id="country"
                    // onChange={handleCountryChange}
                    // value={country}
                    name="country"
                    placeholder="Country"
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  />
                  <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="state">State / Province</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input
                    id="state"
                    // onChange={handleStateChange}
                    // value={state}
                    name="state"
                    placeholder="State"
                    className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                  />
                  <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                    <svg
                      className="w-4 h-4 mx-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  id="zipcode"
                  // onChange={handleZipcodeChange}
                  // value={zipcode}
                  type="text"
                  name="zipcode"
                  placeholder="Zipcode"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                />
              </div>
              <div className="md:col-span-6 text-center mt-12">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEditEmployee