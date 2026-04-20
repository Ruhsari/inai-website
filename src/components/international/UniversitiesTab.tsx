'use client';

import { useState } from 'react';
import Image from 'next/image';

interface UniversityCardProps {
    title: string;
    logo: string;
    shortDesc: string;
    fullDesc: React.ReactNode;
}

const UniversityCard = ({ title, logo, shortDesc, fullDesc }: UniversityCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-white rounded-[20px] p-6 shadow-md transition-all duration-300 cursor-pointer border border-gray-100 flex flex-col h-fit ${
                isExpanded ? 'scale-[1.02]' : 'hover:shadow-lg'
            }`}
        >
            {/* Верхняя часть карточки */}
            <div className="flex justify-between items-start mb-4">
                <button className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#1A235E] transition-colors">
                    <span className="text-lg">{isExpanded ? '✕' : '+'}</span>
                    Узнать больше
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-4">
                <div className="w-full md:w-[150px] flex-shrink-0 flex items-center justify-center">
                    <Image
                        src={logo}
                        alt={title}
                        width={150}
                        height={80}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[#1A235E] font-bold text-lg leading-tight mb-4">
                        {title}
                    </h3>
                    <div className="w-16 h-[2px] bg-[#1A235E] mb-4"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {shortDesc}
                    </p>
                </div>
            </div>

            {/* Раскрывающаяся часть */}
            {isExpanded && (
                <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                    {fullDesc}
                </div>
            )}
        </div>
    );
};

export function UniversitiesTab() {
    return (
        <div className="flex flex-col">
            <h2 className="text-[24px] font-bold text-[#1A235E] mb-8 uppercase">
                Партнеры ВУЗы
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* КАРТОЧКА 1: UEHS */}
                <UniversityCard
                    title="Университет экономики и гуманитарных наук в Варшаве (UEHS)"
                    logo="/images/uni.png"
                    shortDesc="Кыргызско-Германский институт прикладной информатики и Университет экономики и гуманитарных наук в Варшаве подписали соглашение о программе двойного диплома."
                    fullDesc={
                        <div className="space-y-4">
                            <p>Студенты получили возможность получать два диплома:</p>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li>Кыргызско-Германского института прикладной информатики (КГИПИ);</li>
                                <li>Университета экономики и гуманитарных наук в Варшаве (UEHS).</li>
                            </ol>
                            <p>Подробная информация об университете — <a href="http://vizja.pl/" className="text-blue-600 underline">http://ufm.vizja.pl/</a></p>
                        </div>
                    }
                />

                {/* КАРТОЧКА 2: Риека */}
                <UniversityCard
                    title="Университет Риеки, Хорватия"
                    logo="/images/uni2.png"
                    shortDesc="Университет Риеки — это современный европейский университет и центр передового опыта в регионе и за его пределами."
                    fullDesc={
                        <div className="space-y-4">
                            <p>Обе стороны подписали МЕМОРАНДУМ О ВЗАИМОПОНИМАНИИ, в рамках которого предполагается:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Обмен студентами;</li>
                                <li>Обмен преподавателями;</li>
                                <li>Совместные научные публикации;</li>
                                <li>Развитие совместных исследований.</li>
                            </ul>
                            <p>Подробная информация об университете — <a href="https://www.efri.uniri.hr/en" className="text-blue-600 underline">https://www.efri.uniri.hr/en</a></p>
                        </div>
                    }
                />
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
}