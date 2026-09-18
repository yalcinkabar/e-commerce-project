import heroImage from "../assets/home_page_png/hero_png/home_page_hero_1.jpg";

function ContactPage() {
    const offices = [
        {
            city: "Paris",
            address: "1901 Thorn ridge Cir.",
        },
        {
            city: "New York",
            address: "2715 Ash Dr. San Jose,",
        },
        {
            city: "Berlin",
            address: "4140 Parker Rd.",
        },
        {
            city: "London",
            address: "3517 W. Gray St. Utica,",
        },
    ];

    return (
        <section
            className="relative min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `
      linear-gradient(
        90deg,
        rgba(0,78,102,0.95) 0%,
        rgba(0,120,160,0.65) 45%,
        rgba(0,180,255,0.15) 100%
      ),
      url(${heroImage})
    `,
            }}
        >


            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}
                <div className="mb-16 max-w-md text-white lg:mb-0">
                    <h1 className="mb-8 text-5xl font-bold">
                        CONTACT US
                    </h1>

                    <p className="mb-8">
                        Problems trying to resolve the conflict
                        between the two major realms of Classical
                        physics: Newtonian mechanics
                    </p>

                    <button className="rounded bg-blue-500 px-8 py-3 font-bold">
                        CONTACT US
                    </button>
                </div>

                {/* Right Side */}
                <div className="grid gap-10 text-white sm:grid-cols-2">
                    {offices.map((office) => (
                        <div key={office.city}>
                            <h3 className="mb-3 text-3xl font-bold">
                                {office.city}
                            </h3>

                            <p className="mb-4">
                                {office.address}
                            </p>

                            <hr className="mb-4 border-white/50" />

                            <p className="mb-2 font-bold">
                                75000 Paris
                            </p>

                            <p className="mb-2 font-bold">
                                Phone : +451 215 215
                            </p>

                            <p className="font-bold">
                                Fax : +451 215 215
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContactPage;