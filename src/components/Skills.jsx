const skills = {
  Backend: ["Node.js", "NestJS", "Express.js", "TypeScript", "Microservices"],
  Databases: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  Messaging: ["RabbitMQ", "BullMQ"],
  DevOps: ["Docker", "AWS", "CI/CD", "Linux", "Nginx"],
  Monitoring: ["ELK Stack", "Pino"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>

        <p className="max-w-2xl text-gray-400 leading-7 mb-12">
          Technologies and tools I use to build scalable backend systems,
          cloud-native applications, and production-ready distributed services.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-xl border border-gray-800 bg-gray-950/40 p-6 transition-colors duration-200 hover:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-white mb-5">
                {group}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-gray-300 transition-colors duration-200 hover:border-gray-500 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}