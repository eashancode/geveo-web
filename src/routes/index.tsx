import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Solutions } from "@/components/site/Solutions";
import { Challenges } from "@/components/site/Challenges";
import { Approach } from "@/components/site/Approach";
import { TechStack } from "@/components/site/TechStack";
// import { Impact } from "@/components/site/Impact";
import { CaseStudies } from "@/components/site/CaseStudies";
import { TrustRecognition } from "@/components/site/TrustRecognition";
import { Testimonials } from "@/components/site/Testimonials";
import { Story } from "@/components/site/Story";
import { People } from "@/components/site/People";
import { Careers } from "@/components/site/Careers";
import { Innovation } from "@/components/site/Innovation";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Geveo — Engineering scalable digital solutions since 2008" },
      {
        name: "description",
        content:
          "Geveo is a digital engineering company delivering enterprise-grade software, cloud, data and specialised platforms — engineered in Colombo, trusted worldwide.",
      },
      { property: "og:title", content: "Geveo — Engineering scalable digital solutions" },
      {
        property: "og:description",
        content:
          "Trusted technology solutions for modern enterprises. 17+ years, 50+ senior engineers, 25+ tailored solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Solutions />
        <Challenges />
        <Approach />
        <TechStack />
        {/* <Impact /> */}
        <CaseStudies />
        <Testimonials />
        <TrustRecognition />
        <Story />
        <People />
        <Careers />
        <Innovation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
