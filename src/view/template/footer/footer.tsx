//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { IoMenu } from 'react-icons/io5';

import { RiHome4Fill } from 'react-icons/ri';
import { RiHome4Line } from 'react-icons/ri';

import { BiSolidUser } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';

import Variables from 'wf-common/src/themes/styles/variables/variables';
import { connect } from 'react-redux';

import { MenuPositionEnum } from './enum/menu-position.enum';
import BaseThemeComponent from '../../../../core/components/base-theme';

interface State {
    activeButtonPosition: MenuPositionEnum;
}
class FooterComponent extends BaseThemeComponent<State> {

    constructor(props) {
        super(props);
        this.state = {
            activeButtonPosition: MenuPositionEnum.HOME
        }
    }

    navigate(goTo: MenuPositionEnum, route: string): void {
        this.setState({ activeButtonPosition: goTo });
    };

    get activePage(): MenuPositionEnum {
        return this.state?.activeButtonPosition
    }

    get userIcon(): any {
        return this.activePage === MenuPositionEnum.PROFILE ? <BiSolidUser /> : <BiUser />;
    }

    get homeIcon(): any {
        return this.activePage === MenuPositionEnum.HOME ? <RiHome4Fill /> : <RiHome4Line />;
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
                    style={[styles.menuButton, { backgroundColor: activePageColor}]}
                    onPress={() => this.toggleSibeMenu()}>
                    <Text style={[styles.buttonText, { marginRight: Variables.spacing as DimensionValue }]}>
                        <IoMenu />
                    </Text>
                </TouchableOpacity>
                <View style={[styles.footer, {backgroundColor: footerBackground}]}>
                    <TouchableOpacity
                        key={1}
                        style={styles.navigatorButton}
                        onPress={() => this.navigate(MenuPositionEnum.HOME, '')}>
                        <Text style={[styles.buttonText, { color: this.activePage === MenuPositionEnum.HOME ? activePageColor : defaultPageColor }]}>
                            {this.homeIcon}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key={2}
                        style={styles.navigatorButton}
                        onPress={() => this.navigate(MenuPositionEnum.PROFILE, '')}>
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
        bottom: '1.5%',
        left: 0,
        flexDirection: 'row'
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        padding: Variables.spacing as DimensionValue,
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
        fontSize: 22,
        color: 'white',
        marginBottom: -4
    }
});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(FooterComponent);
