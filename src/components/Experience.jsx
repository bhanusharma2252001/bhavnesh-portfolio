export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-10">

        {/* Collectcent */}
        <div>
          <h3 className="font-semibold text-lg">
            Software Engineer — Collectcent Digital Media Pvt Ltd
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Dec 2025 – Present · Gurugram, Haryana
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
             Currently managing their internal adtech platform
            </li>
          </ul>
        </div>

        
        {/* Loop Methods */}
        <div>
          <h3 className="font-semibold text-lg">
            Backend Developer — Loop Methods
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Mar 2024 – Present · Noida, UP
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Designed and maintained production backend for a
              subscription-based used-book marketplace.
            </li>
            <li>
              Managed Dockerized services, CI/CD pipelines, and AWS
              infrastructure.
            </li>
            <li>
              Mentored junior developers and ensured scalable system design.
            </li>
          </ul>
        </div>

        {/* Perfectiongeeks */}
        <div>
          <h3 className="font-semibold text-lg">
            Backend Developer — Perfectiongeeks Technologies
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Mar 2022 – Feb 2024 · Gurugram, Haryana
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Led development of large-scale web scrapers handling 1M+
              e-commerce products.
            </li>
            <li>
              Built reselling management systems for 30K+ products and 20K+
              vendors.
            </li>
          </ul>
        </div>

        {/* Internship */}
        <div>
          <h3 className="font-semibold text-lg">
            Backend Developer Intern — Bluehelmet Pvt Ltd
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            Nov 2021 – Feb 2022 · New Delhi
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Developed backend APIs for a job portal using Node.js and
              PostgreSQL.
            </li>
            <li>
              Integrated third-party APIs for payments, WhatsApp, SMS, and
              email notifications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
