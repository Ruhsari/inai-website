"use client";

import { Container, Group, Text, Title, ActionIcon } from '@mantine/core';
import { IconBrandInstagram, IconBrandTelegram, IconBrandFacebook } from '@tabler/icons-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto" id="contacts">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          
          {/* Инфо */}
          <div>
            <Title order={3} className="text-white mb-4 tracking-wider">
              INAI.KG
            </Title>
            <Text size="sm" className="mb-2 text-gray-400">
              Кыргызско-Германский институт прикладной информатики
            </Text>
            <Text size="sm" className="text-gray-400">
              Анкара 15, Бишкек
            </Text>
          </div>

          {/* Контакты */}
          <div>
            <Title order={5} className="text-white mb-4 uppercase tracking-wider text-sm">
              Контакты
            </Title>
            <Text size="sm" className="mb-2 hover:text-white transition-colors cursor-pointer">
              +996 800 549 238
            </Text>
            <Text size="sm" className="hover:text-white transition-colors cursor-pointer">
              info@inai.kg
            </Text>
          </div>

          {/* Соцсети */}
          <div>
            <Title order={5} className="text-white mb-4 uppercase tracking-wider text-sm">
              Мы в соц. сетях
            </Title>
            <Group gap="sm">
              <ActionIcon size="lg" variant="subtle" color="gray" radius="xl" className="hover:bg-gray-800 hover:text-pink-500">
                <IconBrandInstagram size={22} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="subtle" color="gray" radius="xl" className="hover:bg-gray-800 hover:text-blue-400">
                <IconBrandTelegram size={22} stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="subtle" color="gray" radius="xl" className="hover:bg-gray-800 hover:text-blue-600">
                <IconBrandFacebook size={22} stroke={1.5} />
              </ActionIcon>
            </Group>
          </div>
          
        </div>

      </Container>
    </footer>
  );
}