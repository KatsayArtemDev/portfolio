import Tag from "@/components/common/tag";
import { Badge } from "@/components/ui/badge";

const INSTRUMENTS = [
  { icon: "python", name: "Python", badge: "Data Science" },
  { icon: "go", name: "Golang", badge: "Backend" },
  { icon: "typescript", name: "TypeScript", badge: "Fullstack" },
  { icon: "nextjs", name: "Next.js", badge: "Fullstack" },
  { icon: "tailwind", name: "Tailwind", badge: "Frontend" },
  { icon: "nodejs", name: "Node.js", badge: "Backend" },
  { icon: "linux", name: "Linux", badge: "DevOps" },
  { icon: "docker", name: "Docker", badge: "DevOps" },
  { icon: "postgresql", name: "PostgreSQL", badge: "Database" },
  { icon: "oracle", name: "Oracle", badge: "Database" },
  { icon: "redis", name: "Redis", badge: "Database" },
  { icon: "git", name: "Git", badge: "VCS" },
];

export default function Skills() {
  return (
    <section id="tech">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Tech Stack & My Skills" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {INSTRUMENTS.map((instrument, index) => (
            <div
              key={index}
              className="liquid-glass p-6 flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-2 fade-in"
            >
              <img
                src={`/icons/${instrument.icon}.svg`}
                className="w-16 h-16"
              />
              <div className="text-lg font-semibold">{instrument.name}</div>
              <Badge variant="secondary">{instrument.badge}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
