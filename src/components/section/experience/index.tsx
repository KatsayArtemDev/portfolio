import Tag from "@/components/common/tag";

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col w-full">
        <Tag title="#Experience" />
        <div className="liquid-glass h-screen">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[var(--purple)] to-[var(--cyan)] -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
}
