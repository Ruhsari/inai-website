import { SimpleGrid, Group, Text, Box } from '@mantine/core';
import { IconMapPin, IconPhone, IconMail, IconClock } from '@tabler/icons-react';

export function ContactInfo() {
    const data = [
        { icon: IconMapPin, text: 'Улица Анкара, 1/5, 720082' },
    { icon: IconClock, text: 'Пн-Пт с 9:00 - 17:00' },
    { icon: IconPhone, text: '+996 500 549 238' },
    { icon: IconMail, text: 'info@inai.kg' },
];

    return (
        <SimpleGrid cols={2} spacing={30}>
            {data.map((item, index) => (
                <Group key={index} align="center" wrap="nowrap" gap="md">
                    <item.icon size={28} className="text-[#1A235E]" stroke={2} />
                    <Text size="sm" className="text-gray-700 font-medium leading-tight">
                        {item.text}
                    </Text>
                </Group>
            ))}
        </SimpleGrid>
    );
}