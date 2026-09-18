import { useEffect, useState } from "react";
import api from "../api/axios";
import ProductCard from "./ProductCard";

function BestsellerProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products")
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="mb-10 text-center text-3xl font-bold text-[#252B42]">
                BESTSELLER PRODUCTS
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.slice(0, 8).map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.images?.[0]?.url}
                        title={product.name}
                        category="Product"
                        oldPrice={product.price}
                        newPrice={product.price}
                    />
                ))}
            </div>
        </section>

    );
}

export default BestsellerProducts;