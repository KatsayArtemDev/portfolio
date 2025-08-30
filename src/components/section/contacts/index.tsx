import Tag from "@/components/common/tag";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <section id="contacts">
      <div className="flex flex-col w-full gap-16">
        <div className="text-center md:text-start">
          <Tag title="#Contacts" />
        </div>
        <div className="liquid-glass p-6 md:p-12 flex flex-col">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Let's build something great together
          </h2>

          <div className="flex justify-center mb-8">
            <a
              href="/Кацай Артём.pdf"
              download
              className="liquid-glass liquid-button flex justify-center gap-3 font-bold p-6 rounded-full"
            >
              <Download /> Download My Resume (PDF)
            </a>
          </div>

          <div className="flex justify-center gap-12">
            <Link
              href="https://hh.ru/resume/f0f44d69ff0d742d780039ed1f556761764665"
              target="_blank"
            >
              <img
                src={`/icons/hh.png`}
                className="w-14 h-14 hover:scale-110 duration-100"
              />
            </Link>
            <Link href="https://t.me/katsay_artem" target="_blank">
              <img
                src={`/icons/tg.svg`}
                className="w-14 h-14 hover:scale-110 duration-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
