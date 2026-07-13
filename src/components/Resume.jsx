export default function Resume() {
  return (
    <section id="resume" className="bg-gray-900 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>

        <p className="text-gray-400 leading-7 mb-10">
          Download my resume for a quick overview of my experience, projects,
          and technical expertise.
        </p>

        <a
          href="/Resume_NodeJS_Bhavnesh.pdf"
          download
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-200"
        >
          Download Resume
        </a>

        <p className="mt-4 text-sm text-gray-500">PDF • Updated July 2026</p>
      </div>
    </section>
  );
}
