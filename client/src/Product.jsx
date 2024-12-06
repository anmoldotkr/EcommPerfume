import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";
import BackgroundDesginComp from "./components/BackgroundDesginComp.jsx";
import './loader/index.css'
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []); // Fetch products when the component mounts

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:5000/api/allproducts`);
            const newProducts = response.data || []; // Assuming response.data is the array of products

            // delayig to show all the products 
            setTimeout(()=>{
                setProducts(newProducts);
                // now loading to false 
                setLoading(false)
        },3000)
        } catch (error) {
            console.error("Error fetching products:", error);
            setError("Failed to load products. Please try again later."); // Set error message
        }
    };

    return (
        <div>
            <Navbar />
            <BackgroundDesginComp />
            <div className="container mx-auto px-2 py-5">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-extrabold text-2xl">All Time Favourite's</h1>
                    <p className="text-center font-medium text-gray-600 max-w-screen-md mx-auto leading-7 m-5 capitalize">
                        Shop our All Time Favourite perfume collection's
                    </p>
                </div>
                {/* Display loading message */}
                {loading && 
                    <div className="loader-container">
                        <div className="loader">
                        </div>
                    </div>
                }
                {/* Display error message */}
                {error && <div className="error-message">{error}</div>}
                {/* Display products */}
                <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-w-screen-lg mx-auto">
                    {products.map((product) => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductItem = ({ product }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-3 mx-3">
            <a href="#">
                <img className="rounded-t-lg h-[55vh] w-full" src={product.href} alt={product.name} />
            </a>
            <div className="p-5 tracking-wide">
                <a href="#">
                    <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.text}.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ${product.price}
                </a>
            </div>
        </div>
    );
};

export default ProductList;