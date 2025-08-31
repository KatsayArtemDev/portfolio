import Footer from "@/components/footer";
import { Section } from "@/components/section";

export default function () {
  return (
    <div className="w-full md:max-w-6xl">
      <Section.Main />
      <Section.About />
      <Section.Experience />
      <Section.Skills />
      <Section.Studing />
      <Section.Projects />
      <Section.Contacts />
      <Footer />
    </div>
  );
}
