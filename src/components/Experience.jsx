const experiences = [
  {
    company: "Collectcent Digital Media",
    role: "Software Engineer",
    duration: "Dec 2025 – Present",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Developing and maintaining an internal AdTech platform integrating the Google Ads API.",
      "Building scalable backend services, reporting APIs, and campaign management workflows.",
      "Collaborating with cross-functional teams to deliver reliable production features.",
    ],
  },
  {
    company: "Loop Methods",
    role: "Backend Developer",
    duration: "Mar 2024 – Aug 2025",
    location: "Noida, Uttar Pradesh",
    responsibilities: [
      "Designed and maintained production backend services for a subscription-based used-book marketplace.",
      "Managed Dockerized services, CI/CD pipelines, and AWS cloud infrastructure.",
      "Mentored junior developers and promoted scalable architecture and clean coding practices.",
    ],
  },
  {
    company: "PerfectionGeeks Technologies",
    role: "Backend Developer",
    duration: "Mar 2022 – Feb 2024",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Built large-scale web scrapers processing over 1M+ e-commerce products.",
      "Developed reseller management systems supporting 30K+ products and 20K+ vendors.",
      "Designed REST APIs and optimized backend performance for production applications.",
    ],
  },
  {
    company: "Bluehelmet Pvt Ltd",
    role: "Backend Developer Intern",
    duration: "Nov 2021 – Feb 2022",
    location: "New Delhi",
    responsibilities: [
      "Developed backend APIs using Node.js and PostgreSQL for a job portal platform.",
      "Integrated payment gateways, WhatsApp, SMS, and email notification services.",
      "Collaborated with senior engineers to build and maintain production features.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>

      <p className="max-w-2xl text-gray-400 leading-7 mb-12">
        Over the past 4+ years, I've worked on marketplaces, procurement
        platforms, AdTech products, and enterprise applications, building
        scalable backend systems used in production.
      </p>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div>
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-gray-500 font-medium">
                  {exp.company}
                </p>
              </div>

              <div className="text-sm text-gray-500 md:text-right">
                <p>{exp.duration}</p>
                <p>{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 text-gray-400">
              {exp.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}