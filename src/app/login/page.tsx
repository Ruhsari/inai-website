"use client";

import { TextInput, PasswordInput, Button, Stack } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputStyles = {
        input: {
            height: "52px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: "1px solid #E9ECEF",
            fontSize: "15px",
        },
    };

    const handleLogin = () => {
        document.cookie = "auth_token=test_token; path=/";
        router.push("/students/profile");
    };

    return (
        <div
            id="login-page"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "180px 20px",
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    padding: "48px 52px",
                    width: "100%",
                    maxWidth: "460px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                }}
            >
                <Stack align="center" gap="xs" mb="xl">
                    <div
                        style={{
                            fontSize: "22px",
                            fontWeight: 700,
                            color: "#141A51",
                            marginTop: "8px",
                        }}
                    >
                        Вход в аккаунт INAI
                    </div>
                </Stack>

                <Stack gap="md">
                    <TextInput
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        styles={inputStyles}
                    />
                    <PasswordInput
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        styles={{ input: inputStyles.input }}
                    />
                    <Button
                        fullWidth
                        radius="xl"
                        mt="sm"
                        style={{
                            backgroundColor: "#141A51",
                            height: "52px",
                            fontSize: "16px",
                            fontWeight: 600,
                        }}
                        onClick={handleLogin}
                    >
                        Войти
                    </Button>
                </Stack>
            </div>
        </div>
    );
}