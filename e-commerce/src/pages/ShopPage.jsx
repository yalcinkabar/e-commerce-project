import { useState, useEffect } from "react";
import api from '../api/axios'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import FilterBar from "../components/FilterBar";
import ShopPagination from "../components/ShopPagination";
import BrandLogos from "../components/BrandLogos";

function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    const { categoryId } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(
        (state) => state.product.productList
    );

    const fetchState = useSelector(
        (state) => state.product.fetchState
    );

    const categories = useSelector(
        (state) => state.product.categories
    );

    const productsPerPage = 12;

    const offset =
        (currentPage - 1) * productsPerPage;

    useEffect(() => {
        dispatch(
            fetchProducts({
                category: categoryId,
                sort,
                filter,
                limit: productsPerPage,
                offset,
            })
        );
    }, [
        dispatch,
        categoryId,
        sort,
        filter,
        currentPage,
    ]);


    const total = useSelector(
        (state) => state.product.total
    );

    const totalPages = Math.ceil(
        total / productsPerPage
    );

    const topCategories = [...categories]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);


    if (fetchState === "FETCHING") {
        return (
            <div className="flex justify-center py-20">
                <div className="text-xl font-bold">
                    Loading...
                </div>
            </div>
        );
    }
    const productGrid = (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
                <Link
                    key={product.id}
                    to={`/shop/${product.category_id < 9
                            ? "kadin"
                            : "erkek"
                        }/${product.name
                            .toLowerCase()
                            .replaceAll(" ", "-")
                            .replaceAll("ı", "i")
                            .replaceAll("ş", "s")
                            .replaceAll("ç", "c")
                            .replaceAll("ğ", "g")
                            .replaceAll("ü", "u")
                            .replaceAll("ö", "o")
                        }/${product.category_id
                        }/${product.name
                            .toLowerCase()
                            .replaceAll(" ", "-")
                            .replaceAll("ı", "i")
                            .replaceAll("ş", "s")
                            .replaceAll("ç", "c")
                            .replaceAll("ğ", "g")
                            .replaceAll("ü", "u")
                            .replaceAll("ö", "o")
                        }/${product.id
                        }`}
                        className="cursor-pointer transition duration-300 hover:scale-105"
                >
                    <ProductCard
                        image={product.images?.[0]?.url}
                        title={product.name}
                        category="Product"
                        oldPrice={product.price}
                        newPrice={product.price}
                    />
                </Link>
            ))}
        </div>
    );

    return (
        <>
            <section className="bg-[#FAFAFA] px-6 py-10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 lg:flex-row">
                    <h1 className="text-3xl font-bold text-[#252B42]">
                        Shop
                    </h1>

                    <div className="flex items-center gap-2 text-sm font-bold">
                        <span className="text-[#252B42]">Home</span>
                        <span className="text-[#BDBDBD]">{">"}</span>
                        <span className="text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-5">
                {topCategories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        image={category.img}
                        title={category.title}
                        count={category.rating}
                    />
                ))}
            </section>

            <section>
                <FilterBar
                    sort={sort}
                    setSort={setSort}
                    filter={filter}
                    setFilter={setFilter}
                />
            </section>

            <section>{productGrid}</section>

            <section>
                <ShopPagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </section>

            <section>
                <BrandLogos />
            </section>
        </>
    );
}

export default ShopPage;