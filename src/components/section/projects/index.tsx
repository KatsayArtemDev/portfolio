import Tag from "@/components/common/tag";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import Link from "next/link";
import ReadMore from "./read-more";

const PROJECTS_DATA = [
  {
    title: "Goods Monitoring",
    createdAt: "June 2024",
    instruments: [
      { name: "Typescript", isSec: true },
      { name: "PostgreSQL", isSec: true },
      { name: "Grammy.js" },
      { name: "Playwright" },
      { name: "Pino" },
    ],
    description:
      "A powerful Telegram bot built with TypeScript that keeps track of goods, prices, and availability in real time. It automatically parses data from your chosen sources, stores it in PostgreSQL, and alerts you when better deals are found — including the ability to search for cheaper prices by category (e.g., books, tools, electronics).",
    link: "https://github.com/KatsayArtemDev/goods-monitoring",
    videoSrc: "/goods/promo.mp4",
  },
  {
    title: "Verification",
    createdAt: "October 2024",
    instruments: [
      { name: "Golang", isSec: true },
      { name: "PostgreSQL", isSec: true },
      { name: "HTML", isSec: true },
      { name: "Gomail" },
      { name: "Zap" },
    ],
    description:
      "Verification is a Golang project focused on implementing identity or transaction verification workflows. It offers modular components for HTTP endpoints, persistent storage, and verification logic, making it easy to build secure services such as 2FA, email/SMS verification, or token-based access validation.",
    link: "https://github.com/KatsayArtemDev/verification",
  },
  {
    title: "Trend Hunter",
    createdAt: "January 2025",
    instruments: [
      { name: "Golang", isSec: true },
      { name: "Docker", isSec: true },
      { name: "Go-talib" },
      { name: "Invest-api-go-sdk" },
      { name: "Zap" },
    ],
    description:
      "A pragmatic, container-ready trading bot written in Go. Trend Hunter provides a solid foundation for building and running trend-following or momentum-based strategies with a simple operational model (local Go binary or Docker/Compose).",
    link: "https://github.com/KatsayArtemDev/trend-hunter",
  },
  {
    title: "Portfolio",
    createdAt: "August 2025",
    instruments: [
      { name: "Typescript", isSec: true },
      { name: "Next.js", isSec: true },
      { name: "Tailwind" },
      { name: "Shadcn" },
    ],
    description:
      "A pragmatic, container-ready trading bot written in Go. Trend Hunter provides a solid foundation for building and running trend-following or momentum-based strategies with a simple operational model (local Go binary or Docker/Compose).",
    link: "https://github.com/KatsayArtemDev/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {PROJECTS_DATA.map(
            (
              { title, createdAt, instruments, description, link, videoSrc },
              pi
            ) => (
              <div
                key={pi}
                className="relative liquid-glass p-4 space-y-4 flex flex-col justify-between overflow-hidden"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {instruments.map((instrument, ii) => (
                    <Badge
                      key={ii}
                      variant={instrument.isSec ? "secondary" : "outline"}
                    >
                      {instrument.name}
                    </Badge>
                  ))}
                </div>
                <h5 className="line-clamp-4 text-base/7 text-gray-300">
                  {description}
                </h5>
                <div className="flex justify-between gap-4">
                  <ReadMore
                    title={title}
                    createdAt={createdAt}
                    description={description}
                    instruments={instruments}
                    link={link}
                    videoSrc={videoSrc}
                  />
                  <Link
                    href={link}
                    target="_blank"
                    className="flex items-center justify-center underline w-full py-2 px-4 gap-2 external-link"
                  >
                    Open Source
                  </Link>
                </div>
                <Github
                  className="absolute w-100 h-100 -z-10 -right-50 -top-5 -rotate-12 opacity-10"
                  color="grey"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
