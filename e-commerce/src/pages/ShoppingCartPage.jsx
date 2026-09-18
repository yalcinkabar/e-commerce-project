import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    increaseCartItem,
    decreaseCartItem,
    removeCartItem,
    toggleCartItem,
} from "../store/actions/shoppingCartActions";

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );

    const totalAmount = cart
        .filter((item) => item.checked)
        .reduce(
            (total, item) =>
                total +
                item.product.price *
                item.count,
            0
        );

    const shipping =
        totalAmount > 0 ? 29.99 : 0;

    const discount =
        totalAmount > 150 ? 29.99 : 0;

    const grandTotal =
        totalAmount +
        shipping -
        discount;

    return (
        <div className="mx-auto max-w-7xl p-6 min-h-screen">
            <h1 className="mb-6 text-3xl font-bold">
                Shopping Cart
            </h1>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Products */}
                <div className="lg:col-span-2">
                    {cart.map((item) => (
                        <div
                            key={
                                item.product.id
                            }
                            className="mb-4 flex items-center gap-4 rounded-lg border bg-white p-4 shadow-sm"
                        >
                            <input
                                type="checkbox"
                                checked={
                                    item.checked
                                }
                                onChange={() =>
                                    dispatch(
                                        toggleCartItem(
                                            item
                                                .product
                                                .id
                                        )
                                    )
                                }
                            />

                            <img
                                src={
                                    item.product
                                        .images?.[0]
                                        ?.url
                                }
                                alt={
                                    item.product
                                        .name
                                }
                                className="h-24 w-24 object-cover"
                            />

                            <div className="flex-1">
                                <h2 className="font-bold">
                                    {
                                        item
                                            .product
                                            .name
                                    }
                                </h2>

                                <div className="mt-2 flex items-center gap-2">
                                    <button
                                        onClick={() =>
                                            dispatch(
                                                decreaseCartItem(
                                                    item
                                                        .product
                                                        .id
                                                )
                                            )
                                        }
                                        className="rounded border px-2"
                                    >
                                        -
                                    </button>

                                    <span>
                                        {
                                            item.count
                                        }
                                    </span>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                increaseCartItem(
                                                    item
                                                        .product
                                                        .id
                                                )
                                            )
                                        }
                                        className="rounded border px-2"
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                removeCartItem(
                                                    item
                                                        .product
                                                        .id
                                                )
                                            )
                                        }
                                        className="ml-4 rounded border border-gray-200 px-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
                                    >
                                        🗑
                                    </button>
                                </div>

                                <p className="mt-2 font-semibold">
                                    $
                                    {
                                        item
                                            .product
                                            .price
                                    }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="h-fit rounded-lg border bg-white p-6 shadow-sm">
                    <h2 className="mb-4 text-xl font-bold">
                        Order Summary
                    </h2>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>
                                Products
                            </span>

                            <span>
                                $
                                {totalAmount.toFixed(
                                    2
                                )}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>
                                Shipping
                            </span>

                            <span>
                                $
                                {shipping.toFixed(
                                    2
                                )}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>
                                Discount
                            </span>

                            <span>
                                -$
                                {discount.toFixed(
                                    2
                                )}
                            </span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-lg font-bold">
                            <span>
                                Total
                            </span>

                            <span>
                                $
                                {grandTotal.toFixed(
                                    2
                                )}
                            </span>
                        </div>
                    </div>

                    <button onClick={() =>
                        history.push("/create-order")
                    } className="mt-6 w-full rounded bg-[#23A6F0] py-3 font-bold text-white">
                        Create Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCartPage;