"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Box, Button, Grid } from '@mantine/core';
import { IconSchool, IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

// Импорт данных
import { bachelorData, masterData } from '../../../data/programsData';

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master'>('bachelor');
  const currentData = activeTab === 'bachelor' ? bachelorData : masterData;

  // Функция для плавной прокрутки к правилам приема
  const scrollToRules = () => {
    const rulesSection = document.getElementById('admission-rules');
    if (rulesSection) {
      rulesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={24}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Абитуриентам / Программы
          </Text>
        </Group>

        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          Программы
        </Title>

        {/* НАВИГАЦИОННОЕ МЕНЮ (ВКЛАДКИ) */}
        <Group mb={60} gap={16}>
          <Button 
            onClick={() => setActiveTab('bachelor')}
            variant={activeTab === 'bachelor' ? 'filled' : 'outline'}
            color="#1A235E"
            size="md"
            radius="xs"
            style={{ 
              backgroundColor: activeTab === 'bachelor' ? '#1A235E' : 'transparent',
              color: activeTab === 'bachelor' ? 'white' : '#1A235E',
              borderColor: '#1A235E'
            }}
          >
            Бакалавриат
          </Button>
          <Button 
            onClick={() => setActiveTab('master')}
            variant={activeTab === 'master' ? 'filled' : 'outline'}
            color="#1A235E"
            size="md"
            radius="xs"
            style={{ 
              backgroundColor: activeTab === 'master' ? '#1A235E' : 'transparent',
              color: activeTab === 'master' ? 'white' : '#1A235E',
              borderColor: '#1A235E'
            }}
          >
            Магистратура
          </Button>
          <Button 
            onClick={scrollToRules}
            variant="outline"
            color="gray"
            size="md"
            radius="xs"
            style={{ borderColor: '#ced4da', color: '#495057' }}
          >
            Правила приема студентов
          </Button>
        </Group>

        {/* СПИСОК ПРОГРАММ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          {currentData.programs.map((program) => (
            <Box key={program.id} style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
              
              {/* Левая часть: Картинка с вертикальным текстом (УВЕЛИЧЕНО) */}
              <Box style={{ 
                position: 'relative', 
                width: '250px',
                height: '320px',
                flexShrink: 0, 
                borderRadius: '8px', 
                overflow: 'hidden',
                backgroundColor: '#000000',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <Image src={program.image} alt={program.title} fill style={{ objectFit: 'cover', opacity: 0.7 }} unoptimized />
                {/* Вертикальный текст поверх картинки */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                  color: 'white', fontWeight: 600, fontSize: '25px', padding: '20px', 
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)' // Переворачиваем текст снизу вверх
                }}>
                  {program.title}
                </div>
              </Box>

              {/* Правая часть: Описание и кнопка (ВЫРОВНЕНО ПО ЦЕНТРУ ПО ВЫСОТЕ) */}
              <Box style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                padding: '20px 0' 
              }}>
                <Title order={3} c="#1A235E" size="26px" mb={16}>{program.title}</Title>
                <Text c="dimmed" size="16px" lh={1.6} mb={32}>
                  {program.description}
                </Text>
                
                {/* Ссылка на внутреннюю страницу программы */}
                <div>
                  <Link href={`./programs/${program.id}`} style={{ textDecoration: 'none' }}>
                    <Group gap={8} style={{ cursor: 'pointer', display: 'inline-flex' }} className="group">
                      <Box style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#212529', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }} className="group-hover:bg-[#1A235E]">
                        <IconArrowRight size={18} color="white" />
                      </Box>
                      <Text fw={600} size="15px" c="#212529" style={{ transition: 'color 0.2s' }} className="group-hover:text-[#1A235E]">
                        Узнать больше
                      </Text>
                    </Group>
                  </Link>
                </div>
              </Box>
            </Box>
          ))}
        </div>

        {/* ОБЩЕЕ СВЕДЕНИЕ (Таблица-карточка) */}
        <Title order={2} ta="center" c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
          Общее сведение {activeTab === 'bachelor' ? 'бакалавриата' : 'магистратуры'}
        </Title>
        
        <Box style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px', 
          border: '1px solid #e9ecef', 
          borderRadius: '16px', 
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
        }}>
          <Grid gutter={0}>
            {/* Рендерим строки таблицы */}
            {[
              { label: 'Степень', value: currentData.generalInfo.degree },
              { label: 'Форма обучения', value: currentData.generalInfo.format },
              { label: 'Срок обучения', value: currentData.generalInfo.duration },
              { label: 'Длительность / ECTS', value: currentData.generalInfo.credits },
              // Исправлено: добавлены ( ... as any) для правильной типизации
              ...((currentData.generalInfo as any).practice ? [{ label: 'Практика', value: (currentData.generalInfo as any).practice }] : []),
              ...((currentData.generalInfo as any).thesis ? [{ label: 'Выпускная работа', value: (currentData.generalInfo as any).thesis }] : []),
              { label: 'Условия поступления', value: currentData.generalInfo.admission.map((item, i) => <div key={i} style={{ marginBottom: '8px' }}>— {item}</div>) },
              { label: 'Плата за обучение', value: currentData.generalInfo.fee }
            ].map((row, index, array) => (
              <Grid.Col span={12} key={index} style={{ 
                padding: '20px 0', 
                borderBottom: index !== array.length - 1 ? '1px solid #e9ecef' : 'none' 
              }}>
                <Grid>
                  <Grid.Col span={{ base: 12, sm: 4 }}>
                    <Text fw={700} size="15px" c="#212529">{row.label}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 8 }}>
                    <Text size="15px" c="#495057">{row.value}</Text>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            ))}
          </Grid>
          
          <Box mt={40} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="#FFD700" c="#212529" size="lg" radius="xl" style={{ padding: '0 40px' }}>
              Приемная комиссия
            </Button>
          </Box>
        </Box>

        {/* ЯКОРЬ: ПРАВИЛА ПРИЕМА */}
        <div id="admission-rules" style={{ paddingTop: '40px' }}>
          <Title order={2} c="#1A235E" mb={32} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
            Правила приема студентов
          </Title>

          {activeTab === 'bachelor' ? (
            <Box>
              <Title order={3} size="20px" c="#212529" mb={16}>1. Общие положения</Title>
              <Text c="dimmed" mb={24} lh={1.6}>
                Настоящие Правила регламентируют прием граждан Кыргызской Республики и граждан других государств... (текст из макета)
              </Text>
              
              <Title order={3} size="20px" c="#212529" mb={16}>2. Организация приема в КГИПИ</Title>
              <Text c="dimmed" mb={24} lh={1.6}>
                Для организации приема студентов на все формы обучения создается приемная комиссия...
              </Text>

              <Title order={3} size="20px" c="#212529" style={{ textDecoration: 'underline' }}>
                3. ПРАВИЛА ПРИЕМА в INAI.kg
              </Title>
            </Box>
          ) : (
            <Box>
              <Text c="dimmed" mb={40} lh={1.6}>
                Для организации приема студентов на очную форму обучения по договору с оплатой стоимости обучения ректором...
              </Text>
              {/* Заглушка для YouTube видео */}
              <Box style={{ 
                width: '100%', 
                maxWidth: '800px', 
                aspectRatio: '16/9', 
                backgroundColor: '#e9ecef', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Text c="dimmed" size="lg">YouTube видео</Text>
              </Box>
            </Box>
          )}
        </div>

      </Container>
    </div>
  );
}