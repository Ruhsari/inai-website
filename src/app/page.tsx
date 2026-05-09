"use client";

import { Hero } from "@/components/home/Hero";
import { ProgramsBanner } from "@/components/home/ProgramsBanner";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { AboutSection } from "@/components/home/AboutSection";
import { ReasonsSection } from "@/components/home/ReasonsSection";
import { EventsSection } from "@/components/home/EventsSection";

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