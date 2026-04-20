"use client";

import { DefenseSchedule } from '../../data/defenseScheduleData';
import { IconFileText } from '@tabler/icons-react';

interface DefenseScheduleListProps {
    data: DefenseSchedule[];
}

export function DefenseScheduleList({ data }: DefenseScheduleListProps) {
    return (
        <div className="flex flex-col gap-4 max-w-[900px]">
            {data.map((item, index) => (
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
            ))}
        </div>
    );
}