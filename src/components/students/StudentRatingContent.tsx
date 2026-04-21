"use client";

import { useState } from 'react';
import { Select, Button, Group } from '@mantine/core';
import { IconFileText, IconSearch } from '@tabler/icons-react';
import { studentRatingData } from '../../data/studentRatingData';

export function StudentRatingContent() {
    const [year, setYear] = useState<string | null>('2023-2024');
    const [semester, setSemester] = useState<string | null>('Осенняя сессия');

    const currentRatings = year && semester ? studentRatingData[year]?.[semester] || [] : [];

    return (
        <div className="max-w-[900px]">
            {/* Секция фильтров на белом фоне */}
            <div className="mb-12">
                <Group align="flex-end" gap="lg">
                    <Select
                        label="Учебный год"
                        placeholder="Выберите год"
                        data={Object.keys(studentRatingData)}
                        value={year}
                        onChange={setYear}
                        variant="filled"
                        styles={{
                            input: { backgroundColor: '#F8F9FA', border: 'none' },
                            label: { marginBottom: '8px', color: '#4F4F4F', fontWeight: 500}
                        }}
                        className="flex-1"
                    />
                    <Select
                        label="Семестр"
                        placeholder="Выберите семестр"
                        data={['Осенняя сессия', 'Весенняя сессия']}
                        value={semester}
                        onChange={setSemester}
                        variant="filled"
                        styles={{
                            input: { backgroundColor: '#F8F9FA', border: 'none' },
                            label: { marginBottom: '8px', color: '#4F4F4F', fontWeight: 500 }
                        }}
                        className="flex-1"
                    />
                </Group>
            </div>

            {/* Список файлов  */}
            <div className="flex flex-col gap-4 animate-fadeIn">
                {currentRatings.length > 0 ? (
                    currentRatings.map((item, index) => (
                        <a
                            key={index}
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#1A235E]/30 transition-all hover:bg-gray-50/50 group"
                        >
                            <div className="text-[#1A235E] flex-shrink-0">
                                <IconFileText size={24} stroke={1.5} />
                            </div>
                            <span className="text-[16px] md:text-[18px] font-medium text-[#2E2E2E] group-hover:text-[#1A235E] transition-colors">
                {item.title}
              </span>
                        </a>
                    ))
                ) : (
                    <div className="py-12 text-center text-gray-400 italic border border-dashed border-gray-200 rounded-lg">
                        Для выбранного периода данные пока не загружены
                    </div>
                )}
            </div>
        </div>
    );
}