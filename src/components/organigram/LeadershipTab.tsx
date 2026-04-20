import { Text } from '@mantine/core';
import Image from 'next/image';

export function LeadershipTab({ data }: { data: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 w-full">
      {data.map((person) => (
        /* min-w-[240px] ЗАЩИЩАЕТ КАРТОЧКУ ОТ СЖАТИЯ */
        <div key={person.id} className="flex flex-col w-full min-w-[240px] max-w-[300px] mx-auto md:mx-0">
          
          {/* Контейнер фото */}
          <div className="relative w-full h-[340px] bg-gray-50 rounded-md overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.1)] mb-6 shrink-0">
            {person.image ? (
              <Image 
                src={person.image} 
                alt={person.name} 
                fill 
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-gray-400 bg-gray-100 text-sm italic">
                Фото отсутствует
              </div>
            )}
          </div>
          
          {/* Контейнер текста */}
          <div className="w-full px-2 text-center md:text-left">
            <Text className="text-[#1A235E] font-bold text-[16px] leading-snug mb-1.5 break-words">
              {person.name}
            </Text>
            <Text className="text-gray-500 text-[13.5px] mb-1 break-words">
              {person.role}
            </Text>
            <Text className="text-gray-500 text-[13px] break-words">
              {person.email}
            </Text>
          </div>
          
        </div>
      ))}
    </div>
  );
}