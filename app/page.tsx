"use client";

import { Button, Container, Title, Text, Group, Card, SimpleGrid, AppShell } from "@mantine/core";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProgramsBanner } from "@/components/ProgramsBanner";
import { NewsAndEvents } from "@/components/NewsAndEvents";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { ReasonsSection } from "@/components/ReasonsSection";

export default function Home() {
  return (
    <AppShell header={{ height: 140 }} padding={0}
    className="flex flex-col min-h-screen bg-gray-50">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Hero />

        <AboutSection />

        <ReasonsSection />

        <ProgramsBanner />

        <NewsAndEvents />

      </AppShell.Main>

      <Footer />
    </AppShell>
  );
}