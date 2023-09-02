import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IHead} from '../models/Header.modal';

const Header = (auto: IHead) => {
  return (
    <Text
      style={[
        styles.text_header,
        {color: auto.color ? auto.color : '#000'},
        auto.style,
      ]}>
      {auto.title}
    </Text>
  );
};

export default Header;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});
