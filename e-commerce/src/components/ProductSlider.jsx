import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import vitaImage from "../assets/home_page_png/hero_png/home_page_hero_2.png";

function ProductSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            style={{
                "--swiper-navigation-color": "#ffffff",
                "--swiper-pagination-color": "#ffffff",
                "--swiper-pagination-bullet-inactive-color": "#ffffff",
                "--swiper-pagination-bullet-inactive-opacity": "0.5",
            }}
        >
            <SwiperSlide>
                <section className="bg-[#23856D]">
                    <div className="mx-auto grid min-h-[709px] max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-12">
                        {/* Left Content */}
                        <div className="text-center text-white lg:text-left">
                            <p className="mb-6 text-xl font-normal uppercase tracking-wider">
                                SUMMER 2020
                            </p>

                            <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                                Vita Classic
                                <br />
                                Product
                            </h2>

                            <p className="mb-8 max-w-md text-sm leading-6 text-white/90">
                                We know how large objects will act, We know how are objects will act, We know
                            </p>

                            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                                <span className="text-2xl font-bold">$16.48</span>

                                <button className="rounded-md bg-[#2DC071] px-10 py-4 text-sm font-bold text-white">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={vitaImage}
                                alt="Vita Classic Product"
                                className="max-h-[685px] w-auto object-contain"
                            />
                        </div>
                    </div>
                </section>
            </SwiperSlide>

            {/* İkinci slide - aynı içerik */}
            <SwiperSlide>
                <section className="bg-[#23856D]">
                    <div className="mx-auto grid min-h-[709px] max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-12">
                        <div className="text-center text-white lg:text-left">
                            <p className="mb-6 text-xl font-normal uppercase tracking-wider">
                                SUMMER 2020
                            </p>

                            <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                                Vita Classic
                                <br />
                                Product
                            </h2>

                            <p className="mb-8 max-w-md text-sm leading-6 text-white/90">
                                We know how large objects will act, We know how are objects will act, We know
                            </p>

                            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                                <span className="text-2xl font-bold">$16.48</span>

                                <button className="rounded-md bg-[#2DC071] px-10 py-4 text-sm font-bold text-white">
                                    ADD TO CART
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={vitaImage}
                                alt="Vita Classic Product"
                                className="max-h-[685px] w-auto object-contain"
                            />
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
}

export default ProductSlider;