import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import {
    fetchAddresses,
    addAddress,
    deleteAddress,
    updateAddress,
} from "../store/actions/clientActions";
import { setAddress } from "../store/actions/shoppingCartActions";

function CreateOrderPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(
        (state) => state.client.user
    );

    const cart = useSelector(
        (state) => state.shoppingCart.cart
    );

    const addressList = useSelector(
        (state) => state.client.addressList
    );

    const creditCards = useSelector(
        (state) => state.client.creditCards
    );

    const token =
        localStorage.getItem("token");

    if (!token && !user?.email) {
        return <Redirect to="/login" />;
    }

    useEffect(() => {
        dispatch(fetchAddresses());
    }, [dispatch]);

    const [showForm, setShowForm] =
        useState(false);

    const [editingAddress, setEditingAddress] =
        useState(null);

    const [sameAddress, setSameAddress] =
        useState(true);

    const [selectedAddress, setSelectedAddress] =
        useState(null);

    const [formData, setFormData] =
        useState({
            title: "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            district: "",
            neighborhood: "",
            address: "",
        });

    const [showCardForm, setShowCardForm] =
        useState(false);

    const [editingCard, setEditingCard] =
        useState(null);

    const [cardData, setCardData] =
        useState({
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: "",
        });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editingAddress) {
            dispatch(
                updateAddress(formData)
            );
        } else {
            dispatch(
                addAddress(formData)
            );
        }

        setFormData({
            title: "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            district: "",
            neighborhood: "",
            address: "",
        });

        setShowForm(false);
        setEditingAddress(null);
    };

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
        <div className="mx-auto max-w-7xl p-6">
            <div className="grid gap-8 lg:grid-cols-3">
                {/* LEFT SIDE */}
                <div className="lg:col-span-2">
                    <h1 className="mb-6 text-3xl font-bold">
                        Create Order
                    </h1>

                    <label className="mb-6 flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={
                                sameAddress
                            }
                            onChange={() =>
                                setSameAddress(
                                    !sameAddress
                                )
                            }
                        />

                        <span>
                            Billing address is
                            same as shipping
                            address
                        </span>
                    </label>

                    <button
                        onClick={() =>
                            setShowForm(
                                !showForm
                            )
                        }
                        className="mb-6 rounded bg-[#23A6F0] px-4 py-2 text-white"
                    >
                        Add Address
                    </button>

                    {showForm && (
                        <form
                            onSubmit={
                                handleSubmit
                            }
                            className="mb-6 rounded border p-4"
                        >
                            <div className="grid gap-3">
                                <input
                                    placeholder="Address Title"
                                    value={
                                        formData.title
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                title:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="Name"
                                    value={
                                        formData.name
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                name:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="Surname"
                                    value={
                                        formData.surname
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                surname:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="Phone"
                                    value={
                                        formData.phone
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                phone:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="City"
                                    value={
                                        formData.city
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                city:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="District"
                                    value={
                                        formData.district
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                district:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <input
                                    placeholder="Neighborhood"
                                    value={
                                        formData.neighborhood
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                neighborhood:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <textarea
                                    placeholder="Address"
                                    value={
                                        formData.address
                                    }
                                    onChange={(
                                        e
                                    ) =>
                                        setFormData(
                                            {
                                                ...formData,
                                                address:
                                                    e
                                                        .target
                                                        .value,
                                            }
                                        )
                                    }
                                    className="rounded border p-2"
                                />

                                <button
                                    type="submit"
                                    className="rounded bg-green-600 px-4 py-2 text-white"
                                >
                                    Save
                                    Address
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                        {addressList.map(
                            (address) => (
                                <div
                                    key={address.id}
                                    className={`rounded border p-4 ${selectedAddress ===
                                        address.id
                                        ? "border-[#23A6F0] bg-blue-50"
                                        : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="selectedAddress"
                                        checked={
                                            selectedAddress ===
                                            address.id
                                        }
                                        onChange={() => {
                                            setSelectedAddress(address.id);

                                            dispatch(
                                                setAddress(address)
                                            );
                                        }}
                                        className="mb-2"
                                    />

                                    <h3 className="font-bold">
                                        {
                                            address.title
                                        }
                                    </h3>

                                    <p>
                                        {
                                            address.name
                                        }{" "}
                                        {
                                            address.surname
                                        }
                                    </p>

                                    <p>
                                        {
                                            address.phone
                                        }
                                    </p>

                                    <p>
                                        {
                                            address.city
                                        }{" "}
                                        /
                                        {
                                            address.district
                                        }
                                    </p>

                                    <p>
                                        {
                                            address.neighborhood
                                        }
                                    </p>

                                    <p>
                                        {
                                            address.address
                                        }
                                    </p>

                                    <button
                                        onClick={() => {
                                            setEditingAddress(
                                                address.id
                                            );

                                            setShowForm(
                                                true
                                            );

                                            setFormData(
                                                address
                                            );
                                        }}
                                        className="mt-3 mr-2 rounded bg-yellow-500 px-3 py-1 text-white"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            dispatch(
                                                deleteAddress(
                                                    address.id
                                                )
                                            )
                                        }
                                        className="mt-3 rounded bg-red-500 px-3 py-1 text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="h-fit rounded border p-6">
                    <h2 className="mb-6 text-2xl font-bold">
                        Order Summary
                    </h2>

                    <div className="space-y-4">
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
                                -
                                $
                                {discount.toFixed(
                                    2
                                )}
                            </span>
                        </div>

                        <hr />

                        <div className="flex justify-between text-xl font-bold">
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

                        <button
                            onClick={() =>
                                history.push(
                                    "/create-order/payment"
                                )
                            }
                            className="w-full rounded bg-orange-500 py-3 font-bold text-white"
                        >
                            Save and Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateOrderPage;