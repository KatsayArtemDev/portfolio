import Footer from "@/components/footer";
import About from "@/components/section/about";
import Contacts from "@/components/section/contacts";
import Experience from "@/components/section/experience";
import Main from "@/components/section/main";
import Projects from "@/components/section/projects";
import Skills from "@/components/section/skills";
import Study from "@/components/section/studing";

export default function () {
  return (
    <div className="w-full md:max-w-6xl">
      <Main />
      <About />
      <Experience />
      <Skills />
      <Study />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}
