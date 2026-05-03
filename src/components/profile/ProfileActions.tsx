"use client";

import { Card, Text, Button, Stack, Badge, Group } from "@mantine/core";
import { IconClock, IconCheck, IconX } from "@tabler/icons-react";

type ResumeStatus = "none" | "pending" | "approved" | "rejected";
type ClubStatus = "none" | "member";

interface Props {
    resumeStatus?: ResumeStatus;
    clubStatus?: ClubStatus;
    onAddResume: () => void;
    onJoinClub: () => void;
    onLeaveClub: () => void;
    onEditResume: () => void;
    onRevokeResume: () => void;
}

const resumeStatusConfig = {
    pending: {
        label: "Ожидает проверки",
        color: "#E08C00",
        bg: "#FFF8E6",
        icon: <IconClock size={13} />,
    },
    approved: {
        label: "Одобрено",
        color: "#1DB4AD",
        bg: "#F0FDF9",
        icon: <IconCheck size={13} />,
    },
    rejected: {
        label: "Отклонено",
        color: "#A42B2B",
        bg: "#FFF0F0",
        icon: <IconX size={13} />,
    },
};

export const ProfileActions = ({
                                   resumeStatus = "none",
                                   clubStatus = "none",
                                   onAddResume,
                                   onJoinClub,
                                   onLeaveClub,
                                   onEditResume,
                                   onRevokeResume,
                               }: Props) => {

    const statusInfo = resumeStatus !== "none" ? resumeStatusConfig[resumeStatus] : null;

    const getResumeButtons = () => {
        switch (resumeStatus) {
            case "none":
                return (
                    <Button radius="xl" fullWidth
                            style={{ backgroundColor: "#141A51", color: "#fff", height: 48 }}
                            onClick={onAddResume}
                    >
                        Добавить резюме
                    </Button>
                );
            case "pending":
                return (
                    <>
                        <Button radius="xl" fullWidth
                                style={{ backgroundColor: "#224983", color: "#fff", height: 48 }}
                                onClick={onEditResume}
                        >
                            Изменить резюме
                        </Button>
                        <Button radius="xl" fullWidth
                                style={{ backgroundColor: "#A42B2B", color: "#fff", height: 48 }}
                                onClick={onRevokeResume}
                        >
                            Отозвать резюме
                        </Button>
                    </>
                );
            case "approved":
                return (
                    <>
                        <Button radius="xl" fullWidth
                                style={{ backgroundColor: "#224983", color: "#fff", height: 48 }}
                                onClick={onEditResume}
                        >
                            Изменить резюме
                        </Button>
                        <Button radius="xl" fullWidth
                                style={{ backgroundColor: "#A42B2B", color: "#fff", height: 48 }}
                                onClick={onRevokeResume}
                        >
                            Отозвать резюме
                        </Button>
                    </>
                );
            case "rejected":
                return (
                    <Button radius="xl" fullWidth
                            style={{ backgroundColor: "#A42B2B", color: "#fff", height: 48 }}
                            onClick={onAddResume}
                    >
                        Исправить ошибки в резюме
                    </Button>
                );
        }
    };

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text fw={700} size="xl" mb="md" style={{ color: "#141A51" }}>
                Активности
            </Text>
            <Stack gap="sm">
                {clubStatus === "none" ? (
                    <Button radius="xl" fullWidth
                            style={{ backgroundColor: "#F5C842", color: "#141A51", fontWeight: 600, height: 48 }}
                            onClick={onJoinClub}
                    >
                        Подать заявку на вступление в клуб
                    </Button>
                ) : (
                    <Button radius="xl" fullWidth
                            style={{ backgroundColor: "#F5C842", color: "#141A51", fontWeight: 600, height: 48 }}
                            onClick={onLeaveClub}
                    >
                        Покинуть клуб
                    </Button>
                )}

                {statusInfo && (
                    <div
                        style={{
                            backgroundColor: statusInfo.bg,
                            border: `1px solid ${statusInfo.color}`,
                            borderRadius: "50px",
                            padding: "12px 20px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "6px",
                        }}
                    >
                        <span style={{ color: statusInfo.color, display: "flex", alignItems: "center" }}>
                            {statusInfo.icon}
                        </span>
                        <Text size="sm" fw={600} style={{ color: statusInfo.color }}>
                            Резюме: {statusInfo.label}
                        </Text>
                    </div>
                )}

                {getResumeButtons()}
            </Stack>
        </Card>
    );
};