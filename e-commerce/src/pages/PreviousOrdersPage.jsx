import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/actions/clientActions";
import { Redirect } from "react-router-dom";

function PreviousOrdersPage() {
    const dispatch = useDispatch();

    const [openOrder, setOpenOrder] = useState(null);

    const orders =
        useSelector(
            (state) =>
                state.client
                    .orderList
        );
    const user = useSelector(
        (state) => state.client.user
    );

    const token =
        localStorage.getItem("token");

    if (!token && !user?.email) {
        return <Redirect to="/login" />;
    }

    useEffect(() => {
        dispatch(
            fetchOrders()
        );
    }, [dispatch]);

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-6 text-3xl font-bold">
                Previous Orders
            </h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="rounded-lg border bg-white p-4 shadow-sm"
                    >
                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="font-bold">
                                    Order #{order.id}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {new Date(
                                        order.order_date
                                    ).toLocaleDateString()}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="font-bold">
                                    ${order.price}
                                </p>

                                <button
                                    onClick={() =>
                                        setOpenOrder(
                                            openOrder === order.id
                                                ? null
                                                : order.id
                                        )
                                    }
                                    className="mt-2 rounded bg-[#23A6F0] px-3 py-1 text-white"
                                >
                                    {openOrder ===
                                        order.id
                                        ? "Hide Details"
                                        : "Show Details"}
                                </button>
                            </div>
                        </div>

                        {openOrder ===
                            order.id && (
                                <div className="mt-4 border-t pt-4">
                                    {order.products.map(
                                        (product) => (
                                            <div
                                                key={
                                                    product.id
                                                }
                                                className="mb-4 flex gap-4"
                                            >
                                                <img
                                                    src={
                                                        product
                                                            .images?.[0]
                                                            ?.url
                                                    }
                                                    alt={
                                                        product.name
                                                    }
                                                    className="h-20 w-20 rounded object-cover"
                                                />

                                                <div>
                                                    <h4 className="font-semibold">
                                                        {
                                                            product.name
                                                        }
                                                    </h4>

                                                    <p>
                                                        Quantity:
                                                        {" "}
                                                        {
                                                            product.count
                                                        }
                                                    </p>

                                                    <p>
                                                        Price:
                                                        {" "}
                                                        $
                                                        {
                                                            product.price
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreviousOrdersPage;