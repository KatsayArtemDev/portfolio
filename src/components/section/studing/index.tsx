import Tag from "@/components/common/tag";
import Link from "next/link";

export default function Studing() {
  return (
    <section id="studing">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Studing" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="w-full space-y-6 liquid-glass p-6 md:p-10 h-full">
            <h3 className="text-3xl font-bold">Yandex Practicum</h3>
            <p className="text-gray-300 md:text-lg">
              I am learning to become a Data Science specialist and now study in
              the&nbsp;
              <Link
                href="https://practicum.yandex.ru/data-scientist"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                Advanced Data Science program at Yandex Practicum
              </Link>
              . During the course, I finished the SQL and PostgreSQL module and
              successfully completed the final project.
            </p>
            <p className="text-gray-300 md:text-lg">
              In addition to my studies, I also practice in my free time. I
              solve tasks on LeetCode and follow the steps from the&nbsp;
              <Link
                href="https://roadmap.sh/ai-data-scientist"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                AI & Data Scientist roadmap
              </Link>
              .
            </p>
            <p className="text-gray-300 md:text-lg">
              My main goal is to grow my skills in data analysis, machine
              learning, and AI, and to use this knowledge in real projects.
            </p>
          </div>
          <div className="w-full space-y-6 liquid-glass p-6 md:p-10 h-full">
            <h3 className="text-3xl font-bold">Skyeng</h3>
            <p className="text-gray-300 md:text-lg">
              I have been learning English for more than three years, and now my
              level is B2. I continue to study at Skyeng, where I practice three
              times a week.
            </p>
            <p className="text-gray-300 md:text-lg">
              As part of my learning, I often read IT documentation in English
              to improve my professional vocabulary. I also train my speaking
              skills with my teacher to become more confident in real
              communication.
            </p>
            <p className="text-gray-300 md:text-lg">
              My goal is to use English freely in my work as an IT specialist
              and in international projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
