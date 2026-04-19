"use client";

import { Hero } from "@/components/Hero";
import { ProgramsBanner } from "@/components/ProgramsBanner";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { AboutSection } from "@/components/AboutSection";
import { ReasonsSection } from "@/components/ReasonsSection";
import { EventsSection } from "@/components/EventsSection";

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