import React from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';

import { connect } from 'react-redux';
import Variables from 'wf-common/src/themes/styles/variables/variables';

import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import UserComponent from '../../components/user/user';
import BaseThemeComponent from '../../components/base-theme';
import MenuItemComponent from './components/menu-item';
import { ThemeProps } from '../../models/theme-prop';
import { navigate, getCurrentRoute } from '../../navigator/root-navigator';
import { Route } from '@react-navigation/native';

interface State {
    activeScreen: string;
}

class SideMenuComponent extends BaseThemeComponent<ThemeProps, State> {

    constructor(props) {
        super(props);
        this.state = { activeScreen: 'Home' };
    }

    get activeScreen(): string {
        return this.state?.activeScreen;
    }

    componentDidUpdate(prevProps: Readonly<ThemeProps>, prevState: Readonly<State>): void {
        const active: Route<string> | undefined = getCurrentRoute();
        if (active && active.name !== prevState.activeScreen) {
            this.setState({ activeScreen: active.name });
        }
    }

    navigate(route: string, screen?: string): void {
        if (screen) {
            navigate(route, { screen: screen });
            this.setState({ activeScreen: screen });
        } else {
            navigate(route);
            this.setState({ activeScreen: route });
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.isSideMenuOpened ? styles.opened : null]}>
                <UserComponent displayText={true} />
                <View style={styles.topSpacing}></View>
                <View style={styles.listContainer}>
                    <MenuItemComponent onPress={() => this.navigate('ViewRoot', 'Home')} 
                                       active={this.activeScreen === 'Home'} 
                                       name='Home' 
                                       activeIcon={<MIcon name='home-thermometer' size={20} style={{color: 'white'}} />} 
                                       icon={<MIcon name='home-thermometer-outline' size={20} style={{color: 'white'}} />} />

                    <MenuItemComponent onPress={() => this.navigate('ViewRoot', 'Profile')} 
                                       active={this.activeScreen === 'Profile'} 
                                       name='Profile' 
                                       activeIcon={<Icon name='user' size={16} style={{color: 'white'}} />} 
                                       icon={<Icon name='user-o' size={16} style={{color: 'white'}} />} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 0,
        padding: Variables.spacingLg as DimensionValue
    },
    topSpacing: {
        display: 'flex',
        width: '100%',
        height: '10%',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    listContainer: {
        display: 'flex',
        marginTop: Variables.spacingLg as DimensionValue
    },
    opened: {
        zIndex: 2
    }
});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(SideMenuComponent);
