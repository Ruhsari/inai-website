"use client";

import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      radius="md"
      aria-label="Переключить тему"
      className="text-gray-600 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700"
    >
      {computedColorScheme === 'dark' ? (
        <IconSun size={18} stroke={1.5} />
      ) : (
        <IconMoon size={18} stroke={1.5} />
      )}
    </ActionIcon>
  );
}