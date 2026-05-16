"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, Title, Text, Group, Box, SimpleGrid } from '@mantine/core';
import { IconSearch, IconLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

// Импортируем базы данных (проверь правильность путей!)
import { eventsData } from '../../data/eventsData';
import { newsData } from '../../data/newsData';

// 1. Создаем базу данных всех статических страниц сайта
const sitePages = [
  // Главная и контакты
  { id: 'page-home', title: 'Главная', description: 'Кыргызско-Германский институт прикладной информатики (INAI.KG). Создаем код будущего.', link: '/' },
  { id: 'page-contacts', title: 'Контакты', description: 'Свяжитесь с нами: адрес (Анкара 1/5), телефон, email и социальные сети.', link: '/contacts' },
  { id: 'page-login', title: 'Авторизация / Вход', description: 'Вход в систему.', link: '/login' },

  // О нас (about)
  { id: 'page-about', title: 'О нас', description: 'Информация об институте, организационная структура, нормативные документы и партнеры.', link: '/about' },
  { id: 'page-organigram', title: 'Органиграмма', description: 'Организационная структура и руководство КГИПИ.', link: '/about/organigram' },
  { id: 'page-documents', title: 'Нормативные документы', description: 'Устав, лицензии, сертификаты и другие нормативные документы института.', link: '/about/documents' },
  { id: 'page-international', title: 'Международное сотрудничество', description: 'Информация о международных связях и партнерах КГИПИ.', link: '/about/international' },
  { id: 'page-partners', title: 'Наши партнеры', description: 'Компании и организации, сотрудничающие с INAI.KG.', link: '/about/partners' },

  // Абитуриентам (applicants)
  { id: 'page-applicants', title: 'Абитуриентам', description: 'Информация для поступающих, учебные программы, правила приема и стипендии.', link: '/applicants' },
  { id: 'page-programs', title: 'Учебные программы', description: 'Направления подготовки бакалавриата и магистратуры: программная инженерия, медицинская информатика, веб-информатика.', link: '/applicants/programs' },
  { id: 'page-rules', title: 'Правила приема', description: 'Правила и требования для поступления студентов в INAI.KG.', link: '/applicants/rules' },
  { id: 'page-daad', title: 'Стипендия DAAD', description: 'Информация о стипендиях германской службы академических обменов для студентов.', link: '/applicants/daad' },

  // Выпускникам (alumni)
  { id: 'page-alumni', title: 'Выпускникам', description: 'Информация для выпускников INAI.KG.', link: '/alumni' },
  { id: 'page-association', title: 'Ассоциация выпускников', description: 'Сообщество выпускников КГИПИ.', link: '/alumni/association' },
  { id: 'page-degree', title: 'Выпускникам магистратуры', description: 'Информация для выпускников магистерских программ.', link: '/alumni/degree' },
  { id: 'page-alumni-docs', title: 'Нормативные документы Ассоциации', description: 'Документы ассоциации выпускников.', link: '/alumni/docs' },
  { id: 'page-alumni-events', title: 'Мероприятия для выпускников', description: 'События и встречи ассоциации выпускников.', link: '/alumni/events' },
  { id: 'page-resumes', title: 'Резюме студентов', description: 'База резюме студентов и выпускников.', link: '/alumni/resumes' },
  { id: 'page-seniors', title: 'Выпускникам 4-курса', description: 'Информация для студентов выпускных курсов.', link: '/alumni/seniors' },

  // Студентам (students)
  { id: 'page-students', title: 'Студентам', description: 'Учебный процесс, расписание, сессии, рейтинг и студенческая жизнь.', link: '/students' },

  // Общие страницы новостей и мероприятий
  { id: 'page-events-main', title: 'Все мероприятия', description: 'Список предстоящих и прошедших мероприятий института.', link: '/events' },
  { id: 'page-news-main', title: 'Все новости', description: 'Последние новости и события INAI.KG.', link: '/news' },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || ''; 

  // 2. Объединяем ВСЕ данные (страницы, новости, мероприятия) в один формат
  const allItems = [
    // Статические страницы
    ...sitePages.map(item => ({
      id: item.id,
      type: 'page',
      title: item.title,
      description: item.description,
      link: item.link,
      image: null, // У страниц нет конкретной картинки
      date: null
    })),
    // Мероприятия
    ...eventsData.map(item => ({ 
      id: `event-${item.id}`, 
      type: 'events',
      title: item.title,
      description: item.description,
      link: `/events/${item.id}`,
      image: item.image,
      date: item.date
    })),
    // Новости
    ...newsData.map(item => ({ 
      id: `news-${item.id}`, 
      type: 'news',
      title: item.title,
      description: item.description,
      link: `/news/${item.id}`,
      image: item.image,
      date: item.date
    }))
  ];

  // 3. Фильтруем данные (поиск работает и по частям слова, например "конта" найдет "Контакты")
  const filteredData = query 
    ? allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <Group gap={8} mb={40}>
        <IconSearch size={20} color="#1A235E" stroke={1.5} />
        <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
          Главная / Поиск
        </Text>
      </Group>

      <Title order={1} mb={20} className="text-[32px] md:text-[42px] text-[#1A235E]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        Результаты поиска
      </Title>
      
      <Text size="lg" mb={60} c="dimmed">
        {query ? (
          <>По запросу <strong>«{query}»</strong> найдено совпадений: {filteredData.length}</>
        ) : (
          "Введите запрос в строку поиска."
        )}
      </Text>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} mb={60}>
        {filteredData.map((item) => (
          <Box 
            key={item.id} 
            component={Link} 
            href={item.link} // Единая ссылка, которая работает для всех типов
            style={{ 
              backgroundColor: 'white', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              boxShadow: '0 10px 40px rgba(0,0,0,0.06)', 
              display: 'flex', 
              flexDirection: 'column',
              textDecoration: 'none', 
              color: 'inherit',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            className="hover:-translate-y-2 hover:shadow-lg group"
          >
            {/* Если есть картинка (новости/мероприятия) - показываем ее, иначе красивый блок-заглушку для страниц */}
            <Box style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden', backgroundColor: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.image ? (
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className="transition-transform duration-500 group-hover:scale-105"
                  unoptimized 
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#1A235E]/20 group-hover:text-[#1A235E]/40 transition-colors duration-500">
                  <IconLink size={80} stroke={1} />
                </div>
              )}
            </Box>

            <Box p={32} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Text c="dimmed" size="13px" fw={600} mb={8} tt="uppercase">
                {item.type === 'page' ? 'Страница сайта' : item.type === 'events' ? `Мероприятие • ${item.date || ''}` : `Новость • ${item.date || ''}`}
              </Text>
              <Title 
                order={3} 
                c="#1A235E" 
                size="20px" 
                mb={16} 
                lh={1.4}
                className="group-hover:text-[#2A347E] transition-colors"
              >
                {item.title}
              </Title>
              <Text c="dimmed" size="14px" lh={1.6} style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      {query && filteredData.length === 0 && (
        <Box className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl">
          <IconSearch size={48} className="text-gray-300 mb-4" />
          <Title order={3} className="text-gray-700 mb-2">Ничего не найдено</Title>
          <Text className="text-gray-500">Попробуйте изменить формулировку запроса или поискать по другим ключевым словам.</Text>
        </Box>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="bg-white py-16 md:py-24 min-h-screen">
      <Container size="lg" className="max-w-[1200px]">
        <Suspense fallback={<Text className="py-20 text-center text-gray-500">Загрузка результатов...</Text>}>
          <SearchResults />
        </Suspense>
      </Container>
    </div>
  );
}