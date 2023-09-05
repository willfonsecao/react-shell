//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';

import IoIcon from 'react-native-vector-icons/Ionicons';

import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Variables from 'wf-common/src/themes/styles/variables/variables';
import { connect } from 'react-redux';

import { MenuPositionEnum } from './enum/menu-position.enum';
import BaseThemeComponent from '../../../../core/components/base-theme';
import { ThemeProps } from '../../../../core/models/theme-prop';
import { getCurrentRoute } from '../../../../core/navigator/root-navigator';

interface State {
    activeButtonPosition: MenuPositionEnum;
}

interface FooterProps extends ThemeProps {
    navigation: any;
}
class FooterComponent extends BaseThemeComponent<FooterProps, State> {

    constructor(props) {
        super(props);
        this.state = {
            activeButtonPosition: MenuPositionEnum.HOME
        }
    }

    componentDidUpdate(): void {
        const activeRoute = getCurrentRoute();
        if (activeRoute && this.state.activeButtonPosition !== activeRoute.name) {
            this.setState({ activeButtonPosition: activeRoute.name as MenuPositionEnum });
        }
    }

    navigate(goTo: MenuPositionEnum, route: string): void {
        this.setState({ activeButtonPosition: goTo });
        this.props.navigation.navigate(route);
    };

    get activePage(): MenuPositionEnum {
        return this.state?.activeButtonPosition
    }

    get userIcon(): any {
        return this.activePage === MenuPositionEnum.PROFILE ? <Icon name='user' size={21} /> : <Icon name='user-o' size={20} />;
    }

    get homeIcon(): any {
        return this.activePage === MenuPositionEnum.HOME ? <MIcon name='home-thermometer' size={26} /> : <MIcon name='home-thermometer-outline' size={26} />;
    }

    render() {
        this.listenThemeChanging();
        const activePageColor = this.themeService.getActiveThemeColorScale('primary', 'default');
        const defaultPageColor = this.themeService.getActiveThemeColorScale('text', 300);
        const footerBackground = this.themeService.getActiveThemeColorScale('background', 100);

        return (
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    key={0}
                    style={[styles.menuButton, { backgroundColor: activePageColor }]}
                    onPress={() => this.toggleSibeMenu()}>
                    <Text style={[styles.buttonText, { marginRight: Variables.spacingXs as DimensionValue }]}>
                        <IoIcon name='menu' size={22} />
                    </Text>
                </TouchableOpacity>
                <View style={[styles.footer, { backgroundColor: footerBackground }]}>
                    <TouchableOpacity
                        key={1}
                        style={styles.navigatorButton}
                        onPress={() => this.navigate(MenuPositionEnum.HOME, 'Home')}>
                        <Text style={[styles.buttonText, { color: this.activePage === MenuPositionEnum.HOME ? activePageColor : defaultPageColor }]}>
                            {this.homeIcon}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={2}
                        style={styles.navigatorButton}
                        onPress={() => this.navigate(MenuPositionEnum.PROFILE, 'Profile')}>
                        <Text style={[styles.buttonText, { color: this.activePage === MenuPositionEnum.PROFILE ? activePageColor : defaultPageColor }]}>
                            {this.userIcon}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerContainer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        placeContent: 'center',
        width: '100%',
        bottom: Variables.spacingMd as DimensionValue,
        left: 0,
        flexDirection: 'row'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        padding: Variables.spacingXs as DimensionValue,
        borderRadius: 19,
        height: 50,
        width: 'auto',
    },
    navigatorButton: {
        backgroundColor: 'transparent',
        border: 'none',
        width: 50,
        alignItems: 'center',
        placeContent: 'center',
    },
    menuButton: {
        width: 50,
        height: 50,
        borderRadius: 19,
        display: 'flex',
        alignItems: 'center',
        placeContent: 'center',
        marginRight: 15,
    },
    buttonText: {
        color: 'white',
    }
});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(FooterComponent);
