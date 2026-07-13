const projects = [
  {
    title: "Rebookit — Used Book Marketplace",
    description:
      "Subscription-based marketplace enabling users to buy, sell, and exchange used books with real-time chat, community discussions, subscriptions, and advanced search.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "AWS S3",
    ],
    highlights: [
      "Designed scalable REST APIs",
      "Integrated real-time chat",
      "Implemented Elasticsearch-powered search",
    ],
    link: "https://rebookit.club/",
  },
  {
    title: "Led360 — Roadside Assistance",
    description:
      "Backend platform powering real-time roadside assistance for Android, iOS, and Admin applications.",
    tech: [
      "NestJS",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "AWS S3",
    ],
    highlights: [
      "Built booking workflows",
      "Queue-based background processing",
      "REST APIs for multiple clients",
    ],
    link:
      "https://play.google.com/store/apps/details?id=com.led.customer&pli=1",
  },
  {
    title: "ProcureRight — Procurement Platform",
    description:
      "Enterprise procurement platform connecting buyers, vendors, and procurement partners through a centralized workflow system.",
    tech: [
      "Node.js",
      "MongoDB",
      "BullMQ",
      "AWS",
    ],
    highlights: [
      "Workflow automation",
      "Role-based access control",
      "Vendor management system",
    ],
    link: "https://buyer.procureright.in/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-950 py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="max-w-2xl text-gray-600 dark:text-gray-400 leading-7 mb-12">
          A selection of production applications I've helped build, ranging
          from marketplaces and enterprise platforms to real-time backend
          systems.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-7 mb-5">
                {project.description}
              </p>

              <div className="mb-5">
                <h4 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Highlights
                </h4>

                <ul className="space-y-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}