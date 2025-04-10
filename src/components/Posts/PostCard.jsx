import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className=' p-[15px] border-4 border-red-600 rounded-3xl'>
            <h1>Id: {post.id }</h1>
            <h2 className='text-2xl font-bold'> {post.title}</h2>
            <p className='text-gray-600'> { post.body}</p>
        </div>
    );
};

export default PostCard;