"use client";

import { Card, Text, Avatar, Stack, FileButton, ActionIcon, Box } from "@mantine/core";
import { useState } from "react";
import { IconCamera, IconUser } from "@tabler/icons-react";

interface Props {
    name: string;
    role: string;
}

export const ProfileCard = ({ name, role }: Props) => {
    const [photo, setPhoto] = useState<string | null>(null);

    const handleFileChange = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setPhoto(url);
        }
    };

    return (
        <Card
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
            style={{ textAlign: "center" }}
        >
            <Stack align="center" gap="sm">
                <Box style={{ position: "relative", display: "inline-block" }}>
                    {photo ? (
                        <Avatar
                            src={photo}
                            radius="100%"
                            size={100}
                        />
                    ) : (
                        <Box
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                backgroundColor: "#141A51",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <IconUser size={52} color="white" stroke={1.5} />
                        </Box>
                    )}

                    <FileButton onChange={handleFileChange} accept="image/*">
                        {(props) => (
                            <ActionIcon
                                {...props}
                                radius="xl"
                                size={28}
                                style={{
                                    position: "absolute",
                                    bottom: 2,
                                    right: 2,
                                    backgroundColor: "#141A51",
                                    border: "2px solid white",
                                    cursor: "pointer",
                                    borderRadius: "50%",
                                }}
                            >
                                <IconCamera size={14} color="white" />
                            </ActionIcon>
                        )}
                    </FileButton>
                </Box>

                <div>
                    <Text fw={600} size="lg" style={{ color: "#1A1A1A" }}>
                        {name}
                    </Text>
                    <Text size="sm" c="dimmed">
                        {role}
                    </Text>
                </div>
            </Stack>
        </Card>
    );
};