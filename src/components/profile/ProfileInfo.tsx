"use client";

import {SimpleGrid, TextInput, Button, Stack, Textarea} from "@mantine/core";
import { useRouter } from "next/navigation";

interface Props {
    fullName: string;
    course: string;
    group: string;
    direction: string;
    organizations: string | null;
}

export const ProfileInfo = ({ fullName, course, group, direction, organizations }: Props) => {
    const router = useRouter();

    const handleLogout = () => {
        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        router.push("/login");
    };

    const inputStyles = {
        label: { marginBottom: '6px', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' },
        input: {
            height: '45px',
            borderRadius: '15px',
            backgroundColor: '#F8F9FA',
            border: '1px solid #E9ECEF',
            fontSize: '14px',
            color: organizations ? '#1A1A1A' : '#9E9E9E',
        }
    };

    return (
        <Stack gap={30}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} verticalSpacing={20} spacing={40}>
                <TextInput label="ФИО" value={fullName} readOnly styles={inputStyles} />
                <TextInput label="Курс" value={course} readOnly styles={inputStyles} />
                <TextInput label="Группа" value={group} readOnly styles={inputStyles} />
                <TextInput
                    label="Студенческие организации"
                    value={organizations ? organizations.replace(/,\n/g, ", ") : ""}
                    placeholder="Вы не состоите в клубе"
                    readOnly
                    title={organizations ?? ""}
                    styles={{
                        label: { marginBottom: '6px', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' },
                        input: {
                            height: '45px',
                            borderRadius: '15px',
                            backgroundColor: '#F8F9FA',
                            border: '1px solid #E9ECEF',
                            fontSize: '14px',
                            color: organizations ? '#1A1A1A' : '#9E9E9E',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }
                    }}
                />
                <TextInput label="Направление" value={direction} readOnly styles={inputStyles} />
            </SimpleGrid>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <Button
                    radius="xl"
                    size="md"
                    px={40}
                    style={{ backgroundColor: '#A42B2B', height: '48px', fontSize: '16px' }}
                    onClick={handleLogout}
                >
                    Выйти из аккаунта
                </Button>
            </div>
        </Stack>
    );
};