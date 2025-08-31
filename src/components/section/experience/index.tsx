import Tag from "@/components/common/tag";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TimelineData {
  tab: string;
  title: string;
  subtitle: string;
  opacity: string;
}

const TIMELINE_DATA: TimelineData[] = [
  {
    tab: "lead",
    title: "Lead Developer",
    subtitle: "FRANK TECH • 2025 (August)",
    opacity: "opacity-100",
  },
  {
    tab: "middle",
    title: "Junior / Middle Developer",
    subtitle: "FRANK TECH • 2024",
    opacity: "opacity-80",
  },
  {
    tab: "intern",
    title: "Intern Developer",
    subtitle: "FRANK TECH • 2023",
    opacity: "opacity-60",
  },
];

interface ContentData {
  tab: string;
  tasks: {
    name: string;
    isPlan?: boolean;
    badges: string[];
  }[];
}

const CONTENT_DATA: ContentData[] = [
  {
    tab: "lead",
    tasks: [
      {
        name: "Statistics Implementation from Collection to Display in Software",
        isPlan: true,
        badges: [
          "RabbitMQ",
          "TypeScript",
          "PostgreSQL",
          "Next.js",
          "Server Actions/API",
          "Zustand",
          "Zod",
          "Tailwind",
          "Shadcn",
        ],
      },
      {
        name: "Implemented advanced search with filters in software",
        isPlan: true,
        badges: [
          "TypeScript",
          "PostgreSQL",
          "Redis",
          "Next.js",
          "Server Actions/API",
          "Zustand",
          "Zod",
          "Tailwind",
          "Shadcn",
        ],
      },
      {
        name: "Ensured Seamless Microservices Scaling and Management",
        isPlan: true,
        badges: ["Golang", "Redis", "RabbitMQ", "Node.js", "Docker"],
      },
    ],
  },
  {
    tab: "middle",
    tasks: [
      {
        name: "Solo-Engineered Full-Time Software Solution for Analysts",
        badges: [
          "TypeScript",
          "Oracle",
          "PostgreSQL",
          "Next.js",
          "Server Actions/API",
          "Docker",
          "Nginx",
          "Zustand",
          "Zod",
          "Tailwind",
          "Shadcn",
        ],
      },
      {
        name: "Rewrote the Company’s Admin Panel In Team",
        badges: [
          "TypeScript",
          "Oracle",
          "Next.js",
          "Node.js",
          "API",
          "Tailwind",
          "Shadcn",
        ],
      },
      {
        name: "Script to Monitor Link Stability and Notify Clients via Telegram Bot",
        badges: ["TypeScript", "Oracle", "Node.js", "Docker", "Grammy.js"],
      },
      {
        name: "URL Stability Monitoring Project",
        badges: ["TypeScript", "Oracle", "Node.js", "Docker"],
      },
      {
        name: "Improving Internal Project Microservices",
        badges: ["TypeScript", "Oracle", "Node.js", "Playwright"],
      },
      {
        name: "Authored SQL Code Formatting Standards for the IT Team",
        badges: ["README", "PostgreSQL", "Oracle"],
      },
      {
        name: "Authored Code of Conduct for the IT Team",
        badges: ["README", "TypeScript", "Golang"],
      },
    ],
  },
  {
    tab: "intern",
    tasks: [
      {
        name: "Rewrote a Small Internal Company Application",
        badges: ["TypeScript", "Next.js", "API", "MUI"],
      },
      {
        name: "Rewrote a Small Internal Company Application",
        badges: ["TypeScript", "Next.js"],
      },
      {
        name: "Backend for the in-app reporting feature",
        badges: ["TypeScript", "Node.js", "Hapi"],
      },
      {
        name: "Project Migration to ESM",
        badges: ["ECMAScript Modules"],
      },
      {
        name: "Rewriting Tests in TypeScript",
        badges: ["TypeSript", "JavaScript"],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Experience" />
        </div>
        <div className="liquid-glass p-6 md:p-12 flex flex-col">
          <h2 className="text-3xl font-bold mb-8">
            The Fullstack Developer&apos;s Path
          </h2>

          <Tabs
            defaultValue="lead"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="relative flex">
              <div className="w-0.5 bg-gradient-to-b from-cyan-400 rounded-full animate-pulse mr-5 md:mr-10" />
              <TabsList className="h-full flex flex-col gap-8 justify-between w-full">
                {TIMELINE_DATA.map((item) => (
                  <TabsTrigger
                    key={item.tab}
                    value={item.tab}
                    className={cn(
                      "py-5 rounded-2xl transition duration-300 cursor-pointer hover:border-white/40 liquid-glass w-full flex justify-start",
                      item.opacity
                    )}
                  >
                    <div className="dot" />
                    <div className="ml-5 flex flex-col items-start gap-2">
                      <h3 className="md:text-2xl">{item.title}</h3>
                      <h4 className="opacity-50">{item.subtitle}</h4>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="w-full liquid-glass p-3 h-96 overflow-y-auto">
              {CONTENT_DATA.map((content) => (
                <TabsContent key={content.tab} value={content.tab}>
                  {content.tasks.map((task, ti) => (
                    <div key={ti} className="liquid-glass p-3 space-y-3 mb-3">
                      <div className="flex items-start gap-2">
                        <h2 className="text-xl">{task.name}</h2>
                        {task.isPlan && (
                          <Badge variant="secondary">Planning</Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {task.badges.map((badge, bi) => (
                          <Badge key={bi}>{badge}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
