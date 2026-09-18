import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import {
  Phone,
  Mail,
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";

const Facebook = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  // Bileşene gelen class gibi diğer özellikleri de buraya aktarır
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Instagram = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Twitter = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const Youtube = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);


function Header() {
  const user = useSelector(
    (state) => state.client.user
  );
  const categories = useSelector(
    (state) => state.client.categories
  );
  const cart = useSelector(
    (state) => state.shoppingCart.cart
  );
  return (
    <header>
      {/* Dark alan - Desktop Only */}
      <div className="hidden bg-[#252B42] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* Left Side */}
          <div className="flex items-center gap-6 text-sm font-semibold">
            <a href="tel:(225)555-0118" className="flex items-center gap-2">
              <Phone size={16} />
              <span>(225) 555-0118</span>
            </a>

            <a
              href="mailto:michelle.rivera@example.com"
              className="flex items-center gap-2"
            >
              <Mail size={16} />
              <span>michelle.rivera@example.com</span>
            </a>
          </div>

          {/* Center */}
          <p className="text-sm font-semibold">
            Follow Us and get a chance to win 80% off
          </p>

          {/* Right Side */}
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span>Follow Us :</span>
            <Instagram size={16} />
            <Youtube size={16} />
            <Facebook size={24} />
            <Twitter size={16} />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center flex-1 ml-24">
            {/* Menu Links */}
            <nav className="flex items-center gap-6 text-sm font-semibold text-gray-500">
              <Link to="/">Home</Link>
              <div className="group relative">
                <Link
                  to="/shop"
                  className="flex items-center gap-1"
                >
                  Shop
                  <ChevronDown size={16} />
                </Link>

                <div className="absolute left-0 top-full z-50 hidden min-w-[500px] gap-12 bg-white p-6 shadow-lg group-hover:flex">
                  <div>
                    <h3 className="mb-4 font-bold text-[#252B42]">
                      Kadın
                    </h3>

                    <div className="flex flex-col gap-2">
                      {categories
                        .filter((cat) => cat.gender === "k")
                        .map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/shop/kadin/${cat.title
                              .toLowerCase()
                              .replaceAll("ı", "i")
                              .replaceAll("ş", "s")
                              .replaceAll("ç", "c")
                              .replaceAll("ğ", "g")
                              .replaceAll("ü", "u")
                              .replaceAll("ö", "o")}/${cat.id}`}
                            className="text-gray-500 hover:text-[#23A6F0]"
                          >
                            {cat.title}
                          </Link>
                        ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 font-bold text-[#252B42]">
                      Erkek
                    </h3>

                    <div className="flex flex-col gap-2">
                      {categories
                        .filter((cat) => cat.gender === "e")
                        .map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/shop/erkek/${cat.title
                              .toLowerCase()
                              .replaceAll("ı", "i")
                              .replaceAll("ş", "s")
                              .replaceAll("ç", "c")
                              .replaceAll("ğ", "g")
                              .replaceAll("ü", "u")
                              .replaceAll("ö", "o")}/${cat.id}`}
                            className="text-gray-500 hover:text-[#23A6F0]"
                          >
                            {cat.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/pages">Pages</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>

            {/* Actions */}
            <div className="ml-auto flex items-center gap-5 text-[#23A6F0]">
              <button>
                <Search size={20} />
              </button>

              {user?.email ? (
                <div className="group relative">
                  <div className="flex cursor-pointer items-center gap-2">
                    <Gravatar
                      email={user.email}
                      size={32}
                      default="identicon"
                      className="rounded-full"
                    />

                    <span className="text-sm font-semibold">
                      {user.name}
                    </span>

                    <ChevronDown size={16} />
                  </div>

                  <div
                    className="
            invisible
            absolute
            right-0
            top-full
            z-50
            mt-2
            w-48
            rounded
            border
            bg-white
            text-black
            opacity-0
            shadow-lg
            transition-all
            group-hover:visible
            group-hover:opacity-100
        "
                  >
                    <Link
                      to="/orders"
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      Previous Orders
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem(
                          "token"
                        );

                        window.location.reload();
                      }}
                      className="block w-full px-4 py-3 text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-1 text-sm font-semibold"
                >
                  <User size={20} />
                  Login / Register
                </Link>
              )}

              <div className="group relative">
                <Link
                  to="/cart"
                  className="flex items-center gap-1"
                >
                  <ShoppingCart size={20} />
                  <span className="text-xs">
                    {cart.length}
                  </span>
                </Link>

                <div className="absolute right-0 top-full z-50 hidden w-80 rounded bg-white p-4 text-black shadow-lg group-hover:block">
                  <h3 className="mb-4 font-bold">
                    Sepetim ({cart.length} Ürün)
                  </h3>

                  <div className="max-h-80 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="mb-3 flex gap-3 border-b pb-3"
                      >
                        <img
                          src={item.product.images?.[0]?.url}
                          alt={item.product.name}
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div className="flex-1">
                          <p className="text-sm font-semibold">
                            {item.product.name}
                          </p>

                          <p className="text-xs text-gray-500">
                            Adet: {item.count}
                          </p>

                          <p className="text-sm font-bold text-[#23A6F0]">
                            ${item.product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-1">
                <Heart size={20} />
                <span className="text-xs">1</span>
              </button>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 lg:hidden">
            <Search size={22} />
            <ShoppingCart size={22} />
            <Menu size={24} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-10 text-3xl font-medium text-[#737373] lg:hidden">
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}
export default Header;
