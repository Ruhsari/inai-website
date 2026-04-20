"use client";

import { Container, Title, Text, Group, List, ListItem } from '@mantine/core';
import Image from 'next/image';
import { IconSchool } from '@tabler/icons-react';

export default function AboutPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <Container size="lg">
        
        {/* ХЛЕБНЫЕ КРОШКИ / НАДЗАГОЛОВОК */}
        <Group gap={8} mb={20}>
          <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
          <Text className="text-[#1A235E] font-bold text-sm tracking-wide uppercase">
            О нас
          </Text>
        </Group>

        {/* ГЛАВНЫЙ ЗАГОЛОВОК */}
        <Title 
          order={1} 
          className="text-[36px] md:text-[48px] font-serif text-[#1A235E] leading-tight mb-12"
        >
          Знакомство с нашим Институтом
        </Title>

        {/* АКЦЕНТНЫЙ БЛОК (С синей линией) */}
        <div className="relative pl-8 py-2 mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#2B59C3]" />
          <Text className="text-gray-600 text-[18px] md:text-[20px] leading-relaxed font-medium">
            Кыргызско-Германский институт прикладной информатики (КГИПИ) — единственный вуз 
            в образовательном секторе Кыргызстана, специализирующийся в области компьютерных наук.
          </Text>
        </div>

        {/* ОСНОВНОЙ ТЕКСТ (Контентная часть) */}
        <div className="flex flex-col gap-6 text-gray-700 text-[16px] leading-[1.8] max-w-[900px] mb-20">
          <Text>
            Добро пожаловать на веб-сайт Кыргызско-Германского института прикладной информатики (INAI.KG)!
          </Text>
          
          <Text>
            Кыргызско-Германский институт прикладной информатики (КГИПИ) – единственный вуз в образовательном секторе 
            Кыргызстана, специализирующийся в области компьютерных наук.
          </Text>

          <Text>
            Миссией Института является расширение границ IT-образования в Кыргызской Республике за счет внедрения 
            инновационных образовательных программ германских вузов.
          </Text>

          <Text>
            В 2004 году на основании договора между Кыргызским государственным университетом строительства, транспорта и 
            архитектуры им. Н. Исанова (КГУСТА) и Западно-Саксонским университетом прикладных наук, г. Цвиккау (WHZ, Германия), 
            был открыт Кыргызско-Германский факультет информатики (КГФИ). В 2018 году факультет преобразован в самостоятельный 
            институт (INAI.KG).
          </Text>

          <Text>
            Образовательные программы бакалавриата и магистратуры разработаны совместно с Западно-Саксонским университетом 
            прикладных наук (WHZ) с учетом тенденций стремительно развивающихся IT-технологий.
          </Text>

          {/* СПИСКИ ПРОГРАММ */}
          <div className="pl-4 border-l border-gray-200 my-4">
            <Text className="font-bold text-[#1A235E] mb-2">На уровне бакалавриата (3 направления):</Text>
            <List spacing="xs" size="md" className="text-gray-700 mb-6" withPadding>
              <ListItem>Программные технологии</ListItem>
              <ListItem>Веб-информатика</ListItem>
              <ListItem>Медицинская информатика</ListItem>
            </List>

            <Text className="font-bold text-[#1A235E] mb-2">На уровне магистратуры (3 направления):</Text>
            <List spacing="xs" size="md" className="text-gray-700" withPadding>
              <ListItem>Предпринимательство в ИТ</ListItem>
              <ListItem>Программная инженерия</ListItem>
              <ListItem>Инновационный ИТ-менеджмент</ListItem>
            </List>
          </div>

          <Text>
            Совместно с WHZ Институт предлагает программы двойного диплома. Студенты имеют возможность 
            после успешного завершения 3-х курсов продолжить обучение в Германии и получить два диплома: кыргызский и немецкий.
          </Text>

          <Text>
            Интенсивное изучение немецкого и английского языков создает условия для участия студентов в стипендиальных 
            программах Германской службы академических обменов (DAAD).
          </Text>

          <Text>
            INAI.KG тесно сотрудничает с ИТ-компаниями Кыргызстана и Германии. Это позволяет адаптировать учебные планы 
            под реальные требования рынка и обеспечивать студентов местами для прохождения практики.
          </Text>
        </div>

        {/* ГАЛЕРЕЯ ИЗОБРАЖЕНИЙ */}
        <div className="flex flex-col gap-6">
          {/* Верхний ряд: 2 картинки */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden bg-gray-100">
              <Image 
                src="/images/photo-1.png" 
                alt="Студент INAI в VR очках" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[300px] md:h-[450px] rounded-xl overflow-hidden bg-gray-100">
              <Image 
                src="/images/photo-2.png" 
                alt="Студенты на стенде" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Нижний ряд: 1 широкая картинка */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden bg-gray-100">
            <Image 
              src="/images/photo-3.png" 
              alt="Выпускники INAI.KG" 
              fill 
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </Container>
    </div>
  );
}