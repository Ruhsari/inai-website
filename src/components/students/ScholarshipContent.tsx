"use client";

import { ScholarshipDetail } from '../../data/scholarshipsData';

interface ScholarshipContentProps {
    data: ScholarshipDetail;
}

export function ScholarshipContent({ data }: ScholarshipContentProps) {
    return (
        <div className="max-w-[1000px]">
            <h3 className="text-[#1A235E] font-bold text-[22px] md:text-[24px] mb-8 leading-tight uppercase">
                {data.title}
            </h3>

            <div className="space-y-12 text-[#4F4F4F]">
                {/* Требования */}
                <section>
                    <h4 className="text-[#1A235E] font-bold text-lg mb-4 uppercase">Требования для участия:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        {data.requirements.map((req, idx) => (
                            <li key={idx} className="text-[16px]">{req}</li>
                        ))}
                    </ul>
                </section>

                {/* Условия отбора */}
                <section>
                    <h4 className="text-[#1A235E] font-bold text-lg mb-4 uppercase">Условия отбора:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        {data.selectionConditions.map((condition, idx) => (
                            <li key={idx} className="text-[16px]">{condition}</li>
                        ))}
                    </ul>
                </section>

                {/* Длительность */}
                <section>
                    <h4 className="text-[#1A235E] font-bold text-lg mb-4 uppercase">Длительность стипендии:</h4>
                    <p className="text-[16px]">{data.duration}</p>
                </section>

                {/* Стипендии на проживание */}
                <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#1A235E]">
                    <h4 className="text-[#1A235E] font-bold text-lg mb-4 uppercase">Стипендии на проживание в г.Цвикау:</h4>
                    <ul className="space-y-2">
                        {data.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-[16px] font-medium flex items-center gap-2 text-[#1A235E]">
                                <span>•</span> {benefit}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}