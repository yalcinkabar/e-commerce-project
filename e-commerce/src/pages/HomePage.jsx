
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "../assets/home_page_png/hero_png/home_page_hero_1.jpg";
import menImage from "../assets/home_page_png/card-item-png/home_page_card_item_men.jpg";
import womenImage from "../assets/home_page_png/card-item-png/home_page_card_item_women.jpg";
import accessoriesImage from "../assets/home_page_png/card-item-png/home_page_card_item_acc.jpg";
import kidsImage from "../assets/home_page_png/card-item-png/home_page_card_items_kids.jpg";

import ProductCard from "../components/ProductCard";
import productImage1 from "../assets/home_page_png/product_cards_png/home_page_product_cards_1.jpg";
import productImage2 from "../assets/home_page_png/product_cards_png/home_page_product_cards_2.jpg";
import productImage3 from "../assets/home_page_png/product_cards_png/home_page_product_cards_3.jpg";
import productImage4 from "../assets/home_page_png/product_cards_png/home_page_product_cards_4.jpg";
import productImage5 from "../assets/home_page_png/product_cards_png/home_page_product_cards_5.jpg";
import productImage6 from "../assets/home_page_png/product_cards_png/home_page_product_cards_6.jpg";
import productImage7 from "../assets/home_page_png/product_cards_png/home_page_product_cards_7.jpg";
import productImage8 from "../assets/home_page_png/product_cards_png/home_page_product_cards_8.jpg";

import vitaImage from "../assets/home_page_png/hero_png/home_page_hero_2.png"
import neuralImage from "../assets/home_page_png/asian_women_men.png"

import PostCard from "../components/PostCard";
import postImage1 from "../assets/home_page_png/content_card_png/home_page_content_card_png_1.jpg"
import postImage2 from "../assets/home_page_png/content_card_png/home_page_content_card_png_2.jpg"
import postImage3 from "../assets/home_page_png/content_card_png/home_page_content_card_png_3.jpg"

import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";

function HomePage() {
  return (
    <main>
      <HeroSlider />
      {/* Editor's Pick Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold text-[#252B42]">
            EDITOR'S PICK
          </h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-4 lg:ml-48 lg:grid-cols-5">
          {/* MEN */}
          <div
            className="relative min-h-[500px] bg-cover bg-center bg-no-repeat lg:col-span-2"
            style={{ backgroundImage: `url(${menImage})` }}
          >
            <button className="absolute bottom-6 left-6 bg-white px-8 py-3 font-bold text-[#252B42]">
              MEN
            </button>
          </div>

          {/* WOMEN */}
          <div
            className="relative min-h-[500px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${womenImage})` }}
          >
            <button className="absolute bottom-6 left-6 bg-white px-8 py-3 font-bold text-[#252B42]">
              WOMEN
            </button>
          </div>

          {/* Double kısım */}
          <div className="flex flex-col gap-4">
            {/* ACCESSORIES */}
            <div
              className="relative min-h-[242px] bg-cover bg-center bg-no-repeat bg-[#F5F5F5]"
              style={{ backgroundImage: `url(${accessoriesImage})` }}
            >
              <button className="absolute bottom-6 left-6 bg-white px-6 py-3 font-bold text-[#252B42]">
                ACCESSORIES
              </button>
            </div>

            {/* KIDS */}
            <div
              className="relative min-h-[242px] bg-cover bg-center bg-no-repeat bg-[#F5F5F5]"
              style={{ backgroundImage: `url(${kidsImage})` }}
            >
              <button className="absolute bottom-6 left-6 bg-white px-6 py-3 font-bold text-[#252B42]">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold text-[#737373]">
            Featured Products
          </p>
          <h2 className="mb-3 text-3xl font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h2>
          <p className="text-sm text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            image={productImage1}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage2}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage3}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage4}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage5}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage6}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage7}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />

          <ProductCard
            image={productImage8}
            title="Graphic Design"
            category="English Department"
            oldPrice="16.48"
            newPrice="6.48"
          />
        </div>
      </section>

      <ProductSlider />

      {/* Neural Universe Section */}
      <section className="bg-[#FAFAFA] py-12 lg:py-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-12 px-4 lg:grid-cols-2 lg:gap-24">

          {/* Left Image */}
          <div className="h-[400px] w-full lg:h-[600px]">
            <img
              src={neuralImage}
              alt="Part of the Neural Universe"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div className="mx-auto flex max-w-[450px] flex-col justify-center py-6 text-center order-first lg:order-none lg:mx-0 lg:text-left">
            {/* Subtitle */}
            <p className="mb-4 text-sm font-bold tracking-widest text-[#BDBDBD]">
              SUMMER 2020
            </p>

            {/* Title */}
            <h2 className="mb-6 text-5xl font-bold leading-tight text-[#252B42] lg:text-5xl">
              Part of the Neural
              <br />
              Universe
            </h2>

            {/* Description */}
            <p className="mb-8 text-2xl leading-10 text-[#737373] lg:text-xl lg:leading-8">
              We know how large objects will act, but things on a small scale.
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
              <button className="w-fit rounded-md bg-[#23A6F0] px-10 py-4 text-sm font-bold text-white lg:bg-[#2DC071]">
                BUY NOW
              </button>

              <button className="w-fit rounded-md border border-[#23A6F0] px-10 py-4 text-sm font-bold text-[#23A6F0] lg:border-[#2DC071] lg:text-[#2DC071]">

                READ MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-bold text-[#23A6F0]">
            Practice Advice
          </p>

          <h2 className="mb-4 text-4xl font-bold text-[#252B42]">
            Featured Posts
          </h2>

          <p className="mx-auto max-w-md text-sm leading-5 text-[#737373]">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <PostCard
            image={postImage1}
            title="Loudest à la Madison #1 (L'integral)"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          />

          <PostCard
            image={postImage2}
            title="Loudest à la Madison #1 (L'integral)"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          />

          <PostCard
            image={postImage3}
            title="Loudest à la Madison #1 (L'integral)"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
          />
        </div>
      </section>

    </main >
  );
}

export default HomePage;