"use client";

import { Container, Title, Text, Group, Box, List } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { enactusData } from '../../../data/enactusData';

export default function EnactusPage() {
  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={32}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Студентам / Энактус
          </Text>
        </Group>

        {/* Главный заголовок */}
        <Title order={1} c="#1A235E" mb={40} style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}>
          ЭНАКТУС
        </Title>

        {/* Цитата с синей линией */}
        <Box style={{ borderLeft: '4px solid #1A235E', paddingLeft: '24px', marginBottom: '40px' }}>
          <Text size="lg" c="#495057" lh={1.7} fw={500}>
            {enactusData.quote}
          </Text>
        </Box>

        {/* Вводные абзацы */}
        <Box mb={60}>
          {enactusData.introParagraphs.map((paragraph, index) => (
            <Text key={index} c="#495057" lh={1.7} size="md" mb={16}>
              {paragraph}
            </Text>
          ))}
        </Box>

        {/* Академический эдвайзер */}
        <Box mb={40}>
          <Title order={2} c="#212529" size="24px" mb={16}>
            {enactusData.academicAdvisor.title}
          </Title>
          <Text c="#495057" lh={1.7} size="md">
            {enactusData.academicAdvisor.text}
          </Text>
        </Box>

        {/* Опыт бизнес-эдвайзера */}
        <Box mb={60}>
          <Title order={2} c="#212529" size="24px" mb={16}>
            {enactusData.businessAdvisor.title}
          </Title>
          {enactusData.businessAdvisor.paragraphs.map((paragraph, index) => (
            <Text key={index} c="#495057" lh={1.7} size="md" mb={16}>
              {paragraph}
            </Text>
          ))}
        </Box>

        {/* В Enactus КГИПИ мы: */}
        <Box mb={60}>
          <Title order={2} c="#212529" size="24px" mb={16}>
            {enactusData.inEnactusWe.title}
          </Title>
          <Text c="#495057" lh={1.7} size="md" mb={24}>
            {enactusData.inEnactusWe.intro}
          </Text>
          <List spacing="md" size="md" c="#495057" style={{ paddingLeft: '20px' }}>
            {enactusData.inEnactusWe.points.map((point, index) => (
              <List.Item key={index}>
                <Text component="span" fw={700} c="#212529">{point.label} </Text>
                {point.text}
              </List.Item>
            ))}
          </List>
        </Box>

        {/* Наши отделы */}
        <Box mb={60}>
          <Title order={2} c="#212529" size="24px" mb={24}>
            {enactusData.departments.title}
          </Title>
          <List spacing="md" size="md" c="#495057" style={{ paddingLeft: '20px' }}>
            {enactusData.departments.items.map((item, index) => (
              <List.Item key={index}>
                <Text component="span" fw={700} c="#212529">{item.label} </Text>
                {item.text}
              </List.Item>
            ))}
          </List>
        </Box>

        {/* Миссия и Задачи */}
        <Box>
          <Text fw={700} size="md" c="#212529" mb={16}>{enactusData.missionTasks.motto}</Text>
          <Text size="md" c="#495057" mb={16}>
            <Text component="span" fw={700} c="#212529">Миссия: </Text>
            {enactusData.missionTasks.mission.replace('Миссия: ', '')}
          </Text>
          <Text size="md" c="#495057" mb={24}>
            <Text component="span" fw={700} c="#212529">Цель: </Text>
            {enactusData.missionTasks.goal.replace('Цель: ', '')}
          </Text>

          <Text fw={700} size="md" c="#212529" mb={16}>{enactusData.missionTasks.tasksTitle}</Text>
          <List type="ordered" spacing="sm" size="md" c="#495057" style={{ paddingLeft: '20px' }}>
            {enactusData.missionTasks.tasks.map((task, index) => (
              <List.Item key={index}>{task}</List.Item>
            ))}
          </List>
        </Box>

      </Container>
    </div>
  );
}