"use client";

import { useState } from "react";
import { Tabs, Container, Grid } from "@mantine/core";
import { ProfileCard } from "../../../components/profile/ProfileCard";
import { ProfileInfo } from "../../../components/profile/ProfileInfo";
import { ChangePassword } from "../../../components/profile/ChangePassword";
import { ProfileActions } from "../../../components/profile/ProfileActions";
import { ClubApplicationForm } from "../../../components/profile/ClubApplicationForm";
import { ResumeForm } from "../../../components/profile/ResumeForm";
import { student } from "../../../data/ProfileStudent";

type ActiveView = "profile" | "club" | "resume";
type ResumeStatus = "none" | "pending" | "approved" | "rejected";
type ClubStatus = "none" | "member";

export default function ProfilePage() {
    const [activeView, setActiveView] = useState<ActiveView>("profile");
    const [resumeStatus, setResumeStatus] = useState<ResumeStatus>("none");
    const [clubStatus, setClubStatus] = useState<ClubStatus>("none");
    const [organizations, setOrganizations] = useState<string | null>(null);

    const handleJoinClub = () => setActiveView("club");

    const handleLeaveClub = () => {
        setClubStatus("none");
        setOrganizations(null);
        setActiveView("profile");
    };

    const handleAddResume = () => setActiveView("resume");

    const handleClubSubmit = (clubName: string) => {
        setClubStatus("member");
        setOrganizations(clubName);
    };

    const handleResumeSubmit = () => {
        setResumeStatus("pending");
        setActiveView("profile");
    };

    const handleEditResume = () => setActiveView("resume");

    const handleRevokeResume = () => {
        setResumeStatus("none");
    };

    const renderRightBlock = () => {
        if (activeView === "club") {
            return (
                <ClubApplicationForm
                    onClose={() => setActiveView("profile")}
                    onSubmit={handleClubSubmit}
                />
            );
        }

        if (activeView === "resume") {
            return (
                <ResumeForm
                    onClose={() => setActiveView("profile")}
                    onSubmit={handleResumeSubmit}
                />
            );
        }

        return (
            <Tabs
                defaultValue="personal_data"
                variant="unstyled"
                styles={{
                    root: {
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        border: "1px solid #E9ECEF",
                        minHeight: "500px",
                    },
                    list: {
                        display: "flex",
                        padding: "20px 40px 0",
                        borderBottom: "1px solid #E9ECEF",
                        gap: "40px",
                    },
                    tab: {
                        fontSize: "18px",
                        fontWeight: 500,
                        paddingBottom: "12px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(29, 180, 173, 0.65)",
                        borderBottom: "3px solid transparent",
                        transition: "color 0.2s, border-color 0.2s",
                    },
                    panel: {
                        padding: "30px 40px",
                    },
                }}
            >
                <Tabs.List>
                    <Tabs.Tab value="personal_data">Личные данные</Tabs.Tab>
                    <Tabs.Tab value="change_password">Изменить пароль</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="personal_data">
                    <ProfileInfo {...student} organizations={organizations} />
                </Tabs.Panel>
                <Tabs.Panel value="change_password">
                    <ChangePassword />
                </Tabs.Panel>
            </Tabs>
        );
    };

    return (
        <Container size="xl" py="xl">
            <Grid gutter="xl">
                <Grid.Col span={{ base: 12, md: 3.5 }}>
                    <Grid gutter="md">
                        <Grid.Col span={12}>
                            <ProfileCard name={student.shortName} role={student.role} />
                        </Grid.Col>
                        <Grid.Col span={12}>
                            <ProfileActions
                                resumeStatus={resumeStatus}
                                clubStatus={clubStatus}
                                onAddResume={handleAddResume}
                                onJoinClub={handleJoinClub}
                                onLeaveClub={handleLeaveClub}
                                onEditResume={handleEditResume}
                                onRevokeResume={handleRevokeResume}
                            />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 8.5 }}>
                    {renderRightBlock()}
                </Grid.Col>
            </Grid>
        </Container>
    );
}