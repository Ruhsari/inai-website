"use client";

import { Card, Text, TextInput, Button, Stack, MultiSelect, ActionIcon, Group } from "@mantine/core";
import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { clubOptions } from "../../data/clubData";

interface Props {
    onClose: () => void;
    onSubmit: (clubName: string) => void;
}

const inputStyles = {
    label: { marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" },
    input: {
        borderRadius: "12px",
        backgroundColor: "#F8F9FA",
        border: "1px solid #E9ECEF",
        fontSize: "14px",
        minHeight: "45px",
    },
};

const validateContact = (value: string): boolean => {
    const telegramRegex = /^@[a-zA-Z0-9_]{3,}$/;
    const phoneRegex = /^\+996\d{9}$/;
    return telegramRegex.test(value) || phoneRegex.test(value);
};

export const ClubApplicationForm = ({ onClose, onSubmit }: Props) => {
    const [contact, setContact] = useState("");
    const [selectedDirections, setSelectedDirections] = useState<string[]>([]);
    const [errors, setErrors] = useState({ contact: "", directions: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleContactChange = (value: string) => {
        const digits = value.replace(/\D/g, "");
        if (digits.length > 0 && !value.startsWith("@")) {
            if (digits.startsWith("996")) {
                setContact("+" + digits);
            } else if (digits.startsWith("0")) {
                setContact("+996" + digits.slice(1));
            } else {
                setContact("+996" + digits);
            }
        } else {
            setContact(value);
        }
    };

    const validate = () => {
        const newErrors = { contact: "", directions: "" };
        let isValid = true;

        if (!contact) {
            newErrors.contact = "Это поле обязательно.";
            isValid = false;
        } else if (!validateContact(contact)) {
            newErrors.contact = "Введите корректный @username или номер (+996XXXXXXXXX)";
            isValid = false;
        }

        if (selectedDirections.length === 0) {
            newErrors.directions = "Это поле обязательно.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        if (validate()) {
            setSubmitted(true);
            onSubmit(selectedDirections.join(", "));
            setTimeout(() => {
                onClose();
            }, 3000);
        }
    };

    const handleDone = () => {
        onSubmit(selectedDirections.join(", "));
    };

    return (
        <Card shadow="sm" padding="xl" radius="md" withBorder style={{ minHeight: "500px" }}>
            <Group justify="flex-end" mb="sm">
                <ActionIcon variant="subtle" onClick={onClose}>
                    <IconX size={20} color="#9E9E9E" />
                </ActionIcon>
            </Group>

            <Text fw={700} size="xl" mb="xl" style={{ color: "#141A51", textAlign: "center" }}>
                Вступай в команду!
            </Text>

            <Stack gap="lg">
                <div>
                    <Text size="sm" fw={600} mb={6} style={{ color: errors.contact ? "#C92A2A" : "#1A1A1A" }}>
                        Контакт в Telegram/WhatsApp
                    </Text>
                    <TextInput
                        placeholder="@username или номер"
                        value={contact}
                        onChange={(e) => handleContactChange(e.currentTarget.value)}
                        error={errors.contact}
                        styles={{
                            input: {
                                ...inputStyles.input,
                                borderColor: errors.contact ? "#C92A2A" : "#E9ECEF",
                            },
                        }}
                    />
                </div>

                <div>
                    <Text size="sm" fw={600} mb={6} style={{ color: errors.directions ? "#C92A2A" : "#1A1A1A" }}>
                        Выбери своё направление (можно несколько)
                    </Text>
                    <MultiSelect
                        placeholder="Выберите направление"
                        data={clubOptions}
                        value={selectedDirections}
                        onChange={setSelectedDirections}
                        error={errors.directions}
                        styles={{
                            input: {
                                ...inputStyles.input,
                                borderColor: errors.directions ? "#C92A2A" : "#E9ECEF",
                            },
                        }}
                    />
                </div>

                <Button
                    radius="xl"
                    fullWidth
                    mt="md"
                    style={{
                        backgroundColor: submitted ? "#9BA2E4" : "#F5C842",
                        color: submitted ? "#fff" : "#141A51",
                        fontWeight: 600,
                        height: 48,
                        transition: "all 0.3s ease",
                        cursor: submitted ? "default" : "pointer",
                    }}
                    onClick={!submitted ? handleSubmit : undefined}
                >
                    {submitted ? "Заявка отправлена! Почти в команде!" : "Отправить заявку"}
                </Button>

                {submitted && (
                    <Text
                        c="dimmed"
                        size="sm"
                        ta="center"
                        lh={1.6}
                    >
                        Твоя заявка успешно отправлена и уже летит в наш штаб. Мы изучим её и напишем тебе в Telegram/WhatsApp в течение{" "}
                        <strong>24 часов.</strong>
                        <br />
                        А пока подписывайся на наш канал, чтобы быть в курсе всех движей)
                    </Text>
                )}
            </Stack>
        </Card>
    );
};