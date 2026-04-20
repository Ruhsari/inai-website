"use client";

import Image from "next/image";
import { Container, Title, Text, Button } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* 1. Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Студенты INAI"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Темный оверлей, чтобы текст лучше читался на мобилках */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
      </div>

      <Container size="lg" className="relative z-10 h-full flex items-end pb-12 md:pb-20">
        {/* 2. Синяя карточка с контентом */}
        <div className="bg-[#1A235E] p-8 md:p-12 text-white max-w-[600px] shadow-2xl rounded-sm">
          <Title 
            order={1} 
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-[32px] md:text-[35px] text-[#FFFFFF] uppercase tracking-wider mb-16">
            INAI: Создаем код будущего
          </Title>
          
          <Text className="text-sm md:text-base mb-8 leading-relaxed opacity-90 font-light">
            Кыргызско-Германский институт прикладной информатики (КГИПИ) — 
            единственный вуз в образовательном секторе Кыргызстана, 
            специализирующийся в области компьютерных наук.
          </Text>

          <Button 
            variant="white" 
            color="#1A235E"
            size="lg"
            radius="xs"
            rightSection={<IconArrowUpRight size={20} />}
            className="text-[#1A235E] font-bold px-8 hover:bg-gray-100 transition-colors"
          >
            Все направления
          </Button>
        </div>
      </Container>
    </section>
  );
}