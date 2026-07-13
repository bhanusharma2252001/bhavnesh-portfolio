export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">Bhavnesh Sharma</h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-7">
          Backend Developer · Node.js · NestJS
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 leading-7 mb-10">
          {" "}
          Building scalable APIs, microservices and cloud-native backend systems
          with Node.js, NestJS and AWS.
        </p>
        <a
          href="#projects"
          className="bg-white text-gray-950 px-6 py-3 rounded font-medium hover:bg-gray-200"
        >
          View Projects
        </a>

        <a
          href="https://github.com/bhanusharma2252001"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-700 px-6 py-3 rounded font-medium hover:border-gray-500"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}
