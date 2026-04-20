"use client";

import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { defenseScheduleData } from '../../../data/defenseScheduleData';
import { DefenseScheduleList } from '../../../components/students/DefenseScheduleList';

export default function DefenseSchedulePage() {
    return (
        <main className="bg-white py-16 md:py-24 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                <Group gap={8} mb={20}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                        Студентам / График защиты курсовых проектов
                    </Text>
                </Group>

                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] uppercase tracking-wider mb-16"
                    style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        color: "#2E2E2E"
                    }}
                >
                    График защиты курсовых проектов
                </Title>

                <div className="mt-12 animate-fadeIn">
                    <DefenseScheduleList data={defenseScheduleData} />
                </div>
            </Container>
        </main>
    );
}