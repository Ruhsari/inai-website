"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, Box, Grid, List, TextInput, Select, MultiSelect, Button } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';

// Импорт данных
import { clubsData, groupOptions, clubOptions } from '../../../../data/clubData';

export default function ClubDetailsPage() {
  const params = useParams();
  const currentId = params?.id as string;
  const club = (clubsData as any)[currentId];

  // СОСТОЯНИЯ ФОРМЫ
  const [formData, setFormData] = useState({ name: '', group: '', contact: '', directions: [] });
  const [errors, setErrors] = useState({ name: false, group: false, contact: false, directions: false });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!club) {
    return notFound();
  }

  // Обработчик отправки формы
  const handleSubmit = () => {
    // Проверка на пустые поля
    const newErrors = {
      name: formData.name.trim() === '',
      group: formData.group === '',
      contact: formData.contact.trim() === '',
      directions: formData.directions.length === 0
    };

    setErrors(newErrors);

    // Если ошибок нет - показываем успешную отправку
    if (!Object.values(newErrors).includes(true)) {
      setIsSuccess(true);
    }
  };

  // Кастомные стили для инпутов
  const inputStyles = (isError: boolean) => ({
    input: {
      backgroundColor: '#f1f3f5',
      border: 'none',
      color: isError ? '#fa5252' : '#212529',
      padding: '24px 16px',
      borderRadius: '8px',
      '&::placeholder': { color: isError ? '#fa5252' : '#adb5bd' }
    }
  });

  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={40}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Group gap={6}>
            {/* Просто текст (раздел) */}
            <Text 
              c="dimmed" 
              fw={500} 
              size="sm" 
              tt="uppercase" 
              style={{ letterSpacing: '1px' }}
            >
              Студентам
            </Text>
            
            <Text c="dimmed" fw={500} size="sm" tt="uppercase"> / </Text>
            
            {/* Кликабельная ссылка на страницу Сената */}
            <Text 
              component={Link} 
              href="/students/senate" 
              c="dimmed" 
              fw={500} 
              size="sm" 
              tt="uppercase" 
              style={{ letterSpacing: '1px', transition: 'color 0.2s' }}
              className="hover:text-[#1A235E]"
            >
              Студенческий сенат
            </Text>
            
            <Text c="dimmed" fw={500} size="sm" tt="uppercase"> / </Text>
            
            {/* Текущая страница */}
            <Text c="#1A235E" fw={600} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
              {club.title}
            </Text>
          </Group>
        </Group>

        {/* Заголовок с желтым подчеркиванием */}
        <Box style={{ position: 'relative', display: 'inline-block', marginBottom: '60px' }}>
          <Title order={1} c="#1A235E" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '32px', textTransform: 'uppercase', position: 'relative', zIndex: 2 }}>
            {club.title}
          </Title>
          {/* Желтый маркер под текстом */}
          <Box style={{ position: 'absolute', bottom: '4px', left: 0, right: '-10px', height: '14px', backgroundColor: '#FFD700', opacity: 0.6, zIndex: 1 }} />
        </Box>

        {/* Основные направления */}
        <Title order={2} style={{ fontSize: '22px' }} c="#212529" mb={24}>Основные направления деятельности</Title>
        <List spacing="sm" size="md" c="#495057" mb={60} style={{ paddingLeft: '20px' }}>
          {club.activities.map((act: string, idx: number) => (
            <List.Item key={idx}>{act}</List.Item>
          ))}
        </List>

        {/* Почему стоит вступить (Цитата + Картинка) */}
        <Grid gutter={60} align="center" mb={60}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={2} style={{ fontSize: '22px' }} c="#212529" mb={24}>Почему стоит вступить в клуб?</Title>
            <Box style={{ borderLeft: '4px solid #1A235E', paddingLeft: '20px' }}>
              <Text c="#495057" size="md" lh={1.7}>
                {club.quote}
              </Text>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Box style={{ position: 'relative', width: '100%', height: '250px' }}>
              <Image src={club.image} alt="Club image" fill style={{ objectFit: 'contain' }} unoptimized />
            </Box>
          </Grid.Col>
        </Grid>

        {/* Что это дает */}
        <Title order={2} style={{ fontSize: '22px' }} c="#212529" mb={24}>Что это дает студенту?</Title>
        <List spacing="sm" size="md" c="#495057" mb={80} style={{ paddingLeft: '20px' }}>
          {club.benefits.map((ben: string, idx: number) => (
            <List.Item key={idx}>{ben}</List.Item>
          ))}
        </List>

        {/* Карточка Лидера */}
        <Box style={{ 
          display: 'flex', gap: '24px', alignItems: 'center', 
          backgroundColor: 'white', borderRadius: '16px', padding: '24px', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.05)', maxWidth: '500px', marginBottom: '80px' 
        }}>
          {/* Декор и фото */}
          <Box style={{ position: 'relative', width: '120px', height: '140px', backgroundColor: '#1A235E', borderRadius: '12px' }}>
            <Box style={{ position: 'absolute', top: 0, left: '15px', right: 0, bottom: 0, overflow: 'hidden', borderRadius: '0 12px 12px 0' }}>
               <Image src={club.leader.image} alt={club.leader.name} fill style={{ objectFit: 'cover' }} unoptimized />
            </Box>
          </Box>
          {/* Информация */}
          <Box flex={1}>
            <Title order={3} style={{ fontSize: '22px' }} c="#1A235E" mb={8}>{club.leader.name}</Title>
            <Text c="dimmed" fz="13px" mb={12} lh={1.4}>{club.leader.role}</Text>
            <Text c="dimmed" fz="13px">{club.leader.email}</Text>
          </Box>
        </Box>

        {/* ФОРМА "ВСТУПАЙ В КОМАНДУ" */}
        <Box style={{ 
          maxWidth: '700px', margin: '0 auto', 
          backgroundColor: 'white', borderRadius: '24px', padding: '60px 40px', 
          boxShadow: '0 20px 50px rgba(0,0,0,0.05)', border: '1px solid #f1f3f5' 
        }}>
          <Title order={2} ta="center" c="#212529" style={{ fontSize: '32px' }} mb={40}>
            Вступай в команду!
          </Title>

          <Box style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <Box>
              <Text fw={500} size="sm" mb={8} c="#212529">Как к вам обращаться?</Text>
              <TextInput 
                placeholder={errors.name ? "Это поле обязательно." : "Иванов Иван"}
                value={errors.name ? "" : formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                styles={inputStyles(errors.name)}
                onFocus={() => setErrors({...errors, name: false})}
              />
            </Box>

            <Box>
              <Text fw={500} size="sm" mb={8} c="#212529">Группа / Курс:</Text>
              <Select 
                placeholder={errors.group ? "Это поле обязательно." : "Выберите группу"}
                data={groupOptions}
                value={errors.group ? null : formData.group}
                onChange={(val) => setFormData({...formData, group: val || ''})}
                styles={inputStyles(errors.group)}
                onFocus={() => setErrors({...errors, group: false})}
              />
            </Box>

            <Box>
              <Text fw={500} size="sm" mb={8} c="#212529">Контакт в Telegram/WhatsApp</Text>
              <TextInput 
                placeholder={errors.contact ? "Это поле обязательно." : "@username или номер"}
                value={errors.contact ? "" : formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                styles={inputStyles(errors.contact)}
                onFocus={() => setErrors({...errors, contact: false})}
              />
            </Box>

            <Box>
              <Text fw={500} size="sm" mb={8} c="#212529">Выбери свое направление (можно несколько)</Text>
              <MultiSelect 
                placeholder={errors.directions ? "Это поле обязательно." : "Выберите направление"}
                data={clubOptions}
                value={errors.directions ? [] : formData.directions}
                onChange={(val) => setFormData({...formData, directions: val as any})}
                styles={inputStyles(errors.directions)}
                onFocus={() => setErrors({...errors, directions: false})}
              />
            </Box>

            {/* КНОПКА ОТПРАВКИ / УСПЕХА */}
            <Box mt={20}>
              {isSuccess ? (
                <Box ta="center">
                  <Button fullWidth size="lg" radius="xl" style={{ backgroundColor: '#9aa5e9', color: '#1A235E', padding: '0', height: '54px' }}>
                    Заявка отправлена! Почти в команде!
                  </Button>
                  <Text c="dimmed" size="sm" mt={20} lh={1.6}>
                    Твоя заявка успешно отправлена и уже летит в наш штаб. Мы изучим её и напишем тебе в Telegram/WhatsApp в течение <b>24 часов.</b><br/>
                    А пока подписывайся на наш канал, чтобы быть в курсе всех движей)
                  </Text>
                </Box>
              ) : (
                <Button 
                  fullWidth 
                  size="lg" 
                  radius="xl" 
                  color="#FFD700" 
                  c="#212529" 
                  style={{ height: '54px' }}
                  onClick={handleSubmit}
                >
                  Отправить Заявку
                </Button>
              )}
            </Box>

          </Box>
        </Box>

      </Container>
    </div>
  );
}