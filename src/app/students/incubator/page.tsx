"use client";

import { Container, Title, Text, Group, Box, List } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function IncubatorPage() {
  return (
    <div style={{ backgroundColor: 'white', padding: '80px 0', minHeight: '100vh' }}>
      <Container size="lg">
        
        {/* Хлебные крошки */}
        <Group gap={8} mb={40}>
          <IconSchool size={20} color="#1A235E" stroke={1.5} />
          <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
            Студентам / Бизнес Инкубатор при КГИПИ
          </Text>
        </Group>

        {/* Главный заголовок */}
        <Title 
          order={1} 
          c="#1A235E" 
          mb={40} 
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '42px', textTransform: 'uppercase' }}
        >
          Бизнес Инкубатор при КГИПИ
        </Title>

        {/* Подзаголовок */}
        <Title 
          order={2} 
          c="#1A235E" 
          mb={24} 
          style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: '20px', textTransform: 'uppercase' }}
        >
          Старт Бизнес Инкубатора
        </Title>

        {/* Абзацы текста */}
        <Box mb={24}>
          <Text c="#495057" lh={1.7} size="md" mb={20}>
            Был проведен тщательный отбор с обзором предложенных идей от команд. В качестве основного критерия для отбора были оригинальность, инновационность, которые отвечают современным запросам общества.
          </Text>
          <Text c="#495057" lh={1.7} size="md" mb={20}>
            14 июля в стенах университета стартовала Акселерационная программа для стартап-команд КГИПИ. Благодаря этой программе студенты вуза имеют отличную возможность улучшить свои навыки не только по профилирующему направлению, а также в предпринимательстве и разработке инновационных стартап-проектов.
          </Text>
          <Text c="#495057" lh={1.7} size="md" mb={20} style={{ whiteSpace: 'pre-line' }}>
            Примечание:
            Акселерационная программа КГИПИ (далее — программа) — это программа интенсивного развития через менторство, обучение и экспертную поддержку. Программа представляет собой образовательный курс для студентов с сопровождением опытных наставников и их еженедельными встречами.
          </Text>
          <Text c="#495057" lh={1.7} size="md" mb={20}>
            Среди студентов КГИПИ сформированы команды, максимальное количество участников которых — 5 человек.
          </Text>
          <Text c="#495057" lh={1.7} size="md" mb={20}>
            Команды состоят из тимлидера, маркетолога, разработчиков и других ролей, в зависимости от индивидуальных особенностей стартап-проекта. Участники могут иметь к началу проекта собственную идею либо же выбрать ее уже в процессе обучения.
          </Text>
          <Text c="#495057" lh={1.7} size="md" mb={20}>
            В результате обучения по данной программе участники смогли:
          </Text>
        </Box>

        {/* Маркированный список */}
        <List 
          spacing="sm" 
          size="md" 
          c="#495057" 
          mb={32} 
          style={{ paddingLeft: '40px', listStyleType: 'disc' }}
          withPadding
        >
          <List.Item>создавать команды;</List.Item>
          <List.Item>генерировать идеи;</List.Item>
          <List.Item>анализировать и рассчитывать рынки;</List.Item>
          <List.Item>анализировать конкурентов и создавать карту конкурентов;</List.Item>
          <List.Item>создавать подробный портрет ЦА;</List.Item>
          <List.Item>создавать ценностное предложение;</List.Item>
          <List.Item>проводить опрос потребителей и выстраивать каналы коммуникаций с целевой аудиторией;</List.Item>
          <List.Item>создавать минимально жизнеспособный продукт своего стартапа;</List.Item>
          <List.Item>уметь эффективно управлять командой;</List.Item>
          <List.Item>навыки для питчинга (презентация своего продукта или проекта на каждом из этапов привлечения инвестиций)</List.Item>
        </List>

        {/* Заключительный текст */}
        <Text c="#495057" lh={1.7} size="md" mb={40}>
          Программа позволит студентам подготовить свои стартап-проекты на республиканский конкурс стартапов вузов. В состав жюри входят международные и местные независимые эксперты, а также представители индустрии. На реализацию одного стартап-проекта победителю конкурса выделяются денежные средства в размере 200 тысяч сомов. Результаты проведенного конкурса размещаются на сайте «Кыргызпатента» и Госфонда ИС. На текущий момент все команды уже дали свои идеи для Бизнес-инкубатора. Половина из команд уже на 50-60 % выполнили свои проекты.
        </Text>

        {/* Ссылки на проекты */}
        <Box mb={60} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Text fw={700} c="#1A235E" size="md" style={{ transition: 'color 0.2s' }}>
              Проекты бизнес инкубатора 1
            </Text>
          </Link>
          <Link href="#" style={{ textDecoration: 'none' }}>
            <Text fw={700} c="#1A235E" size="md" style={{ transition: 'color 0.2s' }}>
              Проекты бизнес инкубатора 2
            </Text>
          </Link>
        </Box>

        {/* Галерея фотографий с эффектом наложения */}
        <Box 
          style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '900px', 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
          className="incubator-gallery"
        >
          {/* Первая картинка (Горизонтальная, слева) */}
          <Box style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '70%', 
            aspectRatio: '4/3',
            overflow: 'hidden',
            zIndex: 1
          }}>
            <Image src="/images/incubator-1.png" alt="Бизнес инкубатор 1" fill style={{ objectFit: 'cover' }} unoptimized />
          </Box>

          {/* Вторая картинка (Вертикальная, справа, накладывается на первую) */}
          <Box style={{ 
            position: 'relative', 
            width: '100%', 
            maxWidth: '45%', 
            aspectRatio: '3/4',  
            overflow: 'hidden',
            zIndex: 2,
            alignSelf: 'flex-end', // Прижимаем вправо
            marginTop: '-25%' // Отрицательный отступ для наложения на первую картинку
          }}
          // Класс для отключения отрицательного отступа на мобильных телефонах
          className="mobile-margin-top-0"
          >
            <Image src="/images/incubator-2.png" alt="Бизнес инкубатор 2" fill style={{ objectFit: 'cover' }} unoptimized />
          </Box>
        </Box>

        {/* CSS для адаптивности галереи */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .incubator-gallery > div {
              max-width: 100% !important;
              align-self: center !important;
            }
            .mobile-margin-top-0 {
              margin-top: 0 !important;
              border: none !important;
            }
          }
        `}} />

      </Container>
    </div>
  );
}