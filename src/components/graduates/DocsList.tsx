"use client";

import { IconFileText } from '@tabler/icons-react';

// Описываем, какие данные принимает компонент
interface DocsListProps {
  docs: string[];
}

export function DocsList({ docs }: DocsListProps) {
  return (
    <div className="flex flex-col gap-4 max-w-[850px]">
      {docs.map((docTitle, index) => (
        <a
          key={index}
          href="#" // В будущем замени на реальную ссылку
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#1A235E]/30 transition-all hover:bg-gray-50/50 group"
        >
          <div className="text-[#1A235E]">
            <IconFileText size={24} stroke={1.5} />
          </div>
          <span className="text-[16px] md:text-[18px] font-medium text-[#2E2E2E] group-hover:text-[#1A235E] transition-colors">
            {docTitle}
          </span>
        </a>
      ))}
    </div>
  );
}