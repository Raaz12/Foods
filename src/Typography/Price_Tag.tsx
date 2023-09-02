import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IHead} from '../models/Header.modal';

const Price_tag = (auto: IHead) => {
  return (
    <Text style={[styles.text_header, auto.style, {color: auto.color}]}>
      {auto.title}
    </Text>
  );
};

export default Price_tag;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
});
