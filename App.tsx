/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {DARK_COLORS, LIGHT_COLORS} from './src/theme';
import NumPad from './src/components/NumPad';
import OutputScreen from './src/components/OutputScreen';

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(true);
  const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

  return (
    <>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <View
        style={{
          backgroundColor: colors.backgroundColor,
          ...styles.mainContainer,
        }}>
        <OutputScreen colors={colors} />
        <NumPad colors={colors} />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 48,
  },
});
