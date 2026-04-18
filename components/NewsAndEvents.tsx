"use client";

import { Container, Title, Text, Card, SimpleGrid, Badge, Button, Group } from '@mantine/core';
import { IconArrowRight, IconCalendarEvent } from '@tabler/icons-react';

// Данные из макета
const events = [
  {
    title: 'Внутриинститутский и межинститутский Хакатон',
    description: 'Масштабное соревнование для разработчиков: создай код будущего!',
    category: 'Хакатоны',
    date: 'Скоро',
    color: 'blue',
  },
  {
    title: 'День открытых дверей в INAI!',
    description: 'Добро начинается с тебя! Узнай больше о нашем институте и программах.',
    category: 'Мероприятия',
    date: 'Скоро',
    color: 'cyan',
  },
  {
    title: 'Благотворительная ярмарка',
    description: 'В поддержку детского дома. Прими участие в студенческой жизни.',
    category: 'Студенческая жизнь',
    date: 'Скоро',
    color: 'pink',
  },
];

export function NewsAndEvents() {
  return (
    <section className="py-20 bg-gray-50" id="news">
      <Container size="lg">
        <Group justify="space-between" align="flex-end" className="mb-12">
          <div>
            <Text color="blue" className="font-semibold tracking-wider uppercase mb-2">
              События
            </Text>
            <Title order={2} className="text-3xl md:text-4xl font-bold text-gray-900">
              Новости и мероприятия
            </Title>
          </div>
          <Button 
            variant="light" 
            color="blue" 
            rightSection={<IconArrowRight size={16} />}
            className="hidden sm:block"
          >
            Все новости
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {events.map((event) => (
            <Card
              key={event.title}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <Group justify="space-between" className="mb-4">
                <Badge color={event.color} variant="light">
                  {event.category}
                </Badge>
                <Group gap={4} className="text-gray-500">
                  <IconCalendarEvent size={16} stroke={1.5} />
                  <Text size="xs" fw={500}>{event.date}</Text>
                </Group>
              </Group>

              <Title order={4} className="mb-3 text-gray-900 leading-snug">
                {event.title}
              </Title>
              
              <Text size="sm" color="dimmed" className="mb-6 flex-grow">
                {event.description}
              </Text>

              <Button variant="subtle" color="blue" fullWidth radius="md">
                Узнать больше
              </Button>
            </Card>
          ))}
        </SimpleGrid>

        {/* Кнопка для мобильных устройств */}
        <div className="mt-10 text-center sm:hidden">
          <Button variant="light" color="blue" fullWidth rightSection={<IconArrowRight size={16} />}>
            Все новости
          </Button>
        </div>
      </Container>
    </section>
  );
}