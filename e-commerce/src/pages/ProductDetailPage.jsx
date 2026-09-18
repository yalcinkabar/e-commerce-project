import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import BestsellerProducts from "../components/BestsellerProducts";
import BrandLogos from "../components/BrandLogos";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import { useHistory } from "react-router-dom";

function ProductDetailPage() {

    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    const product = useSelector(
        (state) => state.product.selectedProduct
    );

    const fetchState = useSelector(
        (state) => state.product.fetchState
    );

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    if (
        fetchState === "FETCHING" ||
        !product
    ) {
        return (
            <div className="flex justify-center py-20">
                <h1 className="text-2xl font-bold">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <>
            <section className="mx-auto max-w-7xl p-6">
                <button
                    onClick={() => history.goBack()}
                    className="mb-6 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                >
                    ← Back
                </button>

                <div className="grid gap-10 lg:grid-cols-2">
                    <ProductGallery product={product} />
                    <ProductInfo product={product} />
                </div>
            </section>
            <ProductTabs />
            <BestsellerProducts />
            <BrandLogos />
        </>
    );

}

export default ProductDetailPage;