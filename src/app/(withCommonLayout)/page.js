// It's use for client side but data fetching not to work client side so  created server file.

// "use client"

// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import React from 'react';

// const HomePage =  () => {
 

//   const router = useRouter();

//   const handleNavigation = () => {
//     router.push('/dashboard');
//   }


//   return (
//     <div className='text-center my-10'>
//       <h1 className='text-4xl'>Hello from Home Page. </h1>
//       {/* <Link href='/dashboard'> <button className='my-5'>Dashboard</button>
// </Link> */}
      
//             <button onClick={handleNavigation} className='my-5'>Dashboard</button>

//     </div>
//   );
// };

// export default HomePage;








// Data fetching with server condition main

// const HomePage = async() => {
//    const res = await fetch('http://localhost:8000/products');
//   const products = await res.json();
//   console.log(products)
//   return (
//     <div>
//       <h1 className="text-center text-4xl my-5">
//         Data Fetching, Caching, and Revalidating
//         </h1>
//     </div>
//   );
// };

// export default HomePage;




import ProductCard from '@/components/Products/ProductCard';
import React from 'react';

const HomePage = async () => {
  const res = await fetch('http://localhost:8000/products', {
    // cache:"force-cache",
    next: {
      revalidate:5
    }
  });
   const products = await res.json();
   console.log(products)
  return (
    <div>
      <h1 className="text-center text-4xl my-5">
        Data Fetching, Caching, and Revalidating.....
      </h1>

      <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto my-10'>
        {
          products.map(product => <ProductCard key={product.id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default HomePage;