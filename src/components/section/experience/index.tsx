import Tag from "@/components/common/tag";

const TIMELINE_DATA = [
  {
    title: "Lead Developer",
    subtitle: "FRANK TECH • 2025–Present",
    opacity: "opacity-100",
  },
  {
    title: "Junior / Middle Developer",
    subtitle: "FRANK TECH • 2024",
    opacity: "opacity-80",
  },
  {
    title: "Intern Developer",
    subtitle: "FRANK TECH • 2023",
    opacity: "opacity-60",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative flex">
              <div className="w-0.5 bg-gradient-to-b from-cyan-400 rounded-full animate-pulse mr-10"></div>
              <div className="flex flex-col gap-12 justify-between w-full">
                {TIMELINE_DATA.map((item, i) => (
                  <div
                    key={i}
                    className={`h-24 liquid-glass w-full flex items-center ${item.opacity}`}
                  >
                    <div className="dot"></div>
                    <div className="ml-5">
                      <h3 className="text-2xl">{item.title}</h3>
                      <h4 className="text-md opacity-50">{item.subtitle}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-full liquid-glass"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
