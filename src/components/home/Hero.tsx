"use client";

import Image from "next/image";
import Link from "next/link";
import { Container, Title, Text, Button } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[600px] w-full mt-[20px] mb-40 md:mb-32">
      
      {/* 1. Фоновое изображение */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-bg.svg"
          alt="Студенты INAI"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Опечатка bg-transparфent исправлена на bg-transparent */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
      </div>

      <Container size="lg" className="relative z-10 h-full flex items-end">
        
        {/* 2. Синяя карточка с контентом */}
        <div className="bg-[#1A235E]/[0.97] p-8 md:p-12 text-white max-w-[700px] shadow-2xl rounded-sm translate-y-[20%] flex flex-col gap-[32px]">
          
          <Title 
            order={1} 
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
            className="text-[32px] md:text-[35px] text-[#FFFFFF] uppercase tracking-wider m-0"
          >
            INAI: Создаем код будущего
          </Title>
          
          <Text className="text-sm md:text-base leading-relaxed opacity-90 font-light m-0">
            Кыргызско-Германский институт прикладной информатики (КГИПИ) — 
            единственный вуз в образовательном секторе Кыргызстана, 
            специализирующийся в области компьютерных наук.
          </Text>

          
          <Button 
            component={Link}
            href="/applicants/programs"
            variant="white" 
            color="#1A235E"
            size="lg"
            radius="xs"
            rightSection={<IconArrowUpRight size={24} />}
            justify="space-between" 
            className="text-[#1A235E] font-bold hover:bg-gray-100 transition-colors"
            style={{ width: '320px', paddingLeft: '24px', paddingRight: '24px' }}
          >
            Все направления
          </Button>

        {/* 1. Фоновое изображение */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
              src="/images/hero-bg.svg"
              alt="Студенты INAI"
              fill
              priority
              className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
        </div>

        <Container size="lg" className="relative z-10 h-full flex items-end">

          {/* 2. Синяя карточка с контентом */}
          <div className="bg-[#1A235E]/[0.97] p-8 md:p-12 text-white max-w-[700px] shadow-2xl rounded-sm translate-y-1/2 flex flex-col gap-[32px]">

            <Title
                order={1}
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
                className="text-[32px] md:text-[35px] text-[#FFFFFF] uppercase tracking-wider m-0"
            >
              INAI: Создаем код будущего
            </Title>

            <Text className="text-sm md:text-base leading-relaxed opacity-90 font-light m-0">
              Кыргызско-Германский институт прикладной информатики (КГИПИ) —
              единственный вуз в образовательном секторе Кыргызстана,
              специализирующийся в области компьютерных наук.
            </Text>

            <Button
                component={Link}
                href="/applicants/programs"
                variant="white"
                color="#1A235E"
                size="lg"
                radius="xs"
                rightSection={<IconArrowUpRight size={24} />}
                justify="space-between"
                className="text-[#1A235E] font-bold hover:bg-gray-100 transition-colors"
                style={{ width: '320px', paddingLeft: '24px', paddingRight: '24px' }}
            >
              Все направления
            </Button>

          </div>
        </Container>
      </section>
  );
}
