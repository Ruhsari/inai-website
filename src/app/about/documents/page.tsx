"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Grid, UnstyledButton } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

// Импорты данных и компонента
import { monKrDocuments, kgipiDocuments } from '../../../data/normativeDocsData';
import { MonKrTab } from '../../../components/documents/MonKrTab';

const menuTabs = [
  'НПА МОН КР',
  'НПА КГИПИ'
];

export default function NormativeDocumentsPage() {
  const [activeTab, setActiveTab] = useState('НПА МОН КР');

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={24}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Нормативные документы / {activeTab}
          </Text>
        </Group>

        {/* Заголовок со шрифтом Times New Roman */}
        <Title 
          order={1} 
          c="#1A235E" 
          mb={60} 
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}
        >
          Нормативные документы
        </Title>

        {/* НАДЕЖНАЯ СЕТКА MANTINE (Как в Органиграмме) */}
        <Grid gutter={60}>
          
          {/* ЛЕВАЯ ЧАСТЬ: МЕНЮ */}
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '3px solid #f1f3f5' }}>
              {menuTabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <UnstyledButton
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '16px 20px',
                      textAlign: 'left',
                      width: '100%',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#1A235E' : '#868e96',
                      borderLeft: isActive ? '3px solid #1A235E' : '3px solid transparent',
                      marginLeft: '-3px', // Накладываем синюю рамку на серую
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tab}
                  </UnstyledButton>
                );
              })}
            </div>
          </Grid.Col>

          {/* ПРАВАЯ ЧАСТЬ: КОНТЕНТ */}
          <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
            {activeTab === 'НПА МОН КР' && (
              <MonKrTab data={monKrDocuments} title="НПА МОН КР" />
            )}
            
            {activeTab === 'НПА КГИПИ' && (
              <MonKrTab data={kgipiDocuments} title="НПА КГИПИ" />
            )}
          </Grid.Col>

        </Grid>
      </Container>
    </div>
  );
}