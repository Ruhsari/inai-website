"use client";

import { Container, Title, Text, Group, Box, Grid, Card } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';

// Импортируем базу данных новостей (проверь путь!)
import { newsData, type NewsItem } from '../../../data/newsData';

export default function NewsDetailsPage() {
  const params = useParams();
  const currentId = params?.id;
  
  // Ищем текущую новость
  const newsItem = newsData.find((n) => n.id.toString() === currentId);

  // Если новость не найдена, показываем 404
  if (!newsItem) {
    return notFound();
  }

  // Берем 2 другие новости для блока "Читайте также"
  const relatedNews = newsData.filter(n => n.id !== newsItem.id).slice(0, 2);

  return (
    <div className="bg-white py-12 md:py-20 min-h-screen">
      <Container size="lg" className="max-w-[1000px] mx-auto">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={12}>
          <Text 
            component={Link} 
            href="/#news" // <-- ДОБАВИЛИ ЯКОРЬ
            c="dimmed" 
            fw={500} 
            size="sm" 
            tt="uppercase" 
            style={{ letterSpacing: '1px', textDecoration: 'none' }}
            className="hover:text-[#1A235E] transition-colors"
          >
            Главная
          </Text>
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            /
          </Text>
          <Text 
            component={Link} 
            href="/events?tab=news" 
            c="dimmed" 
            fw={500} 
            size="sm" 
            tt="uppercase" 
            style={{ letterSpacing: '1px', textDecoration: 'none' }}
            className="hover:text-[#1A235E] transition-colors"
          >
            Новости
          </Text>
        </Group>
        
        <Text c="dimmed" size="sm" mb={40}>
          {newsItem.date || 'Дата не указана'}
        </Text>

        {/* Главный заголовок */}
        <Title 
          order={1} 
          ta="center"
          mb={60}
          className="text-[28px] md:text-[36px] text-[#1A235E] uppercase tracking-wider"
          style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
        >
          {newsItem.title}
        </Title>

        {/* Главное изображение */}
        <Box className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-16 shadow-md">
          <Image 
            src={newsItem.image} 
            alt={newsItem.title} 
            fill 
            className="object-cover"
            unoptimized
          />
        </Box>

        {/* Блок "Подробности" */}
        <Box className="mb-20">
          <Title 
            order={2} 
            mb={40}
            className="text-[22px] text-[#1A235E] inline-block border-b-2 border-[#1A235E] pb-2"
          >
            Подробности
          </Title>
          
          <Box className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
            {/* ПРОВЕРКА: Если в базе есть fullDescription (массив абзацев), выводим его. 
              Иначе выводим обычный короткий description.
            */}
            {/* @ts-ignore - игнорируем ошибку TS, пока ты не добавишь fullDescription в интерфейс NewsItem */}
            {newsItem.fullDescription ? (
              // @ts-ignore
              newsItem.fullDescription.map((paragraph: string, index: number) => (
                <Text key={index}>{paragraph}</Text>
              ))
            ) : (
              <Text>{newsItem.description}</Text>
            )}
          </Box>
        </Box>

        {/* Блок "Читайте также" */}
        <Box>
          <Title order={3} mb={50} className="text-[24px] text-[#2E2E2E]">
            Читайте также:
          </Title>
          
          <Grid gutter={40}>
            {relatedNews.map((related: NewsItem) => (
              <Grid.Col key={related.id} span={{ base: 12, md: 6 }}>
                <Box 
                  component={Link} 
                  href={`/news/${related.id}`}
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
                    cursor: 'pointer',
                    height: '100%' 
                  }}
                  className="hover:-translate-y-2 hover:shadow-lg group"
                >
                  <Box style={{ position: 'relative', width: '100%', height: '260px', overflow: 'hidden' }}>
                    <Image 
                      src={related.image} 
                      alt={related.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                      className="transition-transform duration-500 group-hover:scale-105"
                      unoptimized 
                    />
                  </Box>
                  <Box p={32} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {related.date && (
                      <Text c="dimmed" size="13px" fw={600} mb={8} tt="uppercase">{related.date}</Text>
                    )}
                    <Title 
                      order={3} 
                      c="#1A235E" 
                      size="20px" 
                      mb={16} 
                      lh={1.4}
                      className="group-hover:text-[#2A347E] transition-colors"
                    >
                      {related.title}
                    </Title>
                    <Text c="dimmed" size="14px" lh={1.6} style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {related.description}
                    </Text>
                  </Box>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

      </Container>
    </div>
  );
}