"use client";

import { useState } from 'react';
import { Container, Title, Text, Group, UnstyledButton } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

import { PartnerTab } from '../../../components/international/PartnerTab';
import { DaadTab } from '../../../components/international/DaadTab';
import { UniversitiesTab } from '../../../components/international/UniversitiesTab';

const TABS = [
    { id: 'partner', label: 'Ассоциированный партнер' },
    { id: 'daad', label: 'Проекты ДААД' },
    { id: 'universities', label: 'Партнеры ВУЗы' },
];

export default function InternationalPage() {
    const [activeTab, setActiveTab] = useState('partner');

    return (
        <div className="bg-white py-16 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                {/* Хлебные крошки */}
                <Group gap={8} mb={24}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text className="text-gray-500 font-medium text-sm tracking-wide uppercase">
                        Органиграмма
                    </Text>
                </Group>

                {/* 1. Заголовок (mb-0, так как отступ сделаем через gap в сетке) */}
                <Title
                    order={1}
                    className="text-[42px] font-serif text-[#1A235E] uppercase mb-0"
                    style={{ fontFamily: 'Georgia, serif' }}
                >
                    Международное сотрудничество
                </Title>

                <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-12">

                    {/* ЛЕВАЯ КОЛОНКА С ЛИНИЕЙ */}
                    <div className="hidden lg:block lg:col-span-1 border-r-2 border-[#1A235E] h-[85px]">
                    </div>

                    {/*Навигация и Контент */}
                    <div className="lg:col-span-11 pl-10">
                        <div className="flex flex-col gap-4 mb-[50px]">
                            {TABS.map((tab) => (
                                <UnstyledButton
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-[18px] transition-colors w-fit leading-none ${
                                        activeTab === tab.id
                                            ? 'text-[#1A235E] font-bold border-b-2 border-[#1A235E]'
                                            : 'text-gray-400 hover:text-[#1A235E]'
                                    }`}
                                >
                                    {tab.label}
                                </UnstyledButton>
                            ))}
                        </div>

                        {/* Контент текущей вкладки */}
                        <div className="w-full">
                            {activeTab === 'partner' && <PartnerTab />}
                            {activeTab === 'daad' && <DaadTab />}
                            {activeTab === 'universities' && <UniversitiesTab />}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}