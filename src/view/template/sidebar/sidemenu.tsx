import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { updateActiveThemeAction } from '../../../../redux/actions/theme.actions';
import { updateSideMenuStateAction } from '../../../../redux/actions/sidemenu.actions';

class SideMenuComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>SideMenuComponent</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
});

const mapStateToProps = state => {
    return {
        activeTheme: state.activeTheme,
        isSideMenuOpened: state.sideMenuState,
    };
};

const mapDispatchToProps = {
    updateActiveTheme: updateActiveThemeAction,
    updateSideMenuState: updateSideMenuStateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
