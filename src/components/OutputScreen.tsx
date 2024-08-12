/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR_MODE} from '../types';

type OutputScreenProps = {
  colors: COLOR_MODE;
};

const OutputScreen = ({colors}: OutputScreenProps) => {
  return (
    <View style={styles.outputScreenContainer}>
      <Text style={{color: colors.textColor, ...styles.result}}>
        RESULT OUTPUT
      </Text>
    </View>
  );
};

export default OutputScreen;

const styles = StyleSheet.create({
  outputScreenContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  result: {
    fontSize: 32,
  },
});
