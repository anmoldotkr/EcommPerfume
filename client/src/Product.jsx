import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // Fetch the products from the API
        axios.get("http://localhost:5000/products") // Use your API endpoint here
            .then(response => {
                setProducts(response.data);
                setLoading(false); // Stop loading once data is fetched
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setLoading(false); // Stop loading even if there's an error
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> // Display loading message while loading is true
            ) : (
                <div>
                    {products.map(product => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

// Product component to display individual product details
const Product = ({ product }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.text}</p>
            <p>Price: ${product.price}</p>
            <a href={product.href}>Buy Now</a>
        </div>
    );
};

export default App;
