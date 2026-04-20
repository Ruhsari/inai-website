"use client";

import { Group, Burger, Drawer, UnstyledButton, TextInput, ActionIcon, Menu, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconSun, IconChevronDown, IconExternalLink } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { link: '/', label: 'Главная', hasDropdown: false },
    {
        link: '/about',
        label: 'О нас',
        hasDropdown: true,
        sublinks: [
            { label: 'О нас', link: '/about' },
            { label: 'Органиграмма', link: '/about/organigram' },
            { label: 'Нормативные документы', link: '/about/documents' },
            { label: 'Международное сотрудничество', link: '/about/international' },
            { label: 'Наши партнеры', link: '/about/partners' },
        ]
    },
    {
        link: '/applicants',
        label: 'Абитуриентам',
        hasDropdown: true,
        sublinks: [
            { label: 'Бакалавриат', link: '/applicants/bachelor' },
            { label: 'Магистратура', link: '/applicants/master' },
            { label: 'Правила приема студентов', link: '/applicants/rules' },
            { label: 'Стипендия DAAD', link: '/applicants/daad' },
            { label: 'Учебные программы', link: '/applicants/programs' },
        ]
    },
    {
        link: '/students',
        label: 'Студентам',
        hasDropdown: true,
        isSpecialStudents: true,
    },
    {
        link: '/alumni',
        label: 'Выпускникам',
        hasDropdown: true,
        sublinks: [
            { label: 'Ассоциация выпускников', link: '/alumni/association' },
            { label: 'Нормативные документы Ассоциации', link: '/alumni/docs' },
            { label: 'Мероприятия', link: '/alumni/events' },
            { label: 'Выпускникам 4-курса', link: '/alumni/seniors' },
            { label: 'Выпускникам магистратуры', link: '/alumni/degree' },
            { label: 'Резюме студентов', link: '/alumni/resumes' },
        ]
    },
    { link: '/contacts', label: 'Контакты', hasDropdown: false },
];

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false);

    const StudentsDropdown = () => (
        <div className="p-1 min-w-[280px]">
            <Menu.Item component={Link} href="/students/profile" className="font-semibold text-blue-700">
                Личный профиль
            </Menu.Item>
            <Divider label="Учебный процесс" labelPosition="left" my="xs" />
            <Menu.Item component={Link} href="/students/daad">ДААД стипендии</Menu.Item>
            <Menu.Item component={Link} href="/students/schedule">График учебного процесса</Menu.Item>
            <Menu.Item component={Link} href="/students/exams">График сессии</Menu.Item>
            <Menu.Item component={Link} href="/students/projects">График защиты курсовых проектов</Menu.Item>
            <Menu.Item
                component="a"
                href="https://lms.inai.kg/Account/Login?ReturnUrl=%2FStudentProfiles"
                target="_blank"
                rightSection={<IconExternalLink size={14} />}
                className="font-semibold text-orange-600"
            >
                Ebilim
            </Menu.Item>
            <Menu.Item component={Link} href="/students/rating">Рейтинг студентов</Menu.Item>
            <Divider label="Студенческая жизнь" labelPosition="left" my="xs" />
            <Menu.Item component={Link} href="/students/senate">Студенческий сенат</Menu.Item>
            <Menu.Item component={Link} href="/students/enactus">Энактус</Menu.Item>
            <Menu.Item component={Link} href="/students/incubator">Бизнес инкубатор при КГИПИ</Menu.Item>
        </div>
    );

    return (
        <header className="pt-4 px-4 md:px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">

                {/* ВЕРХНЯЯ ЧАСТЬ */}
                <div className="flex items-center justify-between py-3 px-6">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo/inai-logo.svg"
                            alt="INAI.KG"
                            width={200}
                            height={50}
                            priority
                            style={{ height: 'auto' }}
                        />
                    </Link>

                    <Group gap="sm" className="hidden md:flex">
                        <TextInput
                            placeholder="Поиск по сайту"
                            leftSection={<IconSearch size={16} stroke={1.5} />}
                            radius="md"
                            size="sm"
                            variant="filled"
                            className="w-64"
                        />
                        <ActionIcon size="lg" variant="default" radius="md">
                            <IconSun size={18} stroke={1.5} />
                        </ActionIcon>
                        <Menu shadow="md" width={100} position="bottom-end">
                            <Menu.Target>
                                <UnstyledButton className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700">
                                    РУ <IconChevronDown size={14} stroke={1.5} />
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item>KG</Menu.Item>
                                <Menu.Item>EN</Menu.Item>
                                <Menu.Item>DE</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>

                    <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
                </div>

                <Divider color="gray.2" />

                {/* НИЖНЯЯ ЧАСТЬ: Навигация */}
                <div className="hidden md:flex justify-center gap-8 py-3 px-6">
                    {links.map((link) => (
                        link.hasDropdown ? (
                            <Menu
                                key={link.label}
                                trigger="hover"
                                shadow="md"
                                position="bottom-start"
                                offset={14}
                                width={link.isSpecialStudents ? 320 : 260}
                                withinPortal
                            >
                                <Menu.Target>
                                    <UnstyledButton
                                        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1 cursor-default"
                                    >
                                        {link.label} <IconChevronDown size={14} stroke={2} className="text-gray-400" />
                                    </UnstyledButton>
                                </Menu.Target>

                                <Menu.Dropdown className="border-gray-100 shadow-xl rounded-lg p-2">
                                    {link.isSpecialStudents ? (
                                        <StudentsDropdown />
                                    ) : (
                                        link.sublinks?.map((sub) => (
                                            <Menu.Item
                                                key={sub.label}
                                                component={Link}
                                                href={sub.link}
                                                className="text-sm py-2.5 px-4 rounded-md"
                                            >
                                                {sub.label}
                                            </Menu.Item>
                                        ))
                                    )}
                                </Menu.Dropdown>
                            </Menu>
                        ) : (
                            <UnstyledButton
                                key={link.label}
                                component={Link}
                                href={link.link}
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-1"
                            >
                                {link.label}
                            </UnstyledButton>
                        )
                    ))}
                </div>
            </div>

            {/* МОБИЛЬНОЕ МЕНЮ */}
            <Drawer
                opened={opened}
                onClose={close}
                size="xs"
                padding="md"
                hiddenFrom="md"
                title="Меню"
                zIndex={1000000}
            >
                <Stack gap="sm">
                    <TextInput placeholder="Поиск по сайту" leftSection={<IconSearch size={16} />} radius="md" mb="sm" />
                    {links.map((link) => (
                        <div key={link.label} className="border-b border-gray-100 pb-2">
                            {link.hasDropdown ? (
                                <div className="py-2 font-semibold text-gray-800">
                                    {link.label}
                                </div>
                            ) : (
                                <UnstyledButton
                                    component={Link}
                                    href={link.link}
                                    onClick={close}
                                    className="block py-2 font-semibold text-gray-800"
                                >
                                    {link.label}
                                </UnstyledButton>
                            )}

                            {link.hasDropdown && (
                                <div className="pl-4 mt-1 flex flex-col gap-2">
                                    {link.isSpecialStudents ? (
                                        <>
                                            <Link href="/students/profile" className="text-sm text-blue-600" onClick={close}>• Личный профиль</Link>
                                            <Link href="/students/schedule" className="text-sm text-gray-600" onClick={close}>• Учебный процесс</Link>
                                            <Link href="https://lms.inai.kg/" target="_blank" className="text-sm text-orange-600" onClick={close}>• Ebilim</Link>
                                        </>
                                    ) : (
                                        link.sublinks?.map(sub => (
                                            <Link key={sub.label} href={sub.link} className="text-sm text-gray-500" onClick={close}>
                                                • {sub.label}
                                            </Link>
                                        ))
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </Stack>
            </Drawer>
        </header>
    );
}