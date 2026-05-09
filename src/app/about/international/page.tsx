"use client";

import { useState } from 'react';
import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

import { partnerData, daadProjects, universitiesData } from '../../../data/internationalData';
import { PartnerTab } from '../../../components/international/PartnerTab';
import { DaadTab } from '../../../components/international/DaadTab';
import { UniversitiesTab } from '../../../components/international/UniversitiesTab';

const menuTabs = [
    'Ассоциированный партнер',
    'Проекты ДААД',
    'Партнеры ВУЗы'
];

export default function InternationalPage() {
    const [activeTab, setActiveTab] = useState('Ассоциированный партнер');

    return (
        <div className="bg-white py-16 md:py-24 min-h-screen w-full">
            <Container size="lg" className="w-full max-w-[1200px] mx-auto">

                {/* ИСПРАВЛЕННЫЕ ХЛЕБНЫЕ КРОШКИ */}
                <Group gap={8} mb={24}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
                        Международное сотрудничество / {activeTab}
                    </Text>
                </Group>

                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] text-[#1A235E] uppercase tracking-wider mb-16"
                    style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
                >
                    Международное сотрудничество
                </Title>

                <div className="relative pl-8 md:pl-12 mt-[50px]">
                    {/* Навигационное меню */}
                    <div className="relative flex flex-col w-full mb-12">
                        {/* Ограниченная серая линия */}
                        <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-[1px] bg-gray-200" />

                        {menuTabs.map((tab: string) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`w-fit flex text-left py-3 relative outline-none bg-transparent transition-all ${
                                        isActive
                                            ? 'text-[#1A235E] font-bold text-[18px]'
                                            : 'text-gray-400 hover:text-[#1A235E] text-[18px]'
                                    }`}
                                >
                                    {/* Акцентная синяя линия */}
                                    {isActive && (
                                        <div className="absolute -left-8 md:-left-12 top-0 bottom-0 w-[3px] bg-[#1A235E] z-10" />
                                    )}
                                    {tab}
                                </button>
                            );
                        })}
                    </div>


                    <div className="w-full animate-fadeIn min-w-0">
                        {activeTab === 'Ассоциированный партнер' && (
                            <PartnerTab data={partnerData} />
                        )}
                        {activeTab === 'Проекты ДААД' && (
                            <DaadTab data={daadProjects} />
                        )}
                        {activeTab === 'Партнеры ВУЗы' && (
                            <UniversitiesTab data={universitiesData} />
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}