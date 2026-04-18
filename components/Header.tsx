"use client";

import { Group, Burger, Drawer, UnstyledButton, TextInput, ActionIcon, Menu, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconSun, IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';

const links = [
  { link: '/', label: 'Главная', hasDropdown: false },
  { link: '#about', label: 'О нас', hasDropdown: true },
  { link: '#applicants', label: 'Абитуриентам', hasDropdown: true },
  { link: '#students', label: 'Студентам', hasDropdown: true },
  { link: '#alumni', label: 'Выпускникам', hasDropdown: true },
  { link: '#contacts', label: 'Контакты', hasDropdown: false },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <header className="pt-4 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-xl shadow-sm">
        
        {/* ВЕРХНЯЯ ЧАСТЬ: Логотип и элементы управления */}
    <div className="flex items-center justify-between py-3 px-6">
  {/* Логотип — ОБНОВЛЕННЫЙ БЛОК */}
  <div className="flex items-center gap-3">
    <a href="/" className="flex items-center">
      <Image 
        src="/logo/inai-logo.svg" 
        alt="Кыргызско-Германский институт прикладной информатики"
        width={200} 
        height={50}
        priority
      />
    </a>
  </div>

          {/* Десктопные элементы управления */}
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

          {/* Мобильный бургер */}
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </div>

        <Divider color="gray.2" />

        {/* НИЖНЯЯ ЧАСТЬ: Навигация */}
        <div className="hidden md:flex justify-center gap-10 py-3 px-6">
          {links.map((link) => (
            link.hasDropdown ? (
              <Menu key={link.label} trigger="hover" shadow="md" position="bottom-start" offset={0}>
                <Menu.Target>
                  <UnstyledButton className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    {link.label} <IconChevronDown size={14} stroke={1.5} className="text-gray-500" />
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  {/* Заглушки для пунктов выпадающего меню */}
                  <Menu.Item>Подпункт 1</Menu.Item>
                  <Menu.Item>Подпункт 2</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <UnstyledButton 
                key={link.label} 
                component="a" 
                href={link.link} 
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </UnstyledButton>
            )
          ))}
        </div>
      </div>

      {/* Мобильное меню (Drawer) */}
      <Drawer opened={opened} onClose={close} size="xs" padding="md" hiddenFrom="md" zIndex={1000000}>
        <div className="flex flex-col gap-4">
          <TextInput placeholder="Поиск по сайту" leftSection={<IconSearch size={16} />} radius="md" />
          {links.map((link) => (
            <UnstyledButton key={link.label} component="a" href={link.link} className="block py-2 text-sm font-medium" onClick={close}>
              {link.label}
            </UnstyledButton>
          ))}
        </div>
      </Drawer>
    </header>
  );
}