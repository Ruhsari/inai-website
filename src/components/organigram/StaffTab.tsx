import { Text } from '@mantine/core';
import Image from 'next/image';

interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  image?: string;
}

export function StaffTab({ data }: { data: StaffMember[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
      {data && data.length > 0 ? (
        data.map((person) => (
          <div key={person.id} className="flex flex-col items-center w-full">
            
            {/* Контейнер для фото (жесткая ширина и высота) */}
            <div className="relative w-full max-w-[260px] aspect-[3/4] bg-gray-50 rounded-md overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] mb-6 shrink-0">
              {person.image ? (
                <Image 
                  src={person.image} 
                  alt={person.name} 
                  fill 
                  className="object-cover"
                  unoptimized // Помогает, если с картинками пока есть проблемы
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 italic text-sm">
                  Фото отсутствует
                </div>
              )}
            </div>
            
            {/* Текстовая информация (Центрированная) */}
            <div className="text-center w-full px-2">
              <Text className="text-[#1A235E] font-bold text-[16px] leading-snug mb-1.5">
                {person.name}
              </Text>
              <Text className="text-gray-500 text-[13.5px] mb-1">
                {person.role}
              </Text>
              <Text className="text-gray-500 text-[13px]">
                {person.email}
              </Text>
            </div>
            
          </div>
        ))
      ) : (
        <Text className="text-gray-400 col-span-full py-10 text-center italic">
          Список сотрудников в данный момент формируется.
        </Text>
      )}
    </div>
  );
}