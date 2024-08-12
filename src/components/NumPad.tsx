/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_MODE} from '../types';
import NumberList from './NumberList';

type NumPadProps = {
  colors: COLOR_MODE;
};

const NumPad = ({colors}: NumPadProps) => {
  return (
    <View style={styles.numPadContainer}>
      <NumberList colors={colors} />
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  numPadContainer: {
    flex: 3,
    paddingHorizontal: 16,
  },
});
