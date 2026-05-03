"use client";

import { PasswordInput, Button, SimpleGrid, Text, Stack, Group, Transition, Paper } from "@mantine/core";
import { useState } from "react";
import { IconCheck } from "@tabler/icons-react";

export const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ current: "", new: "", confirm: "" });
    const [success, setSuccess] = useState(false);

    const inputStyles = {
        label: { marginBottom: '6px', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' },
        input: {
            height: '45px',
            borderRadius: '15px',
            backgroundColor: '#F8F9FA',
            border: '1px solid #E9ECEF'
        }
    };

    const validate = () => {
        const newErrors = { current: "", new: "", confirm: "" };
        let isValid = true;

        if (!currentPassword) {
            newErrors.current = "Введите текущий пароль";
            isValid = false;
        }

        if (!newPassword) {
            newErrors.new = "Введите новый пароль";
            isValid = false;
        } else if (newPassword.length < 8) {
            newErrors.new = "Минимум 8 символов";
            isValid = false;
        } else if (newPassword.length > 32) {
            newErrors.new = "Максимум 32 символа";
            isValid = false;
        } else if (!/[A-Z]/.test(newPassword)) {
            newErrors.new = "Нужна хотя бы одна заглавная буква";
            isValid = false;
        } else if (!/[0-9]/.test(newPassword)) {
            newErrors.new = "Нужна хотя бы одна цифра";
            isValid = false;
        } else if (newPassword === currentPassword) {
            newErrors.new = "Новый пароль должен отличаться от текущего";
            isValid = false;
        }

        if (!confirmPassword) {
            newErrors.confirm = "Подтвердите новый пароль";
            isValid = false;
        } else if (newPassword !== confirmPassword) {
            newErrors.confirm = "Пароли не совпадают";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = () => {
        setSuccess(false);
        if (validate()) {
            setSuccess(true);
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setTimeout(() => setSuccess(false), 1500);
        }
    };

    const getPasswordStrength = () => {
        if (!newPassword) return null;
        if (newPassword.length < 8) return { label: "Слабый", color: "#A42B2B" };
        if (newPassword.length < 12 || !/[A-Z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
            return { label: "Средний", color: "#E08C00" };
        }
        return { label: "Надёжный", color: "#1DB4AD" };
    };

    const strength = getPasswordStrength();

    return (
        <Stack gap={25}>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
                <Stack gap={4}>
                    <PasswordInput
                        label="Введите текущий пароль"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.currentTarget.value)}
                        error={errors.current}
                        styles={inputStyles}
                        maxLength={32}
                    />
                    <Text size="xs" style={{ color: '#141A51', fontWeight: 600, cursor: 'pointer' }}>
                        Забыли пароль?
                    </Text>
                </Stack>

                <Stack gap={4}>
                    <PasswordInput
                        label="Введите новый пароль"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.currentTarget.value)}
                        error={errors.new}
                        styles={inputStyles}
                        maxLength={32}
                    />
                    {strength && (
                        <Text size="xs" style={{ color: strength.color, fontWeight: 600 }}>
                            {strength.label} · {newPassword.length}/32
                        </Text>
                    )}
                </Stack>

                <PasswordInput
                    label="Подтвердите пароль"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                    error={errors.confirm}
                    styles={inputStyles}
                    maxLength={32}
                />
            </SimpleGrid>

            <Group justify="flex-end" align="center" gap="md">
                <Transition mounted={success} transition="slide-left" duration={300} timingFunction="ease">
                    {(styles) => (
                        <Paper
                            style={{
                                ...styles,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: '#F0FDF9',
                                border: '1px solid #1DB4AD',
                                borderRadius: '50px',
                                padding: '10px 18px',
                            }}
                        >
                            <IconCheck size={16} color="#1DB4AD" />
                            <Text size="sm" style={{ color: '#1DB4AD', fontWeight: 600 }}>
                                Пароль успешно изменён
                            </Text>
                        </Paper>
                    )}
                </Transition>

                <Button
                    radius="xl"
                    size="md"
                    px={40}
                    style={{ backgroundColor: '#1DB4AD', height: '48px', fontSize: '16px' }}
                    onClick={handleSubmit}
                >
                    Изменить пароль
                </Button>
            </Group>
        </Stack>
    );
};