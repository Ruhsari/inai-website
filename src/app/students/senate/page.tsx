"use client";

import { Container, Title, Text, Group, Box, Button, Grid, SimpleGrid } from '@mantine/core';
import { IconSchool, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

// Импорт данных
import { senateInfo, senateDirections, senateTeam } from '../../../data/senateData';

export default function StudentSenatePage() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={32}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Студентам / Студенческий сенат
          </Text>
        </Group>

        {/* Заголовок и интро */}
        <Title order={1} c="#1A235E" mb={24} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          Студенческий сенат
        </Title>
        <Text fw={600} size="18px" c="#212529" mb={16}>
          {senateInfo.intro}
        </Text>
        <Text c="#495057" lh={1.7} size="16px" mb={60} style={{ maxWidth: '1000px' }}>
          {senateInfo.description}
        </Text>

        {/* НАШИ НАПРАВЛЕНИЯ */}
        <Title order={2} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
          Наши направления
        </Title>

        <Box style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '80px' }}>
          {senateDirections.map((direction, index) => {
            // Чередование блоков: четные - картинка слева, нечетные - картинка справа
            const isImageLeft = index % 2 === 0;

            return (
              <Box 
                key={direction.id} 
                style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '24px', 
                  padding: '32px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.03)' 
                }}
              >
                <Grid align="center" gutter={40}>
                  {/* ИЗОБРАЖЕНИЕ */}
                  <Grid.Col span={{ base: 12, md: 5 }} order={{ base: 1, md: isImageLeft ? 1 : 2 }}>
                    <Box style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '16px', overflow: 'hidden' }}>
                      <Image src={direction.image} alt={direction.title} fill style={{ objectFit: 'contain' }} unoptimized />
                    </Box>
                  </Grid.Col>

                  {/* ТЕКСТ И КНОПКА */}
                  <Grid.Col span={{ base: 12, md: 7 }} order={{ base: 2, md: isImageLeft ? 2 : 1 }}>
                    <Box style={{ padding: '0 20px' }}>
                      <Title order={3} c="#1A235E" size="24px" mb={16}>
                        {direction.title}
                      </Title>
                      <Text c="#495057" lh={1.6} mb={32} size="15px">
                        {direction.description}
                      </Text>
                      
                      {/* Ссылка на будущую страницу клуба */}
                      <Link href={`/students/clubs/${direction.id}`} style={{ textDecoration: 'none' }}>
                        <Button 
                          color="#212529" 
                          radius="md" 
                          size="md" 
                          rightSection={<IconChevronRight size={16} />}
                          style={{ transition: 'background-color 0.2s' }}
                          className="hover:bg-[#1A235E]"
                        >
                          {direction.buttonText}
                        </Button>
                      </Link>
                    </Box>
                  </Grid.Col>
                </Grid>
              </Box>
            );
          })}
        </Box>

        {/* НАША КОМАНДА */}
        <Title order={2} c="#1A235E" mb={16} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
          Наша команда
        </Title>
        <Text c="#495057" mb={40} size="16px">
          Присоединяйтесь к Студенческому Сенату INAI.KG — вместе мы делаем студенческую жизнь ярче, интереснее и полезнее!
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={32}>
          {senateTeam.map((member) => (
            <Box 
              key={member.id} 
              style={{ 
                display: 'flex', 
                backgroundColor: 'white', 
                borderRadius: '16px', 
                padding: '24px', 
                boxShadow: '0 10px 40px rgba(0,0,0,0.03)',
                gap: '24px',
                alignItems: 'center'
              }}
            >
              {/* Фото с темно-синим фоном (имитация дизайна карточки) */}
              <Box style={{ 
                position: 'relative', 
                width: '120px', 
                height: '140px', 
                flexShrink: 0,
                backgroundColor: '#1A235E', 
                borderRadius: '12px', 
                overflow: 'hidden' 
              }}>
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} unoptimized />
              </Box>

              {/* Информация о члене команды */}
              <Box style={{ flex: 1 }}>
                <Title order={4} c="#212529" size="18px" mb={8} lh={1.3}>
                  {member.name}
                </Title>
                <Text c="dimmed" size="13px" lh={1.4} mb={16} style={{ minHeight: '36px' }}>
                  {member.role}
                </Text>

                <Link href={`/students/clubs/${member.clubId}`} style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="outline" 
                    color="#212529" 
                    radius="md" 
                    size="xs"
                    style={{ borderWidth: '1.5px' }}
                  >
                    Узнать о клубе
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

      </Container>
    </div>
  );
}