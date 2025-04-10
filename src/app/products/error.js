"use client"
const ErrorPage = ({error, reset }) => {
    return (
        <div>
            <h1 className="text-center text-red-500 text-2xl mt-[400px]">Something went wrong ! </h1>
            <p className="text-center text-red-500 text-2xl mt-[40px]">{error.message}</p>
            <div className="text-center mt-5">
                 <button onClick={()=>reset()} className="bg-red-800 text-white py-2 px-5 rounded-xl transition-all">Try Again</button>
        </div>

        </div>
    );
};

export default ErrorPage;