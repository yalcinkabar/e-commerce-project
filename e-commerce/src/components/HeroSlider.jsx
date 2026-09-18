import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImage from "../assets/home_page_png/hero_png/home_page_hero_1.jpg";

function HeroSlider() {
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
                <section
                    className="relative min-h-[753px] bg-cover bg-no-repeat bg-[50%_center] lg:min-h-[716px] lg:bg-[82%_40%]"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="mx-auto flex min-h-[753px] max-w-7xl items-center justify-center px-6 text-center lg:min-h-[716px] lg:justify-start lg:px-12 lg:text-left">
                        <div className="max-w-md">
                            <p className="mb-6 text-sm font-bold tracking-widest text-white lg:text-base lg:text-[#FFFFFF]">
                                SUMMER 2020
                            </p>

                            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:mb-8 lg:text-6xl lg:text-[#FFFFFF]">
                                NEW
                                <br />
                                COLLECTION
                            </h1>

                            <p className="mb-8 text-xl leading-8 text-white lg:text-2xl lg:leading-9 lg:text-[#FFFFFF]">
                                We know how large objects will act, but things on a small scale.
                            </p>

                            <button className="rounded-md bg-[#2DC071] px-10 py-4 text-xl font-bold text-white lg:text-2xl">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </section>
            </SwiperSlide>

            <SwiperSlide>
                <section
                    className="relative min-h-[753px] bg-cover bg-no-repeat bg-[50%_center] lg:min-h-[716px] lg:bg-[82%_40%]"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="mx-auto flex min-h-[753px] max-w-7xl items-center justify-center px-6 text-center lg:min-h-[716px] lg:justify-start lg:px-12 lg:text-left">
                        <div className="max-w-md">
                            <p className="mb-6 text-sm font-bold tracking-widest text-white lg:text-base lg:text-[#2A7CC7]">
                                SUMMER 2020
                            </p>

                            <h1 className="mb-6 text-4xl font-bold leading-tight text-white lg:mb-8 lg:text-6xl lg:text-[#252B42]">
                                NEW
                                <br />
                                COLLECTION
                            </h1>

                            <p className="mb-8 text-xl leading-8 text-white lg:text-2xl lg:leading-9 lg:text-[#737373]">
                                We know how large objects will act, but things on a small scale.
                            </p>

                            <button className="rounded-md bg-[#2DC071] px-10 py-4 text-xl font-bold text-white lg:text-2xl">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
}

export default HeroSlider;