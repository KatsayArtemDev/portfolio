import Tag from "@/components/common/tag";

const PARAGRAPHS: string[] = [
  "I got into programming early on and started my career at 16 as a Fullstack Developer Intern in FRANK RG tech team. Now, at 18, I am a lead developer.",
  "Graduated from school with a gold medal. Passed exams with 270 points and entered Moscow State University MIREA. Faculty of Artificial Intelligence Technologies and Data Science. The program is implemented with the support of Yandex.",
  "My biggest achievement at the company was independently creating a full-time software solution for analysts, built with all the features of Next.js 15, with a codebase (SLOC) of about 10,000 lines.",
];

export default function About() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <Tag title="#About Me" />
          {PARAGRAPHS.map((paragraph, i) => (
            <p key={i} className="text-gray-300 md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute rounded-2xl inset-0 liquid-glass" />
          <div className="backdrop-blur-md p-4 transition-transform duration-500 hover:scale-105">
            <img
              src="/photo.png"
              alt="Profile Photo"
              className="w-full h-auto rounded-2xl object-cover saturate-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
