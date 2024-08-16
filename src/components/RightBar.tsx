/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {COLOR_MODE} from '../types';

const RightBar = ({colors}: {colors: COLOR_MODE}) => {
  return (
    <View style={styles.rightBar}>
      <Pressable
        style={{
          ...styles.longBtn,
          ...styles.nrmlBtn,
          backgroundColor: colors.secondaryColor,
        }}>
        <Text style={{color: colors.primaryColor, ...styles.btn}}>*</Text>
      </Pressable>
      <Pressable
        style={{
          ...styles.longBtn,
          ...styles.nrmlBtn,
          backgroundColor: colors.secondaryColor,
        }}>
        <Text style={{color: colors.primaryColor, ...styles.btn}}>-</Text>
      </Pressable>
      <Pressable
        style={{...styles.longBtn, backgroundColor: colors.secondaryColor}}>
        <Text style={{color: colors.primaryColor, ...styles.btn}}>+</Text>
      </Pressable>
      <Pressable
        style={{...styles.longBtn, backgroundColor: colors.primaryColor}}>
        <Text style={{color: colors.textColor, ...styles.btn}}>=</Text>
      </Pressable>
    </View>
  );
};

export default RightBar;

const styles = StyleSheet.create({
  rightBar: {
    flex: 1,
  },
  longBtn: {
    backgroundColor: 'blue',
    height: 120,
    margin: 12,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  nrmlBtn: {
    height: 80,
  },
  btn: {
    fontSize: 40,
    fontWeight: '600',
  },
});
