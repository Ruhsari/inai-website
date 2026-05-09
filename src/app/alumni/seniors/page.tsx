"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Grid, Box, UnstyledButton } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

// 1. ИМПОРТ ДАННЫХ
import { bachelorsDocs, mastersDocs } from '@/data/graduatesDocsData';
// 2. ИМПОРТ НАШЕГО НОВОГО КОМПОНЕНТА (Проверь путь, если назвала папку иначе)
import { DocsList } from '@/components/graduates/DocsList';

export default function GraduatesInfoPage() {
  const [activeTab, setActiveTab] = useState<'4-курс' | 'магистратура'>('4-курс');

  const currentDocs = activeTab === '4-курс' ? bachelorsDocs : mastersDocs;
  const currentTitle = activeTab === '4-курс' ? 'ВЫПУСКНИКАМ 4-КУРСА' : 'ВЫПУСКНИКАМ МАГИСТРАТУРЫ';
  const breadcrumbText = activeTab === '4-курс' ? 'Выпускникам 4-курса' : 'Выпускникам магистратуры';

  return (
    <main className="bg-white py-16 md:py-24 min-h-screen">
      <Container size="lg" className="max-w-[1200px]">

        {/* Хлебные крошки */}
        <Group gap={8} mb={20}>
          <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
          <Text className="text-gray-400 font-medium text-sm tracking-wide uppercase">
            Выпускникам / {breadcrumbText}
          </Text>
        </Group>

        <Grid gutter={60}>
          
          {/* ЛЕВАЯ КОЛОНКА: Навигация */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <UnstyledButton 
                onClick={() => setActiveTab('4-курс')}
                style={{
                  padding: '16px 20px',
                  borderLeft: activeTab === '4-курс' ? '4px solid #1A235E' : '4px solid transparent',
                  color: activeTab === '4-курс' ? '#1A235E' : '#868e96',
                  fontWeight: activeTab === '4-курс' ? 700 : 500,
                  fontSize: '15px',
                  backgroundColor: activeTab === '4-курс' ? '#f8f9fa' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                Выпускникам 4-курса
              </UnstyledButton>

              <UnstyledButton 
                onClick={() => setActiveTab('магистратура')}
                style={{
                  padding: '16px 20px',
                  borderLeft: activeTab === 'магистратура' ? '4px solid #1A235E' : '4px solid transparent',
                  color: activeTab === 'магистратура' ? '#1A235E' : '#868e96',
                  fontWeight: activeTab === 'магистратура' ? 700 : 500,
                  fontSize: '15px',
                  backgroundColor: activeTab === 'магистратура' ? '#f8f9fa' : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                Выпускникам магистратуры
              </UnstyledButton>
            </Box>
          </Grid.Col>

          {/* ПРАВАЯ КОЛОНКА: Контент */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            
            <div className="animate-fadeIn">
              {/* Заголовок страницы */}
              <Title
                order={1}
                className="text-[32px] md:text-[42px] uppercase tracking-wider"
                style={{ 
                    fontFamily: "Georgia, 'Times New Roman', Times, serif", 
                    color: "#2E2E2E",
                    marginBottom: '40px' 
                }}
              >
                {currentTitle}
              </Title>

              
              <DocsList docs={currentDocs} />
            </div>

          </Grid.Col>
        </Grid>

      </Container>
    </main>
  );
}