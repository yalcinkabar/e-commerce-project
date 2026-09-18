import { useEffect, useState } from "react";

function ProductGallery({ product }) {
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0].url);
        }
    }, [product]);

    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div>
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full rounded-lg"
                />

                <div className="mt-4 flex gap-4">
                    {product.images?.slice(0,2).map((image) => (
                        <img
                            key={image.url}
                            src={image.url}
                            alt=""
                            className="h-24 w-24 cursor-pointer rounded border object-cover"
                            onClick={() =>
                                setSelectedImage(image.url)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default ProductGallery;