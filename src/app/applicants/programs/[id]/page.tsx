"use client";

import { Container, Title, Text, Group, Box, Button, SimpleGrid, Accordion, List } from '@mantine/core';
import { IconSchool, IconSchool as IconCap, IconSettings, IconCertificate, IconFileCertificate } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

import { bachelorData, masterData } from '../../../../data/programsData';

// Функция для выбора правильной иконки
const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'time': return <IconCap size={32} color="#20B2AA" stroke={1.5} />;
    case 'settings': return <IconSettings size={32} color="#20B2AA" stroke={1.5} />;
    case 'diploma': return <IconCertificate size={32} color="#20B2AA" stroke={1.5} />;
    case 'certificate': return <IconFileCertificate size={32} color="#20B2AA" stroke={1.5} />;
    default: return <IconCap size={32} color="#20B2AA" stroke={1.5} />;
  }
};

export default function ProgramDetailsPage() {
  const params = useParams();
  const currentId = params?.id;
  
  const program = 
    bachelorData.programs.find(p => p.id === currentId) || 
    masterData.programs.find(p => p.id === currentId);

  if (!program || !(program as any).pageDetails) {
    return notFound();
  }

  const pageDetails = (program as any).pageDetails;

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="md"> {/* Сузили контейнер для лучшей читаемости текста, как на макете */}
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={40}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Программы / {program.title}
          </Text>
        </Group>

        {/* Заголовок */}
        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          {program.title}
        </Title>

        {/* Главный баннер */}
        <Box style={{ position: 'relative', width: '100%', aspectRatio: '15/9', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}>
          {/* Если картинки пока нет, будет серый фон */}
          {pageDetails.heroImage ? (
            <Image src={pageDetails.heroImage} alt="Banner" fill style={{ objectFit: 'cover' }} unoptimized />
          ) : (
            <Box style={{ width: '100%', height: '100%', backgroundColor: '#f1f3f5' }} />
          )}
        </Box>

        {/* Кнопки */}
        <Group justify="center" gap={30} mb={60}>
          <Button variant="outline" color="#1A235E" radius="xl" size="md" style={{ padding: '0 40px', borderWidth: '2px' }}>
            Подать заявление
          </Button>
          <Button variant="outline" color="#1A235E" radius="xl" size="md" style={{ padding: '0 40px', borderWidth: '2px' }}>
            Задать вопрос
          </Button>
        </Group>

        {/* Вводный текст */}
        <Text ta="center" size="lg" lh={1.7} c="#333" mb={60} style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
          {pageDetails.introText}
        </Text>

        {/* Сетка преимуществ */}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={40} mb={60}>
          {pageDetails.features.map((feature: any, index: number) => (
            <Box key={index} ta="center">
              <Box mb={16} style={{ display: 'flex', justifyContent: 'center' }}>
                {getFeatureIcon(feature.icon)}
              </Box>
              <Title order={4} size="15px" c="#212529" mb={8}>{feature.title}</Title>
              <Text size="13px" c="dimmed" lh={1.5}>{feature.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Текст о карьере */}
        <Text ta="center" size="lg" lh={1.7} c="#333" mb={60} style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
          {pageDetails.careerText}
        </Text>

        {/* Блок Навыков (Синий контейнер) */}
        <Box style={{ 
          backgroundColor: '#11183b', 
          borderRadius: '12px', 
          padding: '40px 50px', 
          color: 'white',
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Фоновый водяной знак KYRGYZ-GERMAN */}
          <Text style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            fontSize: '120px', fontWeight: 900, color: 'rgba(255,255,255,0.03)',
            whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none'
          }}>
            KYRGYZ-GERMAN
          </Text>

          <Title order={3} size="24px" mb={30} style={{ position: 'relative', zIndex: 1 }}>
            Выпускник будет иметь навыки:
          </Title>
          
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" style={{ position: 'relative', zIndex: 1 }}>
            {pageDetails.skills.map((skill: string, index: number) => (
              <Text key={index} fw={600} size="16px">{skill}</Text>
            ))}
          </SimpleGrid>
        </Box>

        {/* Заключительный текст */}
        <Text ta="center" size="md" lh={1.6} c="dimmed" mb={80} style={{ maxWidth: '900px', margin: '0 auto 80px' }}>
          {pageDetails.conclusionText}
        </Text>

        {/* ПЛАН ОБУЧЕНИЯ */}
        <Title order={2} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
          План обучения
        </Title>

        <Accordion 
          variant="separated" 
          styles={{
            item: { border: 'none', borderBottom: '1px solid #e9ecef', borderRadius: 0, marginBottom: 0 },
            control: { padding: '24px 0', '&:hover': { backgroundColor: 'transparent' } },
            label: { fontWeight: 600, fontSize: '18px', color: '#495057' },
            content: { padding: '0 0 24px 0' }
          }}
        >
          {pageDetails.curriculum.map((course: any, index: number) => (
            <Accordion.Item key={index} value={course.year}>
              <Accordion.Control>{course.year}</Accordion.Control>
              <Accordion.Panel>
                <List spacing="sm" size="md" c="dimmed">
                  {course.subjects.map((subject: string, idx: number) => (
                    <List.Item key={idx}>{subject}</List.Item>
                  ))}
                </List>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

      </Container>
    </div>
  );
}