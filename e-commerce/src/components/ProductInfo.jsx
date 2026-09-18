import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

function ProductInfo({ product }) {
    const dispatch = useDispatch();
    return (
        <section className="space-y-4 p-6">
            <h1 className="text-2xl font-bold text-[#252B42]">
                {product.name}
            </h1>

            <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-[#737373]">
                    10 Reviews
                </span>
            </div>

            <p className="text-2xl font-bold text-[#252B42]">
                ${product.price}
            </p>

            <div className="flex items-center gap-2">
                <span className="font-bold text-[#737373]">
                    Availability :
                </span>

                <span className="font-bold text-[#23A6F0]">
                    In Stock
                </span>
            </div>

            <p className="max-w-md text-[#858585]">
                {product.description}
            </p>

            <hr />

            <div className="flex gap-3">
                <span className="h-6 w-6 rounded-full bg-[#23A6F0]"></span>
                <span className="h-6 w-6 rounded-full bg-[#2DC071]"></span>
                <span className="h-6 w-6 rounded-full bg-[#E77C40]"></span>
                <span className="h-6 w-6 rounded-full bg-[#252B42]"></span>
            </div>

            <div className="flex flex-wrap gap-3">
                <button className="rounded bg-[#23A6F0] px-6 py-3 font-bold text-white">
                    Select Options
                </button>

                <button className="rounded border p-3">
                    ❤
                </button>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));

                        toast.success(
                            "Product added to cart!"
                        );
                    }}
                    className="rounded border p-3 transition hover:bg-[#23A6F0] hover:text-white"
                >
                    🛒
                </button>

                <button className="rounded border p-3">
                    👁
                </button>
            </div>
        </section>
    );
}

export default ProductInfo;