import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, connect } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';

import ViewRoot from './src/view/view-root';
import store from './redux/stores/store';
import BaseThemeComponent from './core/components/base-theme';
class App extends BaseThemeComponent {

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
        <ViewRoot />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
