"use client";

import { useState, useEffect } from 'react';
import { Container, Title, Text, Group, Box, SimpleGrid, TextInput, Pagination, UnstyledButton } from '@mantine/core';
import { IconSchool, IconSearch } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

// Импортируем обе базы данных
import { eventsData, eventCategories, type EventItem } from '../../data/eventsData';
import { newsData, newsCategories, type NewsItem } from '../../data/newsData';

// Общий тип, чтобы TypeScript не путался
type CardItem = EventItem | NewsItem;

export default function EventsPage() {
  const [activeMainTab, setActiveMainTab] = useState<'Мероприятия' | 'Новости'>('Мероприятия');
  const [activeCategory, setActiveCategory] = useState<string>('Предстоящие');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePage, setPage] = useState<number>(1);

  // ПРОВЕРКА ПАРАМЕТРА ИЗ URL ПРИ ЗАГРУЗКЕ
  useEffect(() => {
    // Если в ссылке есть ?tab=news, переключаем на новости
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('tab') === 'news') {
      setActiveMainTab('Новости');
      setActiveCategory('Все новости');
    }
  }, []);

  // Обработчик переключения главных вкладок
  const handleMainTabChange = (tab: 'Мероприятия' | 'Новости') => {
    setActiveMainTab(tab);
    // При переключении вкладок сбрасываем категорию на первую в списке
    setActiveCategory(tab === 'Мероприятия' ? 'Предстоящие' : 'Все новости');
  };

  // 1. Выбираем, какие данные и категории сейчас активны
  const currentData = activeMainTab === 'Мероприятия' ? eventsData : newsData;
  const currentCategories = activeMainTab === 'Мероприятия' ? eventCategories : newsCategories;

  // 2. Фильтруем по категории
  const categoryFilteredData = (activeCategory === 'Предстоящие' || activeCategory === 'Все новости')
    ? currentData 
    : currentData.filter((item: CardItem) => item.category === activeCategory);

  // 3. Фильтруем по поиску
  const finalFilteredData = categoryFilteredData.filter((item: CardItem) => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        <Group gap={8} mb={40}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Новости/Мероприятие
          </Text>
        </Group>

        <Group gap={40} mb={32} style={{ borderBottom: '2px solid #f1f3f5' }}>
          <UnstyledButton 
            onClick={() => handleMainTabChange('Мероприятия')}
            style={{ 
              paddingBottom: '16px',
              borderBottom: activeMainTab === 'Мероприятия' ? '3px solid #1A235E' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <Title order={1} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', color: activeMainTab === 'Мероприятия' ? '#1A235E' : '#85BDBF', transition: 'color 0.2s ease' }}>
              Мероприятия
            </Title>
          </UnstyledButton>

          <UnstyledButton 
            onClick={() => handleMainTabChange('Новости')}
            style={{ 
              paddingBottom: '16px',
              borderBottom: activeMainTab === 'Новости' ? '3px solid #1A235E' : '3px solid transparent',
              marginBottom: '-2px'
            }}
          >
            <Title order={1} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', color: activeMainTab === 'Новости' ? '#1A235E' : '#85BDBF', transition: 'color 0.2s ease' }}>
              Новости
            </Title>
          </UnstyledButton>
        </Group>

        <TextInput
          placeholder="Поиск"
          leftSection={<IconSearch size={18} color="#adb5bd" />}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.currentTarget.value)}
          size="md"
          radius="md"
          mb={32}
          styles={{ input: { backgroundColor: '#f8f9fa', border: 'none', color: '#495057' } }}
        />

        <Group gap={16} mb={40}>
          {currentCategories.map((category: string) => (
            <UnstyledButton
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600,
                border: activeCategory === category ? '2px solid #1A235E' : '1px solid #dee2e6',
                backgroundColor: activeCategory === category ? '#1A235E' : 'white',
                color: activeCategory === category ? 'white' : '#495057',
                transition: 'all 0.2s ease'
              }}
            >
              {category}
            </UnstyledButton>
          ))}
        </Group>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} mb={60}>
          {finalFilteredData.map((item: CardItem) => {
            // Определяем правильную ссылку в зависимости от текущей активной вкладки
            const linkHref = activeMainTab === 'Мероприятия' ? `/events/${item.id}` : `/news/${item.id}`;

            return (
              <Box 
                key={item.id} 
                component={Link} // Делаем карточку кликабельной
                href={linkHref}
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.06)', 
                  display: 'flex', 
                  flexDirection: 'column',
                  textDecoration: 'none', // Убираем подчеркивание от ссылки
                  color: 'inherit',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                className="hover:-translate-y-2 hover:shadow-lg group" // Добавляем небольшую анимацию при наведении
              >
                <Box style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    className="transition-transform duration-500 group-hover:scale-105"
                    unoptimized 
                  />
                </Box>
                <Box p={32} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {item.date && (
                    <Text c="dimmed" size="13px" fw={600} mb={8} tt="uppercase">{item.date}</Text>
                  )}
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
            );
          })}
          
          {finalFilteredData.length === 0 && (
            <Text c="dimmed" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>По вашему запросу ничего не найдено.</Text>
          )}
        </SimpleGrid>

        {finalFilteredData.length > 0 && (
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination total={5} value={activePage} onChange={setPage} color="#1A235E" size="lg" radius="md" withEdges={false} styles={{ control: { border: 'none', backgroundColor: 'transparent', color: '#adb5bd', fontSize: '16px', '&[data-active]': { backgroundColor: 'transparent', color: '#212529', fontWeight: 700 } } }} />
          </Box>
        )}
      </Container>
    </div>
  );
}