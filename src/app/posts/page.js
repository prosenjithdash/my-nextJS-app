import PostCard from '@/components/Posts/PostCard';
import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const PostsPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        next: {
            revalidate:30,
        }
    });
    const posts = await res.json();

    // console.log(posts)
    return (
        <div className='m-10'>
            <h1 className='text-3xl text-center pb-5'>
                All Posts
            </h1>

            <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto' >
                {
                    posts.map((post) => <PostCard key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default PostsPage;