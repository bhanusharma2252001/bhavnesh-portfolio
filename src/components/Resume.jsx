export default function Resume() {
  return (
    <section id="resume" className="bg-gray-900 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Resume
        </h2>

        <p className="text-gray-400 mb-8">
          Download resume for detailed experience and project work.
        </p>

        <a
          href="/Resume_NodeJS_Bhavnesh.pdf"
          download
          className="inline-block bg-white text-gray-900 px-6 py-3 rounded font-medium hover:bg-gray-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
