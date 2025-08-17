import Tag from "@/components/common/tag";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Projects" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {[0, 1, 2, 4].map((el, i) => (
            <div key={i} className="liquid-glass p-4 space-y-4">
              <h3 className="text-2xl font-bold">Goods Monitoring</h3>
              <div className="flex gap-2">
                <Badge variant="secondary">Typescript</Badge>
                <Badge variant="secondary">Postgresql</Badge>
                <Badge variant="outline">Grammy.js</Badge>
                <Badge variant="outline">Playwright</Badge>
                <Badge variant="outline">Pino</Badge>
              </div>
              <h5>
                A powerful Telegram bot built with TypeScript that keeps track
                of goods, prices, and availability in real time. It
                automatically parses data from your chosen sources, stores it in
                PostgreSQL...
              </h5>
              <div className="flex">
                <button>Read more</button>
                <button>Open Source</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
