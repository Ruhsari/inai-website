// src/app/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Hero from "@/components/sections/Hero";
import AboutInstitute from "@/components/sections/AboutInstitute";
import WhyUs from "@/components/sections/WhyUs";
import Programs from "@/components/sections/Programs";
import News from "@/components/sections/News";
import Events from "@/components/sections/Events";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Header />
      <main className="flex-col items-center justify-between w-full">
        {/*<Hero />*/}
        <AboutInstitute />
        <WhyUs />
        <Programs />
        <News />
        <Events />
      </main>
      <Footer />
    </div>
  );
}