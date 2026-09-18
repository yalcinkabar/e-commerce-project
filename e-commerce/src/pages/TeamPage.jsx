import gokhanPhoto from "../assets/team/gokhan.png";
import yalcinPhoto from "../assets/team/me.png";

function TeamPage() {
    const teamMembers = [
        {
            name: "Yalçın Kabar",
            role: "Full Stack Developer",
            image: yalcinPhoto,
        },
        {
            name: "Gökhan Özdemir",
            role: "Project Manager",
            image: gokhanPhoto,
        },
        
    ];

    return (
        <section className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-5xl font-bold text-[#252B42]">
                    Our Team
                </h1>

                <p className="text-[#737373]">
                    Meet our talented team members.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="overflow-hidden rounded-lg border bg-white shadow-sm"
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="h-[400px] w-full object-cover"
                        />

                        <div className="p-6 text-center">
                            <h3 className="mb-2 text-2xl font-bold text-[#252B42]">
                                {member.name}
                            </h3>

                            <p className="text-[#737373]">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TeamPage;