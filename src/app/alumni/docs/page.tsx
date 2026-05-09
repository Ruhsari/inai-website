"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Box, Grid, UnstyledButton, List } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import Image from 'next/image';

import { alumniData, alumniDocsData, type AlumniItem } from '../../../data/alumniData';

export default function DocumentsPage() {
  // В этом файле по умолчанию активны документы
  const [activeMenu, setActiveMenu] = useState('Нормативные документы');

  // ТА САМАЯ ЛОГИКА ДЛЯ ХЛЕБНЫХ КРОШЕК
  const breadcrumbText = activeMenu === 'Ассоциация выпускников' 
    ? 'Ассоциация выпускников' 
    : 'Нормативные документы Ассоциации';

  return (
    <div style={{ backgroundColor: '#FAFAFA', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={60}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Выпускникам / {breadcrumbText}
          </Text>
        </Group>

        <Grid gutter={60}>
          
          {/* ЛЕВАЯ КОЛОНКА: Боковая навигация */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              
              <UnstyledButton 
                onClick={() => setActiveMenu('Ассоциация выпускников')}
                style={{
                  padding: '16px 20px',
                  borderLeft: activeMenu === 'Ассоциация выпускников' ? '3px solid #1A235E' : '3px solid #dee2e6',
                  color: activeMenu === 'Ассоциация выпускников' ? '#1A235E' : '#868e96',
                  fontWeight: activeMenu === 'Ассоциация выпускников' ? 700 : 500,
                  fontSize: '16px',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'transparent' // <-- Изменено
                }}
              >
                Ассоциация выпускников
              </UnstyledButton>

              <UnstyledButton 
                onClick={() => setActiveMenu('Нормативные документы')}
                style={{
                  padding: '16px 20px',
                  borderLeft: activeMenu === 'Нормативные документы' ? '3px solid #1A235E' : '3px solid #dee2e6',
                  color: activeMenu === 'Нормативные документы' ? '#1A235E' : '#868e96',
                  fontWeight: activeMenu === 'Нормативные документы' ? 700 : 500,
                  fontSize: '16px',
                  transition: 'all 0.2s ease',
                  backgroundColor: 'transparent' // <-- Изменено
                }}
              >
                Нормативные документы Ассоциации
              </UnstyledButton>
              
            </Box>
          </Grid.Col>

          {/* ПРАВАЯ КОЛОНКА: Контент */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            
            {/* ВКЛАДКА 1: Карточки выпускников */}
            {activeMenu === 'Ассоциация выпускников' && (
              <Box>
                <Title order={1} c="#212529" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '36px' }}>
                  Ассоциация выпускников
                </Title>

                <Box style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                  {alumniData.map((alumni: AlumniItem) => (
                    <Box 
                      key={alumni.id}
                      style={{ 
                        backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                        display: 'flex', flexDirection: 'row', alignItems: 'stretch', minHeight: '320px'
                      }}
                    >
                      <Box style={{ flex: 1, padding: '40px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Text style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '120px', fontWeight: 900, color: '#f8f9fa', zIndex: 0, userSelect: 'none', whiteSpace: 'nowrap' }}>
                          {alumni.watermark}
                        </Text>

                        <Box style={{ position: 'relative', zIndex: 1 }}>
                          <Text c="dimmed" size="14px" mb={24} tt="uppercase" fw={600} style={{ letterSpacing: '1px' }}>
                            {alumni.role}
                          </Text>
                          
                          <Text c="#212529" size="22px" fw={500} lh={1.5} mb={40} dangerouslySetInnerHTML={{ __html: alumni.quoteHtml }} />

                          <Box style={{ borderLeft: '3px solid #1A235E', paddingLeft: '20px', marginBottom: '32px' }}>
                            <Title order={4} c="#1A235E" size="18px" mb={4}>{alumni.name}</Title>
                            <Text size="14px" c="dimmed" lh={1.4}>{alumni.position}</Text>
                          </Box>

                          <Box style={{ position: 'relative', width: '120px', height: '30px' }}>
                            <Image src={alumni.companyLogo} alt="Company Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} unoptimized />
                          </Box>
                        </Box>
                      </Box>

                      <Box style={{ position: 'relative', width: '300px', flexShrink: 0 }}>
                        <Image src={alumni.image} alt={alumni.name} fill style={{ objectFit: 'cover' }} unoptimized />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}

            {/* ВКЛАДКА 2: Нормативные документы */}
            {activeMenu === 'Нормативные документы' && (
              <Box>
                {/* Главный заголовок */}
                <Title order={1} c="#212529" mb={24} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '36px' }}>
                  Нормативные документы Ассоциации
                </Title>
                
                {/* Вводный текст */}
                <Text c="#495057" lh={1.7} size="16px" mb={40}>
                  {alumniDocsData.intro}
                </Text>

                {/* Подзаголовок: Положение об Ассоциации */}
                <Title order={2} c="#1A235E" size="20px" mb={24} fw={700}>
                  {alumniDocsData.docTitle}
                </Title>

                {/* Рендерим каждую секцию данных */}
                {alumniDocsData.sections.map((section, index) => (
                  <Box key={index} mb={40}>
                    <Title order={3} c="#212529" size="18px" mb={16}>
                      {section.title}
                    </Title>
                    
                    {/* Рендерим блоки внутри секции */}
                    {section.blocks.map((block, bIndex) => {
                      if (block.type === 'text') {
                        return <Text key={bIndex} c="#495057" lh={1.7} size="15px" mb={12}>{block.content}</Text>;
                      }
                      
                      if (block.type === 'rich-text') {
                        return <Text key={bIndex} c="#495057" lh={1.7} size="15px" mb={12} dangerouslySetInnerHTML={{ __html: block.content || '' }} />;
                      }
                      
                      if (block.type === 'list') {
                        return (
                          <List key={bIndex} spacing="xs" c="#495057" mb={16} style={{ paddingLeft: '20px', fontSize: '15px' }}>
                            {block.items?.map((item, iIndex) => (
                              <List.Item key={iIndex}>{item}</List.Item>
                            ))}
                          </List>
                        );
                      }
                      return null;
                    })}
                  </Box>
                ))}
              </Box>
            )}

          </Grid.Col>
        </Grid>

      </Container>
    </div>
  );
}