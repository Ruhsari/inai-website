"use client";

import { Container, Title, Text, Button, ActionIcon } from '@mantine/core';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';

const newsItems = [
  {
    id: 1,
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать...',
    image: '/images/news-1.png', 
  },
  {
    id: 2,
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать...',
    image: '/images/news-2.png',
  },
  {
    id: 3,
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать...',
    image: '/images/news-3.png',
  },
  {
    id: 4,
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать...',
    image: '/images/news-4.png',
  },
];

export function NewsAndEvents() {
  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Белый фон и Заголовок слева сверху */}
      <div className="bg-white pt-24 pb-48">
        <Container size="lg">
          <Title 
            order={2} 
            className="text-[44px] md:text-[56px] font-extrabold text-[#1A235E] mb-8"
          >
            Новости
          </Title>
        </Container>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Темно-синий фон */}
      <div className="relative bg-[#111A50] pb-24 pt-48 -mt-64 z-0">
        
        {/* Фоновое изображение (линии) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image 
            src="/images/news-bg.svg"
            alt="Декоративный фон" 
            fill 
            className="object-cover"
          />
        </div>

        <Container size="lg" className="relative z-10">
          
          {/* СЕТКА КАРТОЧЕК (наезжает на белый фон) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-64 mb-16">
            {newsItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col h-[460px] transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                {/* Картинка новости */}
                <div className="relative h-48 w-full shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                {/* Текст новости */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-[#1A235E] font-bold text-[15px] leading-snug mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-4 flex-grow">
                    {item.description}
                  </p>
                  
                  {/* Иконка стрелки */}
                  <div className="flex justify-end mt-4">
                    <ActionIcon variant="transparent" className="text-gray-300 group-hover:text-[#1A235E] transition-colors">
                      <IconArrowRight size={20} stroke={2.5} />
                    </ActionIcon>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* КНОПКА "Все новости" */}
          <div className="flex justify-end mt-8">
            <Button 
              variant="outline" 
              color="white"
              size="md"
              radius="md"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-10"
            >
              Все новости
            </Button>
          </div>

        </Container>
      </div>
    </section>
  );
}