import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LinearGradient } from 'expo-linear-gradient';

import ViewRoot from './src/view/view-root';
import SideMenuComponent from './core/template/sidebar/sidemenu';
import store from './redux/stores/store';
import BaseThemeComponent from './core/components/base-theme';
import { ThemeProps } from './core/models/theme-prop';
import { navigationRef } from './core/navigator/root-navigator';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  },
};

class App extends BaseThemeComponent<ThemeProps> {

  render() {
    this.listenThemeChanging();
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={[
            this.themeService.getActiveThemeColorScale('primary', 700),
            this.themeService.getActiveThemeColorScale('primary', 400),
            this.themeService.getActiveThemeColorScale('primary', 300),
            this.themeService.getActiveThemeColorScale('primary', 200),
          ]}
          start={{ x: 0.7, y: 0 }}
          style={styles.background}
        />
        <SideMenuComponent />
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
          <Stack.Navigator initialRouteName='ViewRoot'>
            <Stack.Screen
              name="ViewRoot"
              component={ViewRoot}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

const ConnectedApp = connect(BaseThemeComponent.mapStateToProps, BaseThemeComponent.mapDispatchToProps)(App);

export default function Root() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}
