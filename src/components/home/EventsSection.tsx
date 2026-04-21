"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

// Категории для фильтрации
const categories = ['Предстоящие', 'Хакатоны', 'Конференции', 'Студенческая жизнь'];

// Временные данные мероприятий
const events = [
  {
    id: 1,
    category: 'Хакатоны',
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать инновационные проекты, решать реальные задачи и показать силу командной работы.',
    image: '/images/ev-1.png',
  },
  {
    id: 2,
    category: 'Студенческая жизнь',
    title: 'День открытых дверей в INAI!',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать инновационные проекты, решать реальные задачи и показать силу командной работы. Хакатон',
    image: '/images/ev-2.png',
  },
  {
    id: 3,
    category: 'Студенческая жизнь',
    title: 'Благотворительная ярмарка в поддержку детского дома',
    description: 'Готовы бросить вызов своим идеям и навыкам? Тогда наш хакатон — именно для вас! Это событие объединяет студентов разных направлений и институтов, чтобы вместе создавать инновационные проекты, решать реальные задачи и показать силу командной работы. Хакатон',
    image: '/images/ev-3.png',
  },
];

export function EventsSection() {
  const [activeTab, setActiveTab] = useState('Предстоящие');

  // Логика фильтрации: если "Предстоящие", показываем все (или можно настроить свою логику), 
  // иначе фильтруем по категории
  const filteredEvents = activeTab === 'Предстоящие' 
    ? events 
    : events.filter(event => event.category === activeTab);

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <Container size="lg">
        
        {/* ЗАГОЛОВОК */}
        <Title order={2} className="text-[44px] md:text-[52px] font-extrabold text-[#1A235E] mb-10">
          Мероприятия
        </Title>

{/* ФИЛЬТРЫ (Вкладки) */}
        <div className="flex flex-wrap gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-md text-[15px] font-semibold transition-all duration-200 border-2 ${
                activeTab === category
                  ? 'bg-[#1A235E] text-white border-[#1A235E]'
                  : 'bg-white text-[#1A235E] border-[#1A235E] hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* СПИСОК КАРТОЧЕК */}
        <div className="flex flex-col gap-8">
          {filteredEvents.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row p-4 md:p-6 gap-8 items-center"
            >
              {/* Левая часть: Изображение */}
              <div className="relative w-full md:w-[45%] h-[240px] md:h-[280px] shrink-0 rounded-xl overflow-hidden">
                <Image 
                  src={event.image} 
                  alt={event.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              {/* Правая часть: Контент */}
              <div className="w-full md:w-[55%] flex flex-col justify-center py-4 pr-4">
                <Title order={3} className="text-[#1A235E] font-bold text-2xl md:text-[28px] leading-tight mb-4">
                  {event.title}
                </Title>
                
                <Text className="text-gray-400 text-[15px] leading-relaxed mb-8 line-clamp-4">
                  {event.description}
                </Text>

                {/* Интерактивная кнопка-ссылка */}
                <Group gap="md" className="cursor-pointer group w-fit">
                  <div className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center text-white group-hover:bg-[#1A235E] transition-colors duration-300">
                    <IconArrowRight size={20} stroke={2} />
                  </div>
                  <Text className="text-[#1A235E] font-bold text-[15px]">
                    Узнать больше
                  </Text>
                </Group>
              </div>
            </div>
          ))}

          {/* Сообщение, если по фильтру ничего не найдено */}
          {filteredEvents.length === 0 && (
            <Text className="text-gray-500 text-center py-10">
              В данной категории пока нет мероприятий.
            </Text>
          )}
        </div>
        
        {/* НОВАЯ КНОПКА "БОЛЬШЕ МЕРОПРИЯТИЙ" (Выровнена по правому краю) */}
        <div className="mt-12 flex justify-end">
          <Link 
            href="#" // Сюда можно будет вставить ссылку на страницу со всеми мероприятиями
            className="flex items-center gap-3 bg-[#1A235E] text-white px-8 py-3.5 rounded-md text-[15px] font-semibold hover:bg-[#11183b] transition-colors duration-200 shadow-sm"
          >
            Больше мероприятий
            <IconArrowRight size={18} stroke={2} />
          </Link>
        </div>

      </Container>
    </section>
  );
}