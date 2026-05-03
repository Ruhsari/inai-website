"use client";

import {
    Card, Text, TextInput, Textarea, Button,
    Select, Stack, Group, Divider, ActionIcon, Checkbox
} from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";

interface Props {
    onClose: () => void;
    onSubmit: () => void;
}

const inputStyles = {
    label: { marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" },
    input: {
        height: "45px",
        borderRadius: "12px",
        backgroundColor: "#F8F9FA",
        border: "1px solid #E9ECEF",
        fontSize: "14px",
    },
};

const textareaStyles = {
    label: { marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "#1A1A1A" },
    input: {
        borderRadius: "12px",
        backgroundColor: "#F8F9FA",
        border: "1px solid #E9ECEF",
        fontSize: "14px",
    },
};

const AddButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <Button
        radius="xl"
        size="sm"
        leftSection={<IconPlus size={14} />}
        style={{ backgroundColor: "#1DB4AD", color: "#fff" }}
        onClick={onClick}
    >
        {label}
    </Button>
);

// Период
const PeriodBlock = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isPresent, setIsPresent] = useState(false);
    const [errors, setErrors] = useState({ start: "", end: "" });

    const formatDate = (value: string): string => {
        const digits = value.replace(/\D/g, "");
        if (digits.length <= 2) return digits;
        return digits.slice(0, 2) + "." + digits.slice(2, 6);
    };

    const validateDate = (value: string): boolean => {
        if (value === "") return true;
        if (!/^\d{2}\.\d{4}$/.test(value)) return false;
        const month = parseInt(value.slice(0, 2));
        const year = parseInt(value.slice(3, 7));
        return month >= 1 && month <= 12 && year >= 1900 && year <= new Date().getFullYear();
    };

    const handleStart = (val: string) => {
        const formatted = formatDate(val);
        setStartDate(formatted);
        setErrors(prev => ({
            ...prev,
            start: validateDate(formatted) ? "" : "Некорректная дата (ММ.ГГГГ)"
        }));
    };

    const handleEnd = (val: string) => {
        const formatted = formatDate(val);
        setEndDate(formatted);
        setErrors(prev => ({
            ...prev,
            end: validateDate(formatted) ? "" : "Некорректная дата (ММ.ГГГГ)"
        }));
    };

    return (
        <Stack gap={8}>
            <Text size="sm" fw={600} style={{ color: "#1A1A1A" }}>Период</Text>
            <Group align="flex-start" gap="sm">
                <Stack gap={4} style={{ flex: 1 }}>
                    <TextInput
                        placeholder="ММ.ГГГГ"
                        value={startDate}
                        onChange={(e) => handleStart(e.currentTarget.value)}
                        error={errors.start}
                        maxLength={7}
                        styles={inputStyles}
                    />
                </Stack>
                <Stack gap={4} style={{ flex: 1 }}>
                    <TextInput
                        placeholder="ММ.ГГГГ"
                        value={isPresent ? "" : endDate}
                        disabled={isPresent}
                        onChange={(e) => handleEnd(e.currentTarget.value)}
                        error={errors.end}
                        maxLength={7}
                        styles={inputStyles}
                    />
                </Stack>
                <Button
                    radius="xl"
                    size="sm"
                    style={{
                        backgroundColor: isPresent ? "#141A51" : "#F8F9FA",
                        color: isPresent ? "#fff" : "#141A51",
                        border: "1px solid #E9ECEF",
                        height: "45px",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s",
                    }}
                    onClick={() => setIsPresent(!isPresent)}
                >
                    По настоящее время
                </Button>
            </Group>
        </Stack>
    );
};

export const ResumeForm = ({ onClose, onSubmit }: Props) => {
    const [educations, setEducations] = useState([{ id: 1 }]);
    const [projects, setProjects] = useState([{ id: 1 }]);
    const [experiences, setExperiences] = useState([{ id: 1 }]);
    const [submitted, setSubmitted] = useState(false);

    // Профиль
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [github, setGithub] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateName = (value: string) => /^[А-Яа-яЁёA-Za-z\s-]+$/.test(value);
    const validateUrl = (value: string) => value === "" || value.startsWith("https://");
    const validateGPA = (value: string) => value === "" || (/^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) <= 4.0);

    const handleSubmit = () => {
        const newErrors: Record<string, string> = {};

        if (!fullName) newErrors.fullName = "Обязательное поле";
        else if (!validateName(fullName)) newErrors.fullName = "Только буквы и дефис";

        if (!city) newErrors.city = "Обязательное поле";

        if (!validateUrl(linkedin)) newErrors.linkedin = "Ссылка должна начинаться с https://";
        if (!validateUrl(github)) newErrors.github = "Ссылка должна начинаться с https://";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true);
            onSubmit();
        }
    };

    if (submitted) {
        return (
            <Card shadow="sm" padding="xl" radius="md" withBorder style={{ minHeight: "300px" }}>
                <Group justify="flex-end" mb="sm">
                    <ActionIcon variant="subtle" onClick={onClose}>
                        <IconX size={20} color="#9E9E9E" />
                    </ActionIcon>
                </Group>
                <Stack align="center" gap="lg" mt="xl">
                    <Text fw={700} size="xl" style={{ color: "#141A51", textAlign: "center" }}>
                        Резюме отправлено!
                    </Text>
                    <Text c="dimmed" size="sm" ta="center" lh={1.6} style={{ maxWidth: 480 }}>
                        Твоё резюме успешно отправлено на проверку. После того как администратор его одобрит —
                        оно появится в разделе резюме студентов. Обычно это занимает до <strong>48 часов.</strong>
                        <br /><br />
                        Следи за статусом в блоке <strong>«Активности»</strong> на странице профиля.
                    </Text>
                    <Button
                        radius="xl"
                        px={40}
                        style={{ backgroundColor: "#141A51", color: "#fff", height: 48 }}
                        onClick={onClose}
                    >
                        Вернуться в профиль
                    </Button>
                </Stack>
            </Card>
        );
    }

    return (
        <Card shadow="sm" padding="xl" radius="md" withBorder>
            <Group justify="space-between" mb="xl">
                <Text fw={700} size="xl" style={{ color: "#141A51" }}>
                    Форма резюме
                </Text>
                <ActionIcon variant="subtle" onClick={onClose}>
                    <IconX size={20} color="#9E9E9E" />
                </ActionIcon>
            </Group>

            <Stack gap="xl">
                {/* Профиль */}
                <div>
                    <Text fw={700} size="lg" mb="md" style={{ color: "#141A51" }}>Профиль</Text>
                    <Divider mb="md" />
                    <Stack gap="md">
                        <TextInput
                            label="ФИО"
                            placeholder="Иванов Иван Иванович"
                            value={fullName}
                            onChange={(e) => {
                                const val = e.currentTarget.value;
                                setFullName(val);
                                if (errors.fullName) setErrors(prev => ({ ...prev, fullName: "" }));
                            }}
                            error={errors.fullName}
                            styles={inputStyles}
                        />
                        <TextInput
                            label="Город"
                            placeholder="Бишкек, Кыргызстан"
                            value={city}
                            onChange={(e) => {
                                setCity(e.currentTarget.value);
                                if (errors.city) setErrors(prev => ({ ...prev, city: "" }));
                            }}
                            error={errors.city}
                            styles={inputStyles}
                        />
                        <TextInput
                            label="LinkedIn"
                            placeholder="https://linkedin.com/in/username"
                            value={linkedin}
                            onChange={(e) => {
                                setLinkedin(e.currentTarget.value);
                                if (errors.linkedin) setErrors(prev => ({ ...prev, linkedin: "" }));
                            }}
                            error={errors.linkedin}
                            styles={inputStyles}
                        />
                        <TextInput
                            label="GitHub"
                            placeholder="https://github.com/username"
                            value={github}
                            onChange={(e) => {
                                setGithub(e.currentTarget.value);
                                if (errors.github) setErrors(prev => ({ ...prev, github: "" }));
                            }}
                            error={errors.github}
                            styles={inputStyles}
                        />
                    </Stack>
                </div>

                {/* Образование */}
                <div>
                    <Text fw={700} size="lg" mb="md" style={{ color: "#141A51" }}>Образование</Text>
                    <Divider mb="md" />
                    {educations.map((edu, index) => (
                        <Stack key={edu.id} gap="md" mb="xl">
                            {index > 0 && <Divider variant="dashed" mb="sm" />}
                            <TextInput
                                label="Учебное заведение"
                                placeholder="Кыргызско-Германский институт прикладной информатики (INAI.KG)"
                                styles={inputStyles}
                            />
                            <Select
                                label="Степень"
                                placeholder="Укажите вашу академическую степень"
                                data={["Бакалавриат", "Магистратура"]}
                                styles={inputStyles}
                            />
                            <TextInput
                                label="Направление"
                                placeholder="Укажите вашу специализацию"
                                styles={inputStyles}
                            />
                            <PeriodBlock />
                            <TextInput
                                label="GPA"
                                placeholder="Например: 3.8"
                                onChange={(e) => {
                                    const val = e.currentTarget.value;
                                    if (!/^\d*\.?\d*$/.test(val)) e.currentTarget.value = val.slice(0, -1);
                                }}
                                styles={inputStyles}
                            />
                            <TextInput
                                label="Релевантные курсы"
                                placeholder="ООП, Базы данных, Алгоритмы"
                                styles={inputStyles}
                            />
                        </Stack>
                    ))}
                    <AddButton
                        label="Добавить учебное заведение"
                        onClick={() => setEducations([...educations, { id: Date.now() }])}
                    />
                </div>

                {/* Проекты */}
                <div>
                    <Text fw={700} size="lg" mb="md" style={{ color: "#141A51" }}>Проекты</Text>
                    <Divider mb="md" />
                    {projects.map((proj, index) => (
                        <Stack key={proj.id} gap="md" mb="xl">
                            {index > 0 && <Divider variant="dashed" mb="sm" />}
                            <TextInput label="Название проекта" placeholder="Введите название проекта" styles={inputStyles} />
                            <Select
                                label="Тип проекта"
                                placeholder="Тип проекта"
                                data={[
                                    "Академический проект (учебный)",
                                    "Персональный проект",
                                    "Командный проект / Хакатон",
                                ]}
                                styles={inputStyles}
                            />
                            <TextInput label="Используемые технологии" placeholder="Java, SQL" styles={inputStyles} />
                            <TextInput label="Роль" placeholder="Укажите вашу роль в проекте" styles={inputStyles} />
                            <PeriodBlock />
                            <Textarea
                                label="Ключевые достижения"
                                placeholder="Опишите вашу роль, использованные инструменты и результат"
                                minRows={3}
                                styles={textareaStyles}
                            />
                        </Stack>
                    ))}
                    <AddButton
                        label="Добавить проект"
                        onClick={() => setProjects([...projects, { id: Date.now() }])}
                    />
                </div>

                {/* Опыт и лидерство */}
                <div>
                    <Text fw={700} size="lg" mb="md" style={{ color: "#141A51" }}>Опыт и лидерство</Text>
                    <Divider mb="md" />
                    {experiences.map((exp, index) => (
                        <Stack key={exp.id} gap="md" mb="xl">
                            {index > 0 && <Divider variant="dashed" mb="sm" />}
                            <TextInput
                                label="Организация / Клуб"
                                placeholder="Укажите название студенческого клуба, организации или компании"
                                styles={inputStyles}
                            />
                            <Select
                                label="Должность"
                                placeholder="Должность"
                                data={["Председатель / Глава", "Координатор", "Волонтер"]}
                                styles={inputStyles}
                            />
                            <TextInput label="Используемые технологии" placeholder="Java, SQL" styles={inputStyles} />
                            <PeriodBlock />
                            <Textarea
                                label="Описание деятельности"
                                placeholder="Кратко расскажите о ваших обязанностях и вкладе"
                                minRows={3}
                                styles={textareaStyles}
                            />
                        </Stack>
                    ))}
                    <AddButton
                        label="Добавить опыт"
                        onClick={() => setExperiences([...experiences, { id: Date.now() }])}
                    />
                </div>

                {/* Навыки */}
                <div>
                    <Text fw={700} size="lg" mb="md" style={{ color: "#141A51" }}>Навыки</Text>
                    <Divider mb="md" />
                    <Stack gap="md">
                        <TextInput
                            label="Программирование"
                            placeholder="Python (Middle), Java (Junior)"
                            styles={inputStyles}
                        />
                        <TextInput
                            label="Инструменты / Технологии"
                            placeholder="Git, Docker, Figma"
                            styles={inputStyles}
                        />
                        <TextInput
                            label="Языки"
                            placeholder="Русский (C2), Английский (B2), Кыргызский (C1)"
                            styles={inputStyles}
                        />
                    </Stack>
                </div>

                <Group justify="flex-end">
                    <Button
                        radius="xl"
                        px={40}
                        style={{ backgroundColor: "#F5C842", color: "#141A51", fontWeight: 600, height: 48 }}
                        onClick={handleSubmit}
                    >
                        Создать резюме
                    </Button>
                </Group>
            </Stack>
        </Card>
    );
};