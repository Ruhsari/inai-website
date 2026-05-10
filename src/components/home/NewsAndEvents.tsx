"use client";

import { Container, Title, Text, Button, ActionIcon } from '@mantine/core';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

// Импортируем данные и тип
import { newsData, NewsItem } from '../../data/newsData';

export function NewsAndEvents() {
  return (
    <section id="news" className="relative w-full overflow-hidden">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Белый фон и Заголовок */}
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
        
        {/* Фоновое изображение */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <Image 
            src="/images/news-bg.svg"
            alt="Декоративный фон" 
            fill 
            className="object-cover"
          />
        </div>

        <Container size="lg" className="relative z-10">
          
          {/* СЕТКА КАРТОЧЕК */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-64 mb-16">
            {newsData.slice(0, 4).map((item: NewsItem) => (
              <Link 
                href={`/news/${item.id}`} // <-- ССЫЛКА НА ПОДРОБНУЮ СТРАНИЦУ НОВОСТИ
                key={item.id} 
                className="no-underline bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col h-[460px] transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                {/* Картинка новости */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized 
                  />
                </div>

                {/* Текст новости */}
                <div className="p-6 flex flex-col flex-grow">
                  {item.date && (
                    <Text size="xs" c="dimmed" mb={8} fw={500}>
                      {item.date}
                    </Text>
                  )}

                  <Title order={4} mb={12} className="text-[#1A235E] font-bold text-[15px] leading-snug line-clamp-2 group-hover:text-[#2A347E]">
                    {item.title}
                  </Title>

                  <Text c="dimmed" size="sm" className="leading-relaxed line-clamp-4 flex-grow">
                    {item.description}
                  </Text>
                  
                  {/* Иконка стрелки */}
                  <div className="flex justify-end mt-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-300 group-hover:text-[#1A235E] group-hover:bg-gray-100 transition-all">
                      <IconArrowRight size={20} stroke={2.5} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* КНОПКА "Все новости" */}
          <div className="flex justify-end mt-8">
            <Button 
              component={Link}
              href="/events?tab=news" 
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