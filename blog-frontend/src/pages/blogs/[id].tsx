import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Blog } from '@/types/common';

const BlogPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${id}`);
        if(!response.ok){
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data.data);
      } catch (error){
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id])

  console.log(blog);
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>{error}</div>
  }

  return (
    <div>
      {blog ? (
        <>
        <h1>Hello</h1>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        </>
      ) : (
        <div>Blog not found</div>
      )}
      
    </div>
  );
};

export default BlogPage;