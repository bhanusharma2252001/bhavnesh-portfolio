const skills = {
  Backend: ["Node.js", "NestJS", "Express.js", "TypeScript", "Microservices"],
  Databases: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"],
  Messaging: ["RabbitMQ", "BullMQ"],
  DevOps: ["Docker", "AWS", "CI/CD", "Linux", "Nginx"],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-white">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-semibold mb-3 text-gray-200">
                {group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="bg-gray-800 text-gray-200 border border-gray-700 px-3 py-1 rounded text-sm"
                  >
                    {s}
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
