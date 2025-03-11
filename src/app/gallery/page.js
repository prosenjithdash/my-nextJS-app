import Image from 'next/image';
import React from 'react';
import nextImg from "../../assets/nextjs-img.png"
const GalleryPage = () => {
    return (
        <div className='text-center'>

            <h1>Regular Image Tag.</h1>
            <img className='mx-auto' src='https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png'
                alt='next image'
                width={500}
                height={500} />
            
            <h1>NextJS Image Component.</h1>
            <Image className='mx-auto' src='https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png'
                alt='next image'
                width={500}
                height={500}
            />

            <h1>Local Image Component.</h1>
            <Image className='mx-auto' src={nextImg}
                alt='next image'
                width={500}
                height={500}
            />
        </div>
    );
};

export default GalleryPage;