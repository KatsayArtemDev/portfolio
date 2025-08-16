import Tag from "@/components/common/tag";

export default function About() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <Tag title="#About Me" />
          <p className="text-md md:text-lg text-gray-300">
            I got into programming early on and started my career at 16 as a
            Fullstack Developer Intern in FRANK RG tech team. Now, at 18, I am a
            lead developer.
          </p>
          <p className="text-md md:text-lg text-gray-300">
            Graduated from school with a gold medal. Passed exams with 270
            points and entered Moscow State University MIREA. Faculty of
            Artificial Intelligence Technologies and Data Science. The program
            is implemented with the support of Yandex.
          </p>
          <p className="text-md md:text-lg text-gray-300">
            My biggest achievement at the company was independently creating a
            full-time software solution for analysts, built with all the
            features of Next.js 15, with a codebase of about 10,000 lines.
          </p>
        </div>
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-0 liquid-glass" />
          <div className="backdrop-blur-md p-4 rounded-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="/photo.png"
              alt="Profile Photo"
              className="w-full h-full rounded-2xl object-cover saturate-150"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
