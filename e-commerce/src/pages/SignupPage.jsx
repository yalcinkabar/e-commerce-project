import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/clientActions";

function SignupPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    const selectedRole = watch("role_id");
    const password = watch("password");

    const roles = useSelector(
        (state) => state.client.roles
    );

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    useEffect(() => {
        const customerRole = roles.find(
            (role) => role.code === "customer"
        );

        if (customerRole) {
            setValue("role_id", customerRole.id);
        }
    }, [roles, setValue]);

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const selectedRoleObj = roles.find(
                (role) => role.id === Number(data.role_id)
            );

            let payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: Number(data.role_id),
            };

            if (selectedRoleObj?.code === "store") {
                payload.store = {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.tax_no,
                    bank_account: data.bank_account,
                };
            }

            await api.post("/signup", payload);

            toast.success(
                "You need to click link in email to activate your account!"
            );

            setTimeout(() => {
                history.goBack();
            }, 1500);
        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message || "Signup failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const isStoreSelected = roles.find(
        (role) =>
            role.id === Number(selectedRole) &&
            role.code === "store"
    );

    return (
        <div className="mx-auto max-w-3xl px-4 py-12">
            <h1 className="mb-8 text-center text-5xl font-bold">
                Sign Up
            </h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* NAME */}
                <div>
                    <input
                        placeholder="Name"
                        className="w-full rounded border p-3"
                        {...register("name", {
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters",
                            },
                        })}
                    />

                    {errors.name && (
                        <p className="mt-1 text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* EMAIL */}
                <div>
                    <input
                        placeholder="Email"
                        className="w-full rounded border p-3"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />

                    {errors.email && (
                        <p className="mt-1 text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* PASSWORD */}
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded border p-3"
                        {...register("password", {
                            required: "Password required",
                            pattern: {
                                value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                                message:
                                    "Min 8 chars, uppercase, lowercase, number and special char",
                            },
                        })}
                    />

                    {errors.password && (
                        <p className="mt-1 text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* CONFIRM PASSWORD */}
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full rounded border p-3"
                        {...register("confirmPassword", {
                            required: "Please confirm password",
                            validate: (value) =>
                                value === password ||
                                "Passwords do not match",
                        })}
                    />

                    {errors.confirmPassword && (
                        <p className="mt-1 text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                {/* ROLE */}
                <div>
                    <select
                        className="w-full rounded border p-3"
                        {...register("role_id")}
                    >
                        {roles.map((role) => (
                            <option
                                key={role.id}
                                value={role.id}
                            >
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* STORE FIELDS */}
                {isStoreSelected && (
                    <>
                        <div>
                            <input
                                placeholder="Store Name"
                                className="w-full rounded border p-3"
                                {...register("store_name", {
                                    required: "Store name required",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Store name must be at least 3 characters",
                                    },
                                })}
                            />

                            {errors.store_name && (
                                <p className="mt-1 text-red-500">
                                    {errors.store_name.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                placeholder="Store Phone"
                                className="w-full rounded border p-3"
                                {...register("store_phone", {
                                    required: "Phone required",
                                    pattern: {
                                        value: /^05\d{9}$/,
                                        message:
                                            "Invalid Turkish phone number",
                                    },
                                })}
                            />

                            {errors.store_phone && (
                                <p className="mt-1 text-red-500">
                                    {errors.store_phone.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                placeholder="Tax Number"
                                className="w-full rounded border p-3"
                                {...register("tax_no", {
                                    required: "Tax number required",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message:
                                            "Format must be T1234V123456",
                                    },
                                })}
                            />

                            {errors.tax_no && (
                                <p className="mt-1 text-red-500">
                                    {errors.tax_no.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <input
                                placeholder="IBAN"
                                className="w-full rounded border p-3"
                                {...register("bank_account", {
                                    required: "IBAN required",
                                    pattern: {
                                        value: /^TR\d{24}$/,
                                        message: "Invalid IBAN",
                                    },
                                })}
                            />

                            {errors.bank_account && (
                                <p className="mt-1 text-red-500">
                                    {errors.bank_account.message}
                                </p>
                            )}
                        </div>
                    </>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-sky-500 py-3 text-white transition hover:bg-sky-600 disabled:opacity-50"
                >
                    {loading ? "Loading..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}

export default SignupPage;