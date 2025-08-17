export default function Projects() {
  return (
    <section className="container mx-auto p-4 md:p-12 min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          {
            title: "Project One",
            description: "A large-scale web application for data analytics.",
            github: "https://github.com/your-project-link",
          },
          {
            title: "Project Two",
            description: "A Telegram bot for automated tasks.",
            github: "https://github.com/your-project-link",
          },
          {
            title: "Project Three",
            description: "A fullstack application with a PostgreSQL database.",
            github: "https://github.com/your-project-link",
          },
        ].map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <span className="text-blue-400">View on GitHub →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
