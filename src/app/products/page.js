import ProductCard from "@/components/Products/ProductCard";
import Link from "next/link";

const AllProductsPage = async () => {
    const res = await fetch("http://localhost:8000/products", {
        cache:'no-store'
    });
    const products = await res.json();
    console.log(products)
    return (
        <div>
            <h1 className='text-2xl text-center '>All Products Page.</h1>

            <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-10">
                {
                    products.map(product=> <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
              <div className='text-center my-20'>
        <Link href='/' className="bg-black text-white py-2 px-5 rounded-lg transition-all ">
                    Home
                    </Link>
       </div>
        </div>
    );
};

export default AllProductsPage;