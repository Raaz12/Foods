import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IHead} from '../models/Header.modal';

const DescreptionTag = (auto: IHead) => {
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

export default DescreptionTag;

const styles = StyleSheet.create({
  text_header: {
    fontSize: 11,
    fontWeight: '300',
    color: '#363535',
  },
});
