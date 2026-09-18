
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

function Footer() {
    return (
        <footer className="bg-white">
            {/* Top Bar */}
            <div className="border-b border-[#E6E6E6]">
                <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="text-2xl font-bold text-[#252B42]">
                        Bandage
                    </h2>

                    <div className="flex gap-5 text-[#23A6F0]">
                        <Facebook size={24} />
                        <Instagram size={24} />
                        <Twitter size={24} />
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-5">
                {/* Company Info */}
                <div>
                    <h3 className="mb-5 text-base font-bold text-[#252B42]">
                        Company Info
                    </h3>
                    <ul className="space-y-3 text-sm font-bold text-[#737373]">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="mb-5 text-base font-bold text-[#252B42]">
                        Legal
                    </h3>
                    <ul className="space-y-3 text-sm font-bold text-[#737373]">
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="mb-5 text-base font-bold text-[#252B42]">
                        Features
                    </h3>
                    <ul className="space-y-3 text-sm font-bold text-[#737373]">
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="mb-5 text-base font-bold text-[#252B42]">
                        Resources
                    </h3>
                    <ul className="space-y-3 text-sm font-bold text-[#737373]">
                        <li>iOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <h3 className="mb-5 text-base font-bold text-[#252B42]">
                        Get In Touch
                    </h3>

                    <div className="mb-3 flex overflow-hidden rounded-md border border-[#E6E6E6]">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 bg-[#F9F9F9] text-sm outline-none"
                        />

                        <button className="bg-[#23A6F0] px-5 py-3 text-sm text-white">
                            Subscribe
                        </button>
                    </div>

                    <p className="text-xs text-[#737373]">
                        Lore imp sum dolor Amit
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#FAFAFA]">
                <div className="mx-auto max-w-7xl px-4 py-6 text-center lg:text-left">
                    <p className="text-sm font-bold text-[#737373]">
                        Made With Love By Finland All Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;