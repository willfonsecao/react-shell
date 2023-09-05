import { Component } from 'react';

import ThemeService from 'wf-common/src/themes/services/theme.service';

import { ThemeProps } from '../models/theme-prop';
import { updateActiveThemeAction } from '../../redux/actions/theme.actions';
import { updateSideMenuStateAction } from '../../redux/actions/sidemenu.actions';
class BaseThemeComponent<T = ThemeProps, K = any> extends Component<T, K> {
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

    constructor(props: T) {
        super(props);
    }

    toggleSibeMenu(): void {
        if ('updateSideMenuState' in this.props) {
            this.prop.updateSideMenuState(!(this.props as any).isSideMenuOpened);
        }
    }

    activateTheme(themeName: string): void {
        if ('updateActiveTheme' in this.props) {
            this.prop.updateActiveTheme(themeName);
        }
    }

    listenThemeChanging(): void {
        if ((this.props as any).activeTheme !== this.themeService.activeTheme.name) {
            this.themeService.activateTheme((this.props as any).activeTheme);
        }
    }

    private get prop(): any {
        return this.props
    }
}

export default BaseThemeComponent;
