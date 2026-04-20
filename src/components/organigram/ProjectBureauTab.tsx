import { Text, SimpleGrid, Box } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectBureauMember {
  id: string | number;
  name: string;
  role: string;
  email: string;
  image?: string;
}

export function ProjectBureauTab({ data }: { data: ProjectBureauMember[] }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={40}>
      {data && data.length > 0 ? (
        data.map((person) => (
          <Link 
            href={`/about/organigram/${person.id}`} 
            key={person.id}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            className="group" // Класс для анимации при наведении
          >
            {/* ОБЩИЙ БЕЛЫЙ КОНТЕЙНЕР-КАРТОЧКА */}
            <Box 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                transition: 'all 0.3s ease', 
                cursor: 'pointer',
                backgroundColor: 'white', // Белый фон
                borderRadius: '12px',      // Скругление карточки
                padding: '16px',          // Внутренние отступы
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', // Общая тень карточки
                height: '100%'
              }} 
              className="group-hover:-translate-y-2 group-hover:shadow-xl"
            >
              
              {/* Контейнер для фото (внутри карточки) */}
              <Box 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '300px', // Высота фото адаптирована под отступы карточки
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  marginBottom: '20px'
                }}
              >
                {person.image ? (
                  <Image 
                    src={person.image} 
                    alt={person.name} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    unoptimized
                  />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#adb5bd', fontSize: '14px', fontStyle: 'italic' }}>
                    Фото отсутствует
                  </div>
                )}
              </Box>
              
              {/* Текстовый блок */}
              <Box style={{ padding: '0 4px', flex: 1 }}>
                <Text fw={700} c="#1A235E" size="16px" lh={1.3} mb={8} className="group-hover:text-blue-700 transition-colors">
                  {person.name}
                </Text>
                <Text c="dimmed" size="14px" mb={4} fw={500}>
                  {person.role}
                </Text>
                <Text c="dimmed" size="13px">
                  {person.email}
                </Text>
              </Box>

            </Box>
          </Link>
        ))
      ) : (
        <Text c="dimmed" style={{ fontStyle: 'italic', gridColumn: '1 / -1' }}>
          Список участников проектного бюро формируется...
        </Text>
      )}
    </SimpleGrid>
  );
}