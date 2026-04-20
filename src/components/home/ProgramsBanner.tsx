"use client";

import { Container, Title, Text, Button, Group, Stack } from '@mantine/core';
import Image from 'next/image';
import { IconSchool, IconArrowUpRight } from '@tabler/icons-react';

const programs = [
  { title: 'Программные технологии', image: '/images/prog-tech.png' },
  { title: 'Прикладной анализ данных', image: '/images/data-analysis.png' },
  { title: 'Веб-информатика', image: '/images/web-info.png' },
  { title: 'Финансовый инжиниринг', image: '/images/fin-eng.png' },
];

export function ProgramsBanner() {
  return (
    <section className="py-24 bg-white">
      <Container size="lg">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* ЛЕВАЯ ЧАСТЬ: Текст */}
          <div className="w-full md:w-2/5 flex flex-col justify-center">
            
            {/* Надзаголовок с иконкой */}
            <Group gap={8} mb={24}>
              <IconSchool size={24} className="text-gray-700" stroke={1.5} />
              <Text className="text-gray-500 font-medium text-sm tracking-wide">
                Учебные программы
              </Text>
            </Group>

            {/* Главный слоган с разными цветами */}
            <div className="mb-10">
              <h2 
                style={{ fontFamily: "'Times New Roman', Times, serif" }} 
                className="text-[44px] md:text-[52px] font-bold leading-[1.15] text-[#1A235E]"
              >
                <span className="text-[#333333]">Находи свою сферу.</span><br />
                <span className="text-[#2B59C3]">Поступай.</span><br />
                Интегрируйся.
              </h2>
            </div>
            
            {/* Описание с синей вертикальной линией */}
            <div className="relative pl-7 mb-12">
              <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-[#1A235E]" />
              <Text className="text-gray-400 text-[15px] leading-relaxed">
                Кыргызско-Германский институт прикладной информатики (КГИПИ) — единственный вуз в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.
              </Text>
            </div>

            <Button 
              size="lg"
              className="bg-[#1A235E] hover:bg-[#283593] w-fit px-8 h-14 rounded-sm shadow-md"
              rightSection={<IconArrowUpRight size={20} />}
            >
              Узнать больше о программах
            </Button>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Вертикальные панели */}
          <div className="w-full md:w-3/5 flex gap-3 h-[500px]">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="relative flex-1 group cursor-pointer overflow-hidden rounded-sm transition-all duration-500 hover:flex-[1.5]"
              >
                {/* Изображение */}
                <Image 
                  src={program.image} 
                  alt={program.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Градиентное наложение для читаемости текста */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                {/* Вертикальный текст */}
                <div className="absolute bottom-20 left-10 -translate-x-1/2 w-full px-4">
                  <p className="text-white font-bold text-lg text-center whitespace-nowrap rotate-[-90deg] origin-center">
                    {program.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}