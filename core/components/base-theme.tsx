import { Component } from 'react';

import ThemeService from 'wf-common/src/themes/services/theme.service';

import { ThemeProps } from '../models/theme-prop';
import { updateActiveThemeAction } from '../../redux/actions/theme.actions';
import { updateSideMenuStateAction } from '../../redux/actions/sidemenu.actions';

class BaseThemeComponent<T = any> extends Component<ThemeProps, T> {
    themeService: ThemeService = new ThemeService();

    static mapStateToProps = state => {
        return {
            activeTheme: state.activeTheme,
            isSideMenuOpened: state.sideMenuState,
        };
    };

    static mapDispatchToProps = {
        updateActiveTheme: updateActiveThemeAction,
        updateSideMenuState: updateSideMenuStateAction,
    };

    constructor(props: ThemeProps) {
        super(props);
    }

    toggleSibeMenu(): void {
        this.props.updateSideMenuState(!(this.props as any).isSideMenuOpened);
    }

    activateTheme(themeName: string): void {
        this.props.updateActiveTheme(themeName);
    }

    listenThemeChanging(): void {
        if ((this.props as any).activeTheme !== this.themeService.activeTheme.name) {
            this.themeService.activateTheme((this.props as any).activeTheme);
        }
    }
}

export default BaseThemeComponent;
