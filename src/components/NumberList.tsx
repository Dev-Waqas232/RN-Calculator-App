/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, FlatList, StyleSheet, View} from 'react-native';

import {COLOR_MODE} from '../types';

type NumberListProps = {
  colors: COLOR_MODE;
};

const Number = ({
  item,
  colors,
  style,
}: {
  item: string | number;
  colors: COLOR_MODE;
  style?: object;
}) => {
  return (
    <Pressable
      style={{
        ...styles.numBtn,
        ...style,
        backgroundColor: colors.secondaryBgColor,
      }}>
      <Text style={{color: colors.primaryColor, ...styles.num}}>{item}</Text>
    </Pressable>
  );
};

const NumberList = ({colors}: NumberListProps) => {
  const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={styles.numList}>
      <FlatList
        style={styles.list}
        numColumns={3}
        data={NUMBERS}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <Number item={item} colors={colors} />}
      />
      <View style={styles.bttmLine}>
        <Number item={0} colors={colors} style={styles.zeroBtn} />
        <Number item="." colors={colors} />
      </View>
    </View>
  );
};

export default NumberList;

const styles = StyleSheet.create({
  numList: {
    flex: 4,
  },
  list: {
    marginTop: 90,
    height: 170,
  },
  bttmLine: {
    flex: 1,
    flexDirection: 'row',
  },
  zeroBtn: {
    flex: 2,
  },
  numBtn: {
    flex: 1,
    margin: 12,
    marginLeft: 0,
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
