"use client";

import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';

import { partnersData } from '../../../data/partnersData';
import { PartnersTab } from '../../../components/partners/PartnersTab';

export default function PartnersPage() {
    return (
        <div className="bg-white py-16 md:py-24 min-h-screen w-full">
            <Container size="lg" className="w-full max-w-[1200px] mx-auto">

                {/* ИСПРАВЛЕННЫЕ ХЛЕБНЫЕ КРОШКИ */}
                <Group gap={8} mb={24}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
                        Партнёрские организации
                    </Text>
                </Group>

                {/* Главный заголовок */}
                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] text-[#1A235E] uppercase tracking-wider mb-16"
                    style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
                >
                    Наши партнеры
                </Title>

                <div className="relative pl-8 md:pl-12 mt-[50px]">

                    <div className="relative flex flex-col w-full mb-12">
                        <div className="py-3">
                            <h2 className="text-[#1A235E] font-bold text-[18px] md:text-[22px]">
                                Партнёрские организации
                            </h2>
                        </div>
                    </div>

                    <div className="w-full animate-fadeIn min-w-0">
                        <PartnersTab data={partnersData} />
                    </div>
                </div>
            </Container>
        </div>
    );
}