"use client";

import About from "@/components/section/about";
import Experience from "@/components/section/experience";
import Main from "@/components/section/main";

export default function () {
  return (
    <>
      <Main />
      <About />
      <Experience />
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
          &copy; {new Date().getFullYear()} Katsay Artem. All rights reserved.
        </p>
      </footer>
    </>
  );
}
