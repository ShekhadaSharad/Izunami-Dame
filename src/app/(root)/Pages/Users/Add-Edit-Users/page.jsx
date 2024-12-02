"use client";
import { useEffect, useState } from "react";

export default function PostsPage(){
  const [name, setTitle] = useState('');
  const [email, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNameChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    setContent(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        await fetch('/api/add-post', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email}) })
            
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/add-post", {
        method: "GET",
      });
      const data = await response.json();
      setPosts(data.users);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return(
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
      </ul>
      <form  onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-[300px]">
            <input className="px-2 py-1 rounded-sm" id="name"  onChange={handleNameChange} value={name}  type="text" name="name" placeholder="Name"></input>
            <input className="px-2 py-1 rounded-sm" id="email" onChange={handleEmailChange} value={email} type="email" name="email" placeholder="Email"></input>
            <button className="bg-blue-500 py-2 text-white rounded-sm" type="submit">Create Post</button>
      </form>
    </main>
  )
} 