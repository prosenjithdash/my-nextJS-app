import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ">
            <div className="relative w-full h-52 object-contain">
                <Image
                    src={product.image}
                    alt={product.productName}
                    width={1500}
                    height={800}
                    className="rounded-lg h-56"
                />
            </div>
            <div className="p-6 ">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl">{product.productName}</h2>

                    <span className="ml-4 bg-blue-100 text-blue-800 text-xl tracking-wide  px-3 rounded-lg">
                        {product.category}
                    </span>

                </div>
                <p className="text-sm text-gray-600 mb-4">
                    Brand:<span className="font-medium">{product.brand}</span>
                </p>
                {/* <p className="text-xl font-bold text-blue-600 mt-4">{ }</p> */}
                <div className="flex justify-between">
                    <Link href={`/product/${product.id}`} className="bg-black text-white py-2 px-5 rounded-lg transition-all">
                    See Details
                    </Link>
                    <button className="bg-black text-white py-2 px-5 rounded-xl transition-all">Buy Now</button>
                </div>
                

            </div>
        </div>
    )
}

