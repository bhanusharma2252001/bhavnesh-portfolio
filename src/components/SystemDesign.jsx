export default function SystemDesign() {
  return (
    <section id="system-design" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6">
        How I Design Scalable Systems
      </h2>

      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <p>
          I design backend systems with scalability, reliability, and
          performance in mind. My approach focuses on clean architecture,
          predictable behavior, and gradual scaling.
        </p>

        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>API Design:</strong> RESTful APIs with clear contracts,
            validation, versioning, and idempotency.
          </li>

          <li>
            <strong>Database Strategy:</strong> Proper indexing, query
            optimization, pagination, and choosing the right storage
            (SQL vs NoSQL).
          </li>

          <li>
            <strong>Caching:</strong> Redis-based caching for hot paths,
            rate-limiting, and reducing database load.
          </li>

          <li>
            <strong>Async Processing:</strong> Background workers using
            BullMQ / RabbitMQ for long-running and high-throughput tasks.
          </li>

          <li>
            <strong>Microservices Mindset:</strong> Loosely coupled services,
            message-driven communication, and fault isolation.
          </li>

          <li>
            <strong>Observability:</strong> Structured logging, monitoring,
            and proactive alerting for production systems.
          </li>
        </ul>
      </div>
    </section>
  );
}
