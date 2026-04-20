"use client";

import { Container, Title, Text, Group, Box, Grid } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation'; // Добавили useParams
import { leadershipData } from '../../../../data/organigramData';

export default function PersonProfilePage() {
  // 1. Надежный способ получить ID из URL в клиентском компоненте Next.js
  const params = useParams();
  const currentId = params?.id;

  // 2. Ищем человека. Оборачиваем в String(), чтобы "1" (из URL) и 1 (из данных) совпали!
  const person = leadershipData.find((p) => String(p.id) === String(currentId));

  // Если человек не найден или у него нет детальных данных (details), показываем 404
  if (!person || !person.details) {
    return notFound();
  }

  const { details } = person;

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={40}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          {/* ИСПРАВЛЕНИЕ: заменили tracking на style={{ letterSpacing: '1px' }} */}
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Органиграмма / {person.role.split(' ')[0]}
          </Text>
        </Group>

        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: 'serif', fontSize: '36px', textTransform: 'uppercase' }}>
          {person.role.split(' ')[0]}
        </Title>

        {/* ВЕРХНИЙ БЛОК: Фото + Контакты */}
        <Grid gutter={50} mb={60}>
          <Grid.Col span={{ base: 12, sm: 4, md: 3 }}>
            <Box style={{ position: 'relative', width: '100%', aspectRatio: '3/4', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
              {person.image ? (
                <Image src={person.image} alt={person.name} fill style={{ objectFit: 'cover' }} unoptimized />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#adb5bd', backgroundColor: '#f8f9fa' }}>Нет фото</div>
              )}
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, sm: 8, md: 9 }}>
            <Title order={2} c="#1A235E" size="24px" mb={16} tt="uppercase" style={{ borderBottom: '1px solid #e9ecef', paddingBottom: '16px' }}>
              {person.role}
            </Title>
            
            <Text fw={700} size="xl" mb={24}>{person.name}</Text>

            <Grid gutter={40}>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Box mb={16}>
                  <Text fw={700} size="sm" mb={4}>Учебное звание:</Text>
                  <Text c="dimmed">{details.academicTitle}</Text>
                </Box>
                <Box mb={16}>
                  <Text fw={700} size="sm" mb={4}>E-mail:</Text>
                  <Text c="dimmed">{person.email}</Text>
                </Box>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <Box mb={16}>
                  <Text fw={700} size="sm" mb={4}>Учебная степень:</Text>
                  <Text c="dimmed">{details.degree}</Text>
                </Box>
                <Box mb={16}>
                  <Text fw={700} size="sm" mb={4}>Телефон:</Text>
                  <Text c="dimmed">{details.phone}</Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>

        {/* НИЖНИЙ БЛОК: Списки (Образование, достижения) */}
        <Box mb={40}>
          <Title order={3} size="18px" tt="uppercase" mb={20}>Образование</Title>
          {details.education?.map((item: string, index: number) => (
            <Text key={index} mb={12} style={{ whiteSpace: 'pre-line' }}>{item}</Text>
          ))}
        </Box>

        <Box mb={40}>
          <Title order={3} size="18px" tt="uppercase" mb={20}>Повышение квалификации</Title>
          {details.qualifications?.map((item: any, index: number) => (
            <Box key={index} mb={16}>
              <Text>{item.year}</Text>
              <Text>{item.place}</Text>
              <Text c="dimmed">{item.topic}</Text>
            </Box>
          ))}
        </Box>

        <Box mb={40}>
          <Title order={3} size="18px" tt="uppercase" mb={20}>Достижения, поощрения</Title>
          <ol style={{ paddingLeft: '20px', margin: 0 }}>
            {details.achievements?.map((item: string, index: number) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <Text>{item}</Text>
              </li>
            ))}
          </ol>
        </Box>

      </Container>
    </div>
  );
}