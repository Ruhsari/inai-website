"use client";

import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { examScheduleData } from '../../../data/examScheduleData';
import { ExamScheduleList } from '../../../components/students/ExamScheduleList';

export default function ExamSchedulePage() {
    return (
        <main className="bg-white py-16 md:py-24 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                {/* Breadcrumbs */}
                <Group gap={8} mb={20}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
                        Студентам / График сессии
                    </Text>
                </Group>

                {/* Заголовок страницы */}
                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] uppercase tracking-wider mb-16"
                    style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        color: "#2E2E2E"
                    }}
                >
                    График сессии
                </Title>

                <div className="mt-12 animate-fadeIn">
                    <ExamScheduleList data={examScheduleData} />
                </div>
            </Container>
        </main>
    );
}