"use client";

import { Container, Title, Text, Group } from '@mantine/core';
import { IconSchool } from '@tabler/icons-react';
import { StudentRatingContent } from '../../../components/students/StudentRatingContent';

export default function StudentRatingPage() {
    return (
        <main className="bg-white py-16 md:py-24 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                <Group gap={8} mb={20}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
                        Студентам / Рейтинг студентов
                    </Text>
                </Group>

                {/* Заголовок */}
                <Title
                    order={1}
                    className="text-[32px] md:text-[42px] uppercase tracking-wider mb-16"
                    style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        color: "#2E2E2E"
                    }}
                >
                    Рейтинг студентов
                </Title>

                <div className="mt-12">
                    <StudentRatingContent />
                </div>
            </Container>
        </main>
    );
}