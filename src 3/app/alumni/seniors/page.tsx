"use client";

import { Container, Title, Text } from '@mantine/core';

export default function Page() {
    return (
        <Container size="lg" py={100}>
            <Title order={1} mb="md">Страница в разработке</Title>
            <Text c="dimmed">Совсем скоро здесь появится информация об этом разделе INAI.KG.</Text>
        </Container>
    );
}