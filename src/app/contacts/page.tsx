"use client";

import { Container, Title, Text, Group, Stack, SimpleGrid, ActionIcon } from '@mantine/core';
import { IconSchool, IconBrandInstagram, IconBrandFacebook, IconBrandYoutube, IconBrandWhatsapp } from '@tabler/icons-react';
import { ContactInfo } from '../../components/contacts/ContactInfo';
import { ContactMap } from '../../components/contacts/ContactMap';

export default function ContactsPage() {
    return (
        <div className="bg-white py-16 md:py-24 min-h-screen">
            <Container size="lg" className="max-w-[1200px]">

                {/* Хлебные крошки */}
                <Group gap={8} mb={24}>
                    <IconSchool size={20} className="text-[#1A235E]" stroke={1.5} />
                    <Text c="dimmed" fw={500} size="sm" tt="uppercase" style={{ letterSpacing: '1px' }}>
                        Главная / Контакты
                    </Text>
                </Group>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* ЛЕВАЯ ЧАСТЬ (5 колонок) */}
                    <div className="lg:col-span-5">
                        <Title
                            order={1}
                            className="text-[48px] font-serif text-[#1A235E] uppercase"
                            style={{
                                fontFamily: 'Georgia, serif',
                                marginBottom: '30px' // Точный отступ под заголовком
                            }}
                        >
                            Контакты
                        </Title>

                        <Text
                            className="text-gray-600 leading-relaxed"
                            style={{
                                fontSize: '16px',
                                marginBottom: '60px'
                            }}
                        >
                            Если у вас есть вопросы о поступлении, обучении или сотрудничестве,
                            вы можете связаться с нами любым удобным способом.
                            Сотрудники института готовы предоставить необходимую информацию.
                        </Text>

                        <ContactInfo />

                        {/* Соцсети */}
                        <Stack gap="md" mt={100}>
                            <Text className="text-[#1A235E] font-bold text-lg">
                                Мы в социальных сетях:
                            </Text>
                            <Group gap="lg">
                                <ActionIcon 
                                    component="a"
                                    href="/" 
                                    target="_blank"
                                    variant="transparent" 
                                    size="xl" 
                                    className="text-green-500 hover:scale-110 transition-transform"
                                >
                                    <IconBrandWhatsapp size={35} />
                                </ActionIcon>

                                <ActionIcon 
                                    component="a"
                                    href="/" 
                                    target="_blank"
                                    variant="transparent" 
                                    size="xl" 
                                    className="text-blue-700 hover:scale-110 transition-transform"
                                >
                                    <IconBrandFacebook size={35} />
                                </ActionIcon>

                                <ActionIcon 
                                    component="a"
                                    href="https://www.instagram.com/inai.kg?igsh=aTkxbDI4bWRtM204" 
                                    target="_blank"
                                    variant="transparent" 
                                    size="xl" 
                                    className="text-pink-600 hover:scale-110 transition-transform"
                                >
                                    <IconBrandInstagram size={35} />
                                </ActionIcon>

                                <ActionIcon 
                                    component="a"
                                    href="https://youtube.com/@kgfiproject3728?si=zWGQz5UaAXCes_cE" 
                                    target="_blank"
                                    variant="transparent" 
                                    size="xl" 
                                    className="text-red-600 hover:scale-110 transition-transform"
                                >
                                    <IconBrandYoutube size={35} />
                                </ActionIcon>
                            </Group>
                        </Stack>
                    </div>

                    <div className="lg:col-span-7 h-full min-h-[500px]">
                        <ContactMap />
                    </div>

                </div>
            </Container>
        </div>
    );
}