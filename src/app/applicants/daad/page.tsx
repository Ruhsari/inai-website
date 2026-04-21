"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Button, Box } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

// Импорт данных
import { daadData } from '../../../data/daadData';

export default function DaadPage() {
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master'>('bachelor');

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={32}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Абитуриентам / ДААД
          </Text>
        </Group>

        {/* Заголовок страницы */}
        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          Стипендия ДААД
        </Title>

        {/* ВЕРХНИЕ ВКЛАДКИ */}
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
        </Group>

        {/* КОНТЕНТНАЯ ОБЛАСТЬ */}
        <Box style={{ maxWidth: '900px' }}>
          
          {/* Контент Бакалавриата */}
          {activeTab === 'bachelor' && (
            <Box>
              <Title order={2} c="#1A235E" mb={32} style={{ fontSize: '28px' }}>
                Бакалавриат
              </Title>
              {daadData.bachelor.map((text, index) => (
                <Text key={index} c="#495057" lh={1.7} mb={24} size="16px">
                  {text}
                </Text>
              ))}
            </Box>
          )}

          {/* Контент Магистратуры */}
          {activeTab === 'master' && (
            <Box>
              <Title order={2} c="#1A235E" mb={24} style={{ fontSize: '28px' }}>
                Магистратура
              </Title>
              <Text c="#495057" lh={1.7} mb={40} size="16px">
                {daadData.master.description}
              </Text>

              {/* Требования */}
              <Title order={3} c="#212529" mb={16} size="20px" fw={600}>
                {daadData.master.requirements.title}
              </Title>
              <Box mb={40}>
                {daadData.master.requirements.items.map((item, idx) => (
                  <Text key={idx} c="#495057" lh={1.7} mb={8} style={{ whiteSpace: 'pre-line' }}>
                    {item}
                  </Text>
                ))}
              </Box>

              {/* Длительность */}
              <Title order={3} c="#212529" mb={16} size="20px" fw={600}>
                {daadData.master.duration.title}
              </Title>
              <Box mb={40}>
                {daadData.master.duration.items.map((item, idx) => (
                  <Text key={idx} c="#495057" lh={1.7} mb={8}>
                    {item}
                  </Text>
                ))}
              </Box>

              {/* Размер */}
              <Title order={3} c="#212529" mb={16} size="20px" fw={600}>
                {daadData.master.size.title}
              </Title>
              <Box mb={40}>
                {daadData.master.size.items.map((item, idx) => (
                  <Text key={idx} c="#495057" lh={1.7} mb={8}>
                    {item}
                  </Text>
                ))}
              </Box>
            </Box>
          )}
        </Box>

      </Container>
    </div>
  );
}