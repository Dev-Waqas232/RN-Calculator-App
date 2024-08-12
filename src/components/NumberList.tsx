/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, FlatList, StyleSheet} from 'react-native';

import {COLOR_MODE} from '../types';

type NumberListProps = {
  colors: COLOR_MODE;
};

const Number = ({item, colors}: {item: number; colors: COLOR_MODE}) => {
  return (
    <Pressable
      style={{...styles.numBtn, backgroundColor: colors.secondaryBgColor}}>
      <Text style={{color: colors.primaryColor, ...styles.num}}>{item}</Text>
    </Pressable>
  );
};

const NumberList = ({colors}: NumberListProps) => {
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <FlatList
      style={styles.numList}
      numColumns={3}
      data={NUMBERS}
      keyExtractor={item => item.toString()}
      renderItem={({item}) => <Number item={item} colors={colors} />}
    />
  );
};

export default NumberList;

const styles = StyleSheet.create({
  numList: {
    flex: 1,
  },
  numBtn: {
    flex: 1,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderRadius: 12,
  },
  num: {
    fontSize: 40,
    fontWeight: '600',
  },
});
