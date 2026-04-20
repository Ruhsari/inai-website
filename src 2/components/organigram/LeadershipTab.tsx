import { Text, SimpleGrid, Box } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link'; // 1. ДОБАВЛЯЕМ ИМПОРТ

export function LeadershipTab({ data }: { data: any[] }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing={40}>
      {data.map((person) => (
        // 2. ОБРАЧИВАЕМ В LINK И УКАЗЫВАЕМ ПУТЬ
        <Link 
          href={`/about/organigram/${person.id}`} 
          key={person.id} 
          style={{ textDecoration: 'none', color: 'inherit' }}
          className="group" // Добавляем класс для эффекта при наведении
        >
          <Box style={{ display: 'flex', flexDirection: 'column', transition: 'transform 0.2s', cursor: 'pointer' }} className="group-hover:-translate-y-1">
            
            {/* Контейнер фото */}
            <Box style={{ position: 'relative', width: '100%', maxWidth: '280px', height: '340px', backgroundColor: '#f8f9fa', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
              {person.image ? (
                <Image src={person.image} alt={person.name} fill style={{ objectFit: 'cover' }} unoptimized />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#adb5bd' }}>Нет фото</div>
              )}
            </Box>
            
            {/* Текст */}
            <Box style={{ padding: '0 8px' }}>
              <Text fw={700} c="#1A235E" size="16px" lh={1.3} mb={4} className="group-hover:text-blue-600 transition-colors">
                {person.name}
              </Text>
              <Text c="dimmed" size="14px" mb={4}>{person.role}</Text>
              <Text c="dimmed" size="13px">{person.email}</Text>
            </Box>

          </Box>
        </Link>
      ))}
    </SimpleGrid>
  );
}