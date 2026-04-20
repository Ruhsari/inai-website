'use client';

import { useState } from 'react';
import Image from 'next/image';

interface UniversityData {
    id: string;
    title: string;
    logo: string;
    shortDesc: string;
    link: string;
    details: string[];
}

interface UniversitiesTabProps {
    data: UniversityData[];
}

const UniversityCard = ({ title, logo, shortDesc, details, link }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-white rounded-[20px] p-6 shadow-md transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-fit ${
                isExpanded ? 'scale-[1.02]' : 'hover:shadow-lg'
            }`}
        >
            <div className="flex justify-between items-start mb-4">
                <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#1A235E] transition-colors">
                    <span className="text-lg">{isExpanded ? '✕' : '+'}</span>
                    Узнать больше
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="w-full md:w-[150px] flex-shrink-0 flex items-center justify-center">
                    <Image src={logo} alt={title} width={150} height={80} className="object-contain" />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#1A235E] font-bold text-lg leading-tight mb-4">{title}</h3>
                    <div className="w-16 h-[2px] bg-[#1A235E] mb-4"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{shortDesc}</p>
                </div>
            </div>

            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    <ul className="list-disc pl-5 space-y-2">
                        {details.map((detail: string, i: number) => <li key={i}>{detail}</li>)}
                    </ul>
                    {link && <p className="mt-4 italic">Подробнее: <a href={link} className="text-blue-600 underline">{link}</a></p>}
                </div>
            )}
        </div>
    );
};

export function UniversitiesTab({ data }: UniversitiesTabProps) {
    return (
        <div className="flex flex-col">
            <h2 className="text-[24px] font-bold text-[#1A235E] mb-8 uppercase">
                Партнеры ВУЗы
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {data.map((uni) => (
                    <UniversityCard
                        key={uni.id}
                        title={uni.title}
                        logo={uni.logo}
                        shortDesc={uni.shortDesc}
                        details={uni.details}
                        link={uni.link}
                    />
                ))}
            </div>
        </div>
    );
}