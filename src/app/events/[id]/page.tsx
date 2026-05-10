"use client";

import { Container, Title, Text, Group, Box, Button, Grid, Card } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';

// Импортируем нашу базу данных (проверь путь к файлу!)
import { eventsData, type EventItem } from '../../../data/eventsData'; 

export default function EventDetailsPage() {
  const params = useParams();
  const currentId = params?.id;
  
  // Ищем текущее мероприятие
  const event = eventsData.find((e) => e.id.toString() === currentId);

  // Если мероприятие не найдено, показываем 404
  if (!event) {
    return notFound();
  }

  // Фильтруем базу, чтобы показать другие мероприятия в "Читайте также" (исключая текущее, берем первые 2)
  const relatedEvents = eventsData.filter(e => e.id !== event.id).slice(0, 2);

  return (
    <div className="bg-white py-12 md:py-20 min-h-screen">
      <Container size="lg" className="max-w-[1000px] mx-auto">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={12}>
          <Text 
            component={Link} 
            href="/#events"
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
            href="/events" 
            c="dimmed" 
            fw={500} 
            size="sm" 
            tt="uppercase" 
            style={{ letterSpacing: '1px', textDecoration: 'none' }}
            className="hover:text-[#1A235E] transition-colors"
          >
            Мероприятия
          </Text>
        </Group>
        
        <Text c="dimmed" size="sm" mb={40}>
          {event.date || 'Дата не указана'}
        </Text>

        {/* Главный заголовок */}
        <Title 
          order={1} 
          ta="center"
          mb={60} // <-- Жесткий отступ средствами Mantine
          className="text-[28px] md:text-[36px] text-[#1A235E] uppercase tracking-wider"
          style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
        >
          {event.title}
        </Title>

        {/* Главное изображение */}
        <Box className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-16 shadow-md">
          <Image 
            src={event.image} 
            alt={event.title} 
            fill 
            className="object-cover"
            unoptimized
          />
        </Box>

        {/* Блок "О событии" */}
        <Box className="mb-20">
          <Title 
            order={2} 
            mb={30} 
            className="text-[22px] text-[#1A235E] inline-block border-b-2 border-[#1A235E] pb-2"
          >
            О событии
          </Title>
          
          <Box className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16px] md:text-[17px]">
            {/* Отрисовываем каждый абзац из базы данных */}
            {event.fullDescription?.map((paragraph, index) => (
              <Text key={index}>{paragraph}</Text>
            ))}
          </Box>

          {/* Кнопка регистрации */}
          {event.registrationLink && (
            <Button 
              component="a"
              href={event.registrationLink}
              target="_blank"
              mt={40}
              size="md"
              radius="md"
              color="dark" // <-- Говорим Mantine сделать кнопку темно-серой
              rightSection={<IconArrowRight size={18} />}
              className="px-8 !bg-[#333333] hover:!bg-[#1a1a1a]" // <-- И на всякий случай добиваем Tailwind с !important
              style={{ fontWeight: 500 }}
            >
              Регистрация
            </Button>
          )}
        </Box>

        
        {/* Блок "Читайте также" */}
        <Box>
          <Title order={3} mb={50} className="text-[24px] text-[#2E2E2E]">
            Читайте также:
          </Title>
          
          <Grid gutter={40}>
            {relatedEvents.map((related: EventItem) => (
              <Grid.Col key={related.id} span={{ base: 12, md: 6 }}>
                <Box 
                  component={Link} 
                  href={`/events/${related.id}`}
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
                    height: '100%' // Чтобы карточки были одинаковой высоты
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