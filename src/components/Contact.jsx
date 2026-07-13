const contacts = [
  {
    label: "Email",
    value: "bhanusharma252001@gmail.com",
    href: "mailto:bhanusharma252001@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "bhavnesh-sharma",
    href: "https://www.linkedin.com/in/bhavnesh-sharma-208134177/",
  },
  {
    label: "GitHub",
    value: "github.com/bhanusharma2252001",
    href: "https://github.com/bhanusharma2252001",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-4">
        Let's Connect
      </h2>

      <p className="max-w-2xl text-gray-400 leading-7 mb-12">
        I'm currently open to Backend Engineer opportunities, freelance
        projects, and collaborations involving scalable backend systems,
        distributed architectures, and cloud-native applications.
      </p>

      <div className="space-y-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-800 p-5 transition-colors duration-200 hover:border-gray-300 dark:hover:border-gray-700"
          >
            <div>
              <p className="text-sm text-gray-500">
                {contact.label}
              </p>

              <p className="font-medium">
                {contact.value}
              </p>
            </div>

            <span className="text-gray-400">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}