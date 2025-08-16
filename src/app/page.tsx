"use client";

export default function () {
  return (
    <div className="bg-background text-white font-sans min-h-screen">
      {/* Главная секция */}
      <section className="relative flex flex-col items-center justify-center min-h-screen p-4 md:p-8 text-center overflow-hidden">
        {/* Анимированный фон */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 5 0 L 0 0 0 5"
                  fill="none"
                  stroke="#222"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 space-y-6 md:space-y-8">
          {/* <div className="text-3xl md:text-5xl font-bold">
            <TypingText text="Hi, I'm Daniil Pavlov" />
          </div> */}
          <div className="text-xl md:text-3xl text-gray-400">
            Fullstack Developer
          </div>
          <p className="max-w-xl text-md md:text-lg text-gray-300">
            A software engineer with almost 3 years of experience in building
            large-scale web applications and innovative software solutions.
          </p>
          {/* <div className="flex justify-center space-x-4">
            <GlassButton onClick={() => scrollToSection(aboutRef)}>About Me</GlassButton>
            <GlassButton onClick={() => window.open('https://github.com/your-github-profile', '_blank')}>My GitHub</GlassButton>
          </div> */}
        </div>
      </section>

      {/* Секция "Обо мне" */}
      <section className="container mx-auto p-4 md:p-12 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
            <p className="text-md md:text-lg text-gray-300 max-w-lg">
              I got into programming early on and started my career at 16 as a
              Fullstack Developer Intern. Now, at 18, I am a lead developer on
              my team. My biggest achievement is independently creating a
              full-time software solution for analysts, built with Next.js,
              shadcn/ui, Zod, Zustand, and other modern technologies, with a
              codebase of about 10,000 lines.
            </p>
          </div>
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl animate-pulse-slow"></div>
            <div className="relative p-2 rounded-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://placehold.co/500x500/000000/FFFFFF?text=Your+Photo+Here"
                alt="Profile Photo"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Навыки" */}
      <section className="container mx-auto p-4 md:p-12 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {[
            "Node.js",
            "React",
            "TypeScript",
            "Golang",
            "PostgreSQL",
            "Oracle",
            "Linux",
            "Docker",
            "Git",
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
            >
              <h3 className="text-xl md:text-2xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-md md:text-lg text-gray-300 max-w-3xl">
          <p>
            I am a fullstack developer with extensive experience in creating
            large-scale web applications and Telegram bots. I have a solid
            command of Linux, Docker, and Git. I quickly grasp new tasks, am
            open to learning new technologies, know how to plan, and pay
            attention to code quality. I am fluent in English, which is
            confirmed by certificates. I am currently actively studying Data
            Science in a Yandex Praktikum course and plan to deepen my expertise
            in this field.
          </p>
        </div>
      </section>

      {/* Секция "Портфолио" */}
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
              description:
                "A fullstack application with a PostgreSQL database.",
              github: "https://github.com/your-project-link",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20 cursor-pointer"
              onClick={() => window.open(project.github, "_blank")}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="text-blue-400">View on GitHub →</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Daniil Pavlov. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
