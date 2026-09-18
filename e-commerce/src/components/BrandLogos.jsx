import aws from "../assets/logos/aws.svg";
import bird from "../assets/logos/bird.svg";
import hooli from "../assets/logos/hooli.svg";
import lyft from "../assets/logos/lyft.svg";
import reddit from "../assets/logos/reddit.svg";
import stripe from "../assets/logos/stripe.svg";

function BrandLogos() {
    const logos = [
        hooli,
        lyft,
        bird,
        stripe,
        aws,
        reddit,
    ];

    return (
        <section className="bg-[#FAFAFA] py-12">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center">
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="brand logo"
                        className="h-12 w-auto opacity-70"
                    />
                ))}
            </div>
        </section>
    );
}

export default BrandLogos;