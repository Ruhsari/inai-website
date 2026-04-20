"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Button, Grid, UnstyledButton, Box } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { bachelorSidebarMenu, masterSidebarMenu, admissionRulesData } from '../../../data/admissionData';

export default function AdmissionRulesPage() {
  const [degree, setDegree] = useState<'bachelor' | 'master'>('bachelor');
  const [activeTab, setActiveTab] = useState('Правила приема студентов');

  // Динамически выбираем меню и контент в зависимости от выбранной степени
  const currentMenu = degree === 'bachelor' ? bachelorSidebarMenu : masterSidebarMenu;
  const currentData = degree === 'bachelor' ? admissionRulesData.bachelor : admissionRulesData.master;

  // Функция для смены степени. Она также сбрасывает боковое меню на первую вкладку
  const handleDegreeChange = (newDegree: 'bachelor' | 'master') => {
    setDegree(newDegree);
    setActiveTab('Правила приема студентов');
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={32}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Абитуриентам / Правила приема студентов
          </Text>
        </Group>

        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          Правила приема студентов
        </Title>

        {/* Переключатель степени */}
        <Group mb={60} gap={16}>
          <Button 
            onClick={() => handleDegreeChange('bachelor')}
            variant={degree === 'bachelor' ? 'filled' : 'outline'}
            color="#1A235E"
            size="md"
            radius="xs"
            style={{ 
              backgroundColor: degree === 'bachelor' ? '#1A235E' : 'transparent',
              color: degree === 'bachelor' ? 'white' : '#1A235E',
              borderColor: '#1A235E'
            }}
          >
            Бакалавриат
          </Button>
          <Button 
            onClick={() => handleDegreeChange('master')}
            variant={degree === 'master' ? 'filled' : 'outline'}
            color="#1A235E"
            size="md"
            radius="xs"
            style={{ 
              backgroundColor: degree === 'master' ? '#1A235E' : 'transparent',
              color: degree === 'master' ? 'white' : '#1A235E',
              borderColor: '#1A235E'
            }}
          >
            Магистратура
          </Button>
        </Group>

        <Grid gutter={60}>
          {/* Левое меню (теперь оно динамическое!) */}
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '3px solid #f1f3f5' }}>
              {currentMenu.map((item) => {
                const isActive = activeTab === item;
                return (
                  <UnstyledButton
                    key={item}
                    onClick={() => setActiveTab(item)}
                    style={{
                      padding: '16px 20px',
                      textAlign: 'left',
                      fontWeight: isActive ? 700 : 400,
                      color: isActive ? '#1A235E' : '#495057',
                      borderLeft: isActive ? '3px solid #1A235E' : '3px solid transparent',
                      marginLeft: '-3px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {item}
                  </UnstyledButton>
                );
              })}
            </div>
          </Grid.Col>

          {/* Контентная область */}
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            {activeTab === 'Правила приема студентов' ? (
              <Box>
                <Title order={2} c="#1A235E" mb={32} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase' }}>
                  {currentData.title}
                </Title>

                {currentData.sections.map((section, idx) => (
                  <Box key={idx} mb={section.subtitle ? 40 : 20}>
                    {/* Рендерим подзаголовок только если он есть */}
                    {section.subtitle && (
                      <Title order={3} size="20px" c="#212529" mb={20} fw={600}>
                        {section.subtitle}
                      </Title>
                    )}
                    {section.content.map((p, pIdx) => (
                      <Text key={pIdx} c="#495057" lh={1.7} mb={24} size="15px">
                        {p}
                      </Text>
                    ))}
                  </Box>
                ))}

                {/* Блок для видео (появляется только у Магистратуры) */}
                {currentData.hasVideo && (
                  <Box style={{ 
                    width: '100%', 
                    aspectRatio: '16/9', 
                    backgroundColor: '#e9ecef', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '40px'
                  }}>
                    <Text c="dimmed" size="lg">YouTube видео</Text>
                  </Box>
                )}

                {/* Нижняя ссылка */}
                <Text fw={500} size="22px" c="#212529" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  {currentData.footerLink}
                </Text>
              </Box>
            ) : (
              <Box py={40} ta="center">
                <Text c="dimmed" fs="italic">Раздел «{activeTab}» находится в процессе наполнения.</Text>
              </Box>
            )}
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}