import ThemeService from "wf-common/src/themes/services/theme.service";

export interface ThemeProps {
    activeTheme: string;
    isSideMenuOpened: boolean;
    updateSideMenuState: (isOpened: boolean) => void;
    updateActiveTheme: (theme: string) => void;
}