const projects = [
    {
        title: "Rebookit — Used Book Marketplace",
        description:
            "Subscription-based used-book marketplace with chat, search, community discussions, and subscriptions.",
        tech: "Node.js, Express.js, MongoDB, Redis, RabbitMQ, Elasticsearch, AWS S3",
        link: "https://rebookit.club/",
    },
    {
        title: "Led360 — Roadside Assistance App",
        description:
            "Backend system for real-time roadside assistance bookings for Android, iOS, and Admin panel.",
        tech: "NestJS, PostgreSQL, BullMQ, Redis, AWS S3",
        link: "https://play.google.com/store/apps/details?id=com.led.customer&pli=1"
    },
    {
        title: "Procureright — Procurement Management Platform",
        description:
            "Procurement platform to streamline workflows for buyers, vendors, and procurement parnter  (platform)",
        tech: "Node.js, Mongodb, BullMQ, AWS",
        link: "https://buyer.procureright.in/"
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-100 dark:bg-gray-950 py-24"
        >
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="
                bg-white dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                shadow-sm dark:shadow-none
                rounded-lg p-6
                transition
                hover:shadow-sm
              "
                        >
                            <h3 className="text-lg font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            {/* <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                {project.highlights.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul> */}

                            {/* Tech stack */}
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                <span className="font-medium">Tech:</span>{" "}
                                {project.tech}
                            </p>

                            {/* Optional link */}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline text-sm"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

