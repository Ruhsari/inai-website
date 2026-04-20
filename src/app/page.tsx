"use client";

import { Hero } from "@/src/components/home/Hero";
import { ProgramsBanner } from "@/src/components/home/ProgramsBanner";
import { NewsAndEvents } from "@/src/components/home/NewsAndEvents";
import { AboutSection } from "@/src/components/home/AboutSection";
import { ReasonsSection } from "@/src/components/home/ReasonsSection";
import { EventsSection } from "@/src/components/home/EventsSection";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutSection />
            <ReasonsSection />
            <ProgramsBanner />
            <NewsAndEvents />
            <EventsSection />
        </>
    );
}