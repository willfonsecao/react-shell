import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DimensionValue } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux';

import BaseThemeComponent from '../../../components/base-theme';
import { ThemeProps } from '../../../models/theme-prop';
import Variables from 'wf-common/src/themes/styles/variables/variables';

interface MenuProps extends ThemeProps {
    name: string;
    icon: any;
    activeIcon: any;
    active?: boolean;
    onPress?: () => void;
}

class MenuItemComponent extends BaseThemeComponent<MenuProps> {

    onPress(): void {
        if (this.props.onPress) {
            this.props.onPress();
        }
    }

    render() {
        const isActive = this.props.active;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.onPress()}>
                {this.props.active ? <Icon name='dot-single' style={{ ...styles.whiteColor, ...styles.dot }} /> : null}
                <View style={{ ...styles.icon, ...styles.whiteColor }}>
                    {this.props.active ? this.props.activeIcon : this.props.icon}
                </View>
                <Text style={[styles.whiteColor, isActive ? styles.active : null]}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Variables.spacingLg as DimensionValue,
        paddingBottom: Variables.spacingLg as DimensionValue,
    },
    dot: {
        marginBottom: -3,
        marginRight: Variables.spacingLg as any
    },
    whiteColor: {
        color: 'white'
    },
    active: {
        fontWeight: 'bold'
    },
    icon: {
        marginRight: Variables.spacingSm as DimensionValue,
    }
});

export default connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(MenuItemComponent);
