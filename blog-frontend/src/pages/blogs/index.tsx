
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Blog } from '@/types/common';

const index = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
                if(!response.ok){
                    throw new Error('Failed to fetch blogs.');
                }
                const data = await response.json();
                setBlogs(data.data);
            } catch (error){
                setError(error instanceof Error ? error.message : 'Unknown error')
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default index