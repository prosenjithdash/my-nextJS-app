import React from 'react';

const DynamicProductPage = async ({ params, searchParams }) => {
    const productId = await params.productId;
    console.log(await searchParams)

    return (
        <div>
            <h1 className='text-2xl text-center '>It's a Dynamic Product Page { productId}</h1>
        </div>
    );
};

export default DynamicProductPage;