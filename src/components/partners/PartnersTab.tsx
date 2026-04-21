'use client';
import { useState } from 'react';
import Image from 'next/image';

export function PartnersTab({ data }: { data: any[] }) {
    return (
        <div className="flex flex-col animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {data.map((item) => (
                    <PartnerCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

function PartnerCard({ item }: { item: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white rounded-[20px] p-6 shadow-md transition-all border border-gray-50 cursor-pointer hover:shadow-lg"
        >
            <div className="text-gray-400 text-xs mb-4 flex items-center gap-1">
                {isExpanded ? '✕ Свернуть' : '+ Узнать больше'}
            </div>
            <div className="flex flex-col gap-4">
                <div className="h-[60px] flex items-center">
                    <Image
                        src={item.logo}
                        alt={item.title}
                        width={180}
                        height={60}
                        className="object-contain h-full w-auto"
                    />
                </div>
                <h3 className="text-[#1A235E] font-bold text-lg leading-tight">{item.title}</h3>
                <div className="w-12 h-[2px] bg-[#1A235E]"></div>
                <p className="text-sm text-gray-600">{item.shortDesc}</p>

                {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-slideDown">
                        <ul className="list-disc pl-4 space-y-2 text-sm text-gray-600">
                            {item.details.map((detail: string, i: number) => <li key={i}>{detail}</li>)}
                        </ul>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1A235E] text-xs mt-4 block underline font-medium"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Перейти на сайт организации
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}