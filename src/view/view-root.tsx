import React from 'react';
import { View, StyleSheet, DimensionValue, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Variables from 'wf-common/src/themes/styles/variables/variables';
import { connect } from 'react-redux';

import FooterComponent from './template/footer/footer';
import BaseThemeComponent from '../../core/components/base-theme';
import { ThemeProps } from '../../core/models/theme-prop';
import HomeComponent from './screens/home/home';
import ProfileComponent from './screens/profile/profile';

const Tab = createBottomTabNavigator();
class ViewRoot extends BaseThemeComponent<ThemeProps> {

    render() {
        this.listenThemeChanging();
        const backgroundColor = this.themeService.getActiveThemeColorScale('background', 'default');
        const isMenuOpened = (this.props as any).isSideMenuOpened;

        return (
            <View style={[isMenuOpened ? styles.floatingContainer : styles.container, { backgroundColor: backgroundColor }]} id='view'>

                <TouchableOpacity style={[styles.toucheblaArea, isMenuOpened ? styles.enabledToucheblaArea : null]} onPress={() => this.toggleSibeMenu()}></TouchableOpacity>
                <View style={[styles.containerShadow, { opacity: isMenuOpened ? 1 : 0 }]} id="container-shadow">
                </View>

                <Tab.Navigator initialRouteName='Home' tabBar={props => <FooterComponent navigation={props.navigation} />} screenOptions={{
                    headerShown: false,
                }} >
                    <Tab.Screen
                        name="Home"
                        component={HomeComponent}
                    />
                    <Tab.Screen
                        name="Profile"
                        component={ProfileComponent}
                    />
                </Tab.Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Variables.spacingXs as DimensionValue,
        zIndex: 1
    },
    floatingContainer: {
        width: 500,
        height: '65%',
        position: 'absolute',
        right: -200,
        top: '17.5%',
        borderRadius: 20,
        zoom: '0.5',
        pointerEvents: 'none',
        padding: 12,
        transform: [
            { perspective: 1000 },
            { rotateX: '0deg' },
            { rotateY: '44deg' },
        ],
    },
    containerShadow: {
        width: '100%',
        height: '90%',
        position: 'absolute',
        top: '5%',
        left: 0,
        borderRadius: 23,
        shadowColor: 'white',
        shadowOffset: { width: -36, height: 0 },
        shadowOpacity: .2,
        shadowRadius: 0,
        elevation: 1,
        zIndex: -3
    },
    toucheblaArea: {
        opacity: 0,
        pointerEvents: 'none',
        width: 0,
        height: 0
    },
    enabledToucheblaArea: {
        opacity: 1,
        pointerEvents: 'auto',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    }

});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(ViewRoot);
