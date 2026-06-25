import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import { Helmet } from "react-helmet-async";
import AboutSection from "../components/homepage/about";
import Blog from "../components/homepage/blog";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/projects";
import Skills from "../components/homepage/skills";
import ServicesSection from "../components/homepage/services";
import StatsSection from "../components/homepage/stats";
import FAQSection from "../components/homepage/faq";
import TestimonialsSection from "../components/homepage/testimonials";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      // Check if devUsername is configured
      if (!personalData.devUsername || personalData.devUsername.trim() === "") {
        console.warn(
          "devUsername is not configured in personal-data.js. Blogs will not be displayed."
        );
        setBlogs([]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://dev.to/api/articles?username=${personalData.devUsername}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        const filtered = data
          .filter((item) => item?.cover_image)
          .sort(() => Math.random() - 0.5);
        setBlogs(filtered);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div suppressHydrationWarning>
      <Helmet>
        <title>Sathish G | Flutter Developer & Full Stack Engineer | Tamil Nadu, India</title>
        <meta name="description" content="Hire Sathish G, a top Flutter Developer & Full Stack Engineer in Tamil Nadu, India. 2+ years experience building mobile apps, React web apps, and AWS setups." />
        <link rel="canonical" href="https://sathish.qzz.io" />
        <meta property="og:title" content="Sathish G | Flutter Developer & Full Stack Engineer | Tamil Nadu, India" />
        <meta property="og:description" content="Hire Sathish G, a top Flutter Developer & Full Stack Engineer in Tamil Nadu, India. 2+ years experience building mobile apps, React web apps, and AWS setups." />
        <meta property="og:url" content="https://sathish.qzz.io" />
        <meta name="twitter:title" content="Sathish G | Flutter Developer & Full Stack Engineer | Tamil Nadu, India" />
        <meta name="twitter:description" content="Hire Sathish G, a top Flutter Developer & Full Stack Engineer in Tamil Nadu, India. 2+ years experience building mobile apps, React web apps, and AWS setups." />
      </Helmet>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <TestimonialsSection />
      <FAQSection />
      {!loading && <Blog blogs={blogs} />}
      <ContactSection />
    </div>
  );
}

export default Home;
