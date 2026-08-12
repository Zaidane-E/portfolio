import {
  Hero,
  FeaturedProjects,
  Experience,
  Skills,
  Education,
  Languages,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Languages />
      <Education />
    </>
  );
}
