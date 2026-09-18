import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards, addCard, deleteCard, updateCard, createOrder } from "../store/actions/clientActions";
import { setPayment, setCart, setAddress } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

function PaymentPage() {
    const dispatch = useDispatch();

    const [showCardForm, setShowCardForm] =
        useState(false);

    const [cardData, setCardData] =
        useState({
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: "",
        });

    const [selectedCard, setSelectedCard] =
        useState(null);

    const [editingCard, setEditingCard] =
        useState(null);

    const cards = useSelector(
        (state) =>
            state.client.creditCards
    );

    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );

    const address = useSelector(
        (state) =>
            state.shoppingCart.address
    );

    const payment = useSelector(
        (state) =>
            state.shoppingCart.payment
    );

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    const productsTotal = cart
        .filter((item) => item.checked)
        .reduce(
            (total, item) =>
                total +
                item.product.price *
                item.count,
            0
        );

    const shipping =
        productsTotal > 0 ? 29.99 : 0;

    const discount =
        productsTotal > 150 ? 29.99 : 0;

    const grandTotal =
        productsTotal +
        shipping -
        discount;

    const handleOrder = async () => {
        try {
            const orderData = {
                address_id: address.id,

                order_date:
                    new Date().toISOString(),

                card_no:
                    payment.card_no,

                card_name:
                    payment.name_on_card,

                card_expire_month:
                    payment.expire_month,

                card_expire_year:
                    payment.expire_year,

                card_ccv: 123,

                price: grandTotal,

                products: cart
                    .filter(
                        (item) =>
                            item.checked
                    )
                    .map((item) => ({
                        product_id:
                            item.product.id,

                        count:
                            item.count,

                        detail:
                            item.product.name,
                    })),
            };


            console.log(orderData);

            await dispatch(
                createOrder(orderData)
            );

            toast.success(
                "Your order has been created successfully!"
            );

            dispatch(setCart([]));

            dispatch(setAddress({}));

            dispatch(setPayment({}));

            setSelectedCard(null);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="mx-auto max-w-7xl p-6">
            <h1 className="mb-8 text-3xl font-bold">
                Payment Options
            </h1>

            <div className="grid gap-8 lg:grid-cols-3">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 rounded-lg border bg-white p-6 shadow-sm">

                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold">
                            Credit Cards
                        </h2>

                        {showCardForm && (
                            <div className="mb-6 rounded border p-4">
                                <div className="grid gap-3">

                                    <input
                                        placeholder="Card Number"
                                        value={cardData.card_no}
                                        onChange={(e) =>
                                            setCardData({
                                                ...cardData,
                                                card_no:
                                                    e.target.value,
                                            })
                                        }
                                        className="rounded border p-2"
                                    />

                                    <input
                                        placeholder="Expire Month"
                                        value={
                                            cardData.expire_month
                                        }
                                        onChange={(e) =>
                                            setCardData({
                                                ...cardData,
                                                expire_month:
                                                    e.target.value,
                                            })
                                        }
                                        className="rounded border p-2"
                                    />

                                    <input
                                        placeholder="Expire Year"
                                        value={
                                            cardData.expire_year
                                        }
                                        onChange={(e) =>
                                            setCardData({
                                                ...cardData,
                                                expire_year:
                                                    e.target.value,
                                            })
                                        }
                                        className="rounded border p-2"
                                    />

                                    <input
                                        placeholder="Name On Card"
                                        value={
                                            cardData.name_on_card
                                        }
                                        onChange={(e) =>
                                            setCardData({
                                                ...cardData,
                                                name_on_card:
                                                    e.target.value,
                                            })
                                        }
                                        className="rounded border p-2"
                                    />

                                    <button
                                        onClick={() => {
                                            if (editingCard) {
                                                dispatch(
                                                    updateCard(cardData)
                                                );

                                                setEditingCard(null);
                                            } else {
                                                dispatch(
                                                    addCard(cardData)
                                                );
                                            }

                                            setShowCardForm(
                                                false
                                            );

                                            setEditingCard(null);

                                            setCardData({
                                                card_no: "",
                                                expire_month:
                                                    "",
                                                expire_year:
                                                    "",
                                                name_on_card:
                                                    "",
                                            });
                                        }}
                                        className="rounded bg-green-600 py-2 text-white"
                                    >
                                        {editingCard
                                            ? "Update Card"
                                            : "Save Card"}
                                    </button>

                                </div>
                            </div>
                        )}

                        {!showCardForm && (
                            <button
                                onClick={() =>
                                    setShowCardForm(true)
                                }
                                className="rounded bg-[#23A6F0] px-4 py-2 text-white"
                            >
                                Add New Card
                            </button>
                        )}
                    </div>

                    {cards.length === 0 ? (
                        <p className="text-gray-500">
                            No saved cards found.
                        </p>
                    ) : (
                        <div className="grid gap-4 md:grid-cols-2">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    onClick={() => {
                                        setSelectedCard(card.id);

                                        dispatch(
                                            setPayment(card)
                                        );
                                    }}
                                    className={`cursor-pointer rounded-lg border p-4 transition ${selectedCard ===
                                        card.id
                                        ? "border-orange-500 bg-orange-50"
                                        : "hover:border-gray-400"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        checked={
                                            selectedCard ===
                                            card.id
                                        }
                                        readOnly
                                    />

                                    <h3 className="mt-2 text-lg font-bold">
                                        {card.name_on_card}
                                    </h3>

                                    <p className="mt-3 text-xl tracking-wider">
                                        **** **** **** {card.card_no.slice(-4)}
                                    </p>

                                    <p className="mt-2 text-sm text-gray-500">
                                        Exp: {card.expire_month.toString().padStart(2, "0")} / {card.expire_year}
                                    </p>

                                    <div className="mt-4 flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();

                                                setEditingCard(
                                                    card.id
                                                );

                                                setShowCardForm(true);

                                                setCardData(card);
                                            }}
                                            className="rounded bg-yellow-500 px-3 py-1 text-white"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();

                                                dispatch(
                                                    deleteCard(card.id)
                                                );
                                            }}
                                            className="rounded bg-red-500 px-3 py-1 text-white"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                            />

                            <span>
                                Pay with 3D Secure
                            </span>
                        </label>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="h-fit rounded-lg border bg-white p-6 shadow-sm">

                    <h2 className="mb-6 text-2xl font-bold">
                        Order Summary
                    </h2>

                    <div className="mb-4 flex justify-between">
                        <span>Products</span>

                        <span>
                            $
                            {productsTotal.toFixed(
                                2
                            )}
                        </span>
                    </div>

                    <div className="mb-4 flex justify-between">
                        <span>Shipping</span>

                        <span>
                            $
                            {shipping.toFixed(2)}
                        </span>
                    </div>

                    <div className="mb-4 flex justify-between">
                        <span>Discount</span>

                        <span>
                            -$
                            {discount.toFixed(2)}
                        </span>
                    </div>

                    <hr className="my-4" />

                    <div className="mb-6 flex justify-between text-2xl font-bold">
                        <span>Total</span>

                        <span>
                            $
                            {grandTotal.toFixed(2)}
                        </span>
                    </div>

                    <button
                        onClick={handleOrder}
                        disabled={!selectedCard}
                        className={`w-full rounded py-3 font-bold text-white ${selectedCard
                            ? "bg-orange-500"
                            : "cursor-not-allowed bg-gray-400"
                            }`}
                    >
                        Pay Now
                    </button>

                </div>

            </div>
        </div>
    );
}

export default PaymentPage;