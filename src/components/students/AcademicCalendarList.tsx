"use client";

import { AcademicCalendar } from '../../data/academicCalendarData';
import { IconFileText, IconClock } from '@tabler/icons-react';

interface AcademicCalendarListProps {
    data: AcademicCalendar[];
}

export function AcademicCalendarList({ data }: AcademicCalendarListProps) {
    return (
        <div className="flex flex-col gap-4 max-w-[900px]">
            {data.map((item, index) => {
                const hasFile = item.pdfUrl.length > 0;

                return hasFile ? (
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
                ) : (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-5 rounded-lg border border-dashed border-gray-200 bg-gray-50/30 opacity-70"
                    >
                        <div className="text-gray-400 flex-shrink-0">
                            <IconClock size={24} stroke={1.5} />
                        </div>
                        <span className="text-[16px] md:text-[18px] font-medium text-gray-400 italic">
              {item.title} (Файл скоро будет добавлен)
            </span>
                    </div>
                );
            })}
        </div>
    );
}