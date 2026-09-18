import aboutHero from "../assets/about/about-hero.png";
import dagImage from "../assets/about/dag.jpg";
import pinkImage from "../assets/about/pink.jpg";
import BrandLogos from "../components/BrandLogos";

function AboutPage() {
    return (
        <main>
            {/* HERO */}
            <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-20 lg:flex-row">
                <div className="max-w-md">
                    <p className="mb-4 font-bold text-[#252B42]">
                        ABOUT COMPANY
                    </p>

                    <h1 className="mb-6 whitespace-nowrap text-6xl font-bold text-[#252B42]">
                        ABOUT US
                    </h1>

                <p className="mb-8 text-lg text-[#737373]">
                    We know how large objects will act,
                    but things on a small scale.
                </p>

                <button className="rounded bg-[#23A6F0] px-8 py-4 font-bold text-white">
                    Get Quote Now
                </button>
            </div>

            <div className="relative flex justify-center">

                {/* Büyük pembe daire */}
                <div className="absolute top-10 h-[500px] w-[500px] rounded-full bg-pink-100"></div>

                {/* Küçük süs daireleri */}
                <div className="absolute left-0 top-20 h-16 w-16 rounded-full bg-pink-100"></div>

                <div className="absolute right-4 top-32 h-3 w-3 rounded-full bg-purple-400"></div>

                <div className="absolute right-0 top-52 h-8 w-8 rounded-full bg-pink-100"></div>

                <img
                    src={aboutHero}
                    alt="About Hero"
                    className="relative z-10 max-w-full"
                />
            </div>
        </section>

            {/* PROBLEM SECTION */ }
    <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
            <div>
                <p className="mb-3 text-sm font-bold text-red-500">
                    Problems trying
                </p>

                <h2 className="text-3xl font-bold text-[#252B42]">
                    Met minim Mollie non desert
                    Alamo est sit cliquey dolor
                    do met sent.
                </h2>
            </div>

            <div>
                <p className="text-[#737373]">
                    Problems trying to resolve the conflict
                    between the two major realms of Classical
                    physics: Newtonian mechanics.
                </p>
            </div>
        </div>
    </section>

    {/* STATS */ }
    <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
            <div>
                <h3 className="text-5xl font-bold text-[#252B42]">
                    15K
                </h3>
                <p className="text-[#737373]">
                    Happy Customers
                </p>
            </div>

            <div>
                <h3 className="text-5xl font-bold text-[#252B42]">
                    150K
                </h3>
                <p className="text-[#737373]">
                    Monthly Visitors
                </p>
            </div>

            <div>
                <h3 className="text-5xl font-bold text-[#252B42]">
                    15
                </h3>
                <p className="text-[#737373]">
                    Countries Worldwide
                </p>
            </div>

            <div>
                <h3 className="text-5xl font-bold text-[#252B42]">
                    100+
                </h3>
                <p className="text-[#737373]">
                    Top Partners
                </p>
            </div>
        </div>
    </section>

    {/* VIDEO SECTION */ }
    <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden rounded-3xl">
            <img
                src={dagImage}
                alt="Video"
                className="w-full"
            />
        </div>
    </section>

    {/* TEAM */ }
    <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
            <h2 className="mb-4 text-5xl font-bold text-[#252B42]">
                Meet Our Team
            </h2>

            <p className="text-[#737373]">
                Problems trying to resolve the conflict
                between the two major realms of Classical
                physics: Newtonian mechanics.
            </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
            <div className="rounded-lg border bg-white p-6 text-center shadow-sm">
                <img
                    src="/src/assets/team/me.png"
                    alt="Yalçın Kabar"
                    className="mx-auto mb-6 h-72 w-full rounded-lg object-cover"
                />

                <h3 className="text-2xl font-bold text-[#252B42]">
                    Yalçın Kabar
                </h3>

                <p className="mt-2 text-[#737373]">
                    Full Stack Developer
                </p>
            </div>

            <div className="rounded-lg border bg-white p-6 text-center shadow-sm">
                <img
                    src="/src/assets/team/gokhan.png"
                    alt="Gökhan Özdemir"
                    className="mx-auto mb-6 h-72 w-full rounded-lg object-cover"
                />

                <h3 className="text-2xl font-bold text-[#252B42]">
                    Gökhan Özdemir
                </h3>

                <p className="mt-2 text-[#737373]">
                    Project Manager
                </p>
            </div>
        </div>
    </section>

    {/* BIG COMPANIES */ }
    <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="mb-4 text-5xl font-bold text-[#252B42]">
            Big Companies Are Here
        </h2>

        <p className="mb-16 text-[#737373]">
            Problems trying to resolve the conflict
            between the two major realms of Classical
            physics: Newtonian mechanics.
        </p>

        <BrandLogos />
    </section>

    {/* WORK WITH US */ }
    <section className="mx-auto mb-20 grid max-w-7xl overflow-hidden lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#23A6F0] p-16 text-white">
            <p className="mb-4 text-center font-bold">
                WORK WITH US
            </p>

            <h2 className="mb-6 text-center text-5xl font-bold">
                Now Let's grow Yours
            </h2>

            <p className="mb-8 text-center">
                The gradual accumulation of information
                about atomic and small-scale behavior.
            </p>

            <div className="flex justify-center">
                <button className="rounded border border-white px-8 py-3 font-bold">
                    Button
                </button>
            </div>
        </div>

        <img
            src={pinkImage}
            alt="Work With Us"
            className="h-full w-full object-cover"
        />
    </section>
        </main >
    );
}

export default AboutPage;