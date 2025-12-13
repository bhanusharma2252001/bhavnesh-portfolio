export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-400 mb-6">
        Open to backend roles, system design work, and scalable product
        development.
      </p>

      <div className="space-y-3 text-gray-400">
        <p>
          📧 Email:{" "}
          <span className="text-white">
            bhanusharma252001@gmail.com
          </span>
        </p>

        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/bhavnesh-sharma-208134177/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            bhavnesh-sharma
          </a>
        </p>

        <p>
          🧑‍💻 GitHub:{" "}
          <a
            href="https://github.com/bhanusharma2252001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            github.com/bhanusharma2252001
          </a>
        </p>
      </div>
    </section>
  );
}
