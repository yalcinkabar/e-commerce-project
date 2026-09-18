function ProductTabs() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-12 flex justify-center gap-10 border-b pb-6">
                <button className="font-bold text-[#252B42]">
                    Description
                </button>

                <button className="font-bold text-[#737373]">
                    Additional Information
                </button>

                <button className="font-bold text-[#737373]">
                    Reviews (0)
                </button>
            </div>

            <div className="grid gap-10 lg:grid-cols-3">

                {/* Sol resim */}
                <div>
                    <img
                        src="https://picsum.photos/400/500"
                        alt="room"
                        className="w-full rounded-lg"
                    />
                </div>

                {/* Orta yazılar */}
                <div>
                    <h3 className="mb-6 text-2xl font-bold text-[#252B42]">
                        the quick fox jumps over
                    </h3>

                    <p className="mb-4 text-[#737373]">
                        Met minim Mollie non desert Alamo est sit
                        cliquey dolor do met sent.
                    </p>

                    <p className="mb-4 text-[#737373]">
                        Met minim Mollie non desert Alamo est sit
                        cliquey dolor do met sent.
                    </p>

                    <p className="text-[#737373]">
                        Met minim Mollie non desert Alamo est sit
                        cliquey dolor do met sent.
                    </p>
                </div>

                {/* Sağ yazılar */}
                <div>
                    <h3 className="mb-6 text-2xl font-bold text-[#252B42]">
                        the quick fox jumps over
                    </h3>

                    <ul className="space-y-4 text-[#737373]">
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                    </ul>

                    <h3 className="mt-10 mb-6 text-2xl font-bold text-[#252B42]">
                        the quick fox jumps over
                    </h3>

                    <ul className="space-y-4 text-[#737373]">
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                        <li>{">"} the quick fox jumps over the lazy dog</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
export default ProductTabs;