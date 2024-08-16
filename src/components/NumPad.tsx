/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_MODE} from '../types';
import NumberList from './NumberList';
import RightBar from './RightBar';

type NumPadProps = {
  colors: COLOR_MODE;
};

const NumPad = ({colors}: NumPadProps) => {
  return (
    <View style={styles.numPadContainer}>
      <View style={styles.bottomGrid}>
        <NumberList colors={colors} />
        <RightBar colors={colors} />
      </View>
    </View>
  );
};

export default NumPad;

const styles = StyleSheet.create({
  numPadContainer: {
    flex: 3,
    paddingHorizontal: 16,
  },
  bottomGrid: {
    flexDirection: 'row',
    flex: 1,
  },
});
