"use client";

import { Container, Title, Text, SimpleGrid, Stack, Box, ActionIcon, Divider } from '@mantine/core';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';

const reasons = [
  {
    title: 'Стипендия DAAD',
    description: 'Стипендия DAAD открывает путь к обучению и стажировке в лучших вузах Германии.',
    icon: '/icons/daad.svg',
  },
  {
    title: 'Современное образование',
    description: 'Практическое обучение, современные лаборатории и активная студенческая жизнь помогают строить успешную карьеру.',
    icon: '/icons/education.svg',
  },
  {
    title: 'Учёба в Германии',
    description: 'После 3 курса студенты могут продолжить обучение в Германии и получить международный диплом.',
    icon: '/icons/germany.svg',
  },
];

export function ReasonsSection() {
  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        {/* ВЕРХНЯЯ ЧАСТЬ: Заголовок и миссия */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <Title order={2} className="text-[42px] font-bold text-[#1A235E] leading-tight max-w-sm">
            Причины выбрать <br /> INAI.kg
          </Title>
          <Text className="text-gray-400 text-sm max-w-md leading-relaxed md:pt-4">
            Миссией Института является расширение границ IT-образования в Кыргызской Республике за счет внедрения инновационных образовательных программ германских вузов.
          </Text>
        </div>

        {/* ОСНОВНАЯ КАРТОЧКА */}
        <Box className="bg-[#F8F9FA] rounded-[40px] p-10 md:p-16 shadow-sm">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={0}>
            {reasons.map((item, index) => (
              <div key={item.title} className="relative flex flex-col items-center text-center px-8">
                
                {/* Вертикальный разделитель (кроме последнего элемента) */}
                {index < reasons.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-40 bg-gray-300" />
                )}

                <Stack align="center" gap="xl" className="h-full">
                  {/* Иконка */}
                  <Box className="w-20 h-20 relative">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      className="object-contain"
                    />
                  </Box>

                  {/* Текст */}
                  <Stack gap="md" className="flex-grow">
                    <Text className="text-[#1A235E] font-bold text-2xl leading-tight">
                      {item.title}
                    </Text>
                    <Text className="text-gray-500 text-sm leading-relaxed px-2">
                      {item.description}
                    </Text>
                  </Stack>

                  {/* Кнопка-стрелка */}
                  <ActionIcon 
                    variant="outline" 
                    color="teal" 
                    size="xl" 
                    radius="xl"
                    className="mt-4 border-gray-300 hover:bg-teal-50 transition-colors"
                  >
                    <IconArrowRight size={20} stroke={1.5} className="text-gray-600" />
                  </ActionIcon>
                </Stack>

              </div>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </section>
  );
}