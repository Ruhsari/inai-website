export type ClubStatus = "none" | "member";

interface ProfileStore {
    organizations: string | null;
    clubStatus: ClubStatus;
}

// заменить на API)
export const profileStore: ProfileStore = {
    organizations: null,
    clubStatus: "none",
};

export const joinClub = (clubName: string) => {
    profileStore.organizations = clubName;
    profileStore.clubStatus = "member";
};

export const leaveClub = () => {
    profileStore.organizations = null;
    profileStore.clubStatus = "none";
};