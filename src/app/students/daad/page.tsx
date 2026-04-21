"use client";

import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { daadScholarshipData } from '../../../data/scholarshipsData';
import { ScholarshipContent } from '../../../components/students/ScholarshipContent';

export default function DaadScholarshipsPage() {
    return (
        <main className="bg-white py-16 md:py-24 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                {/* Хлебные крошки */}
                <Group gap={8} mb={20}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                        Студентам / ДААД стипендии
                    </Text>
                </Group>

                {/* Заголовок страницы с новым цветом #2E2E2E */}
                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] uppercase tracking-wider mb-16"
                    style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        color: "#2E2E2E" // Измененный цвет заголовка
                    }}
                >
                    ДААД стипендии (германская служба академических обменов)
                </Title>

                <div className="mt-12">
                    <div className="animate-fadeIn">
                        <ScholarshipContent data={daadScholarshipData} />
                    </div>
                </div>
            </Container>
        </main>
    );
}