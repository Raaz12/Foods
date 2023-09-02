import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Price_tag from '../../Typography/Price_Tag';
import Header from '../../Typography/Header';
import DescreptionTag from '../../Typography/Descreption';

const Add_Button = () => {
  return (
    <Pressable style={[styles.container, styles.shadow]}>
      <Header color="#60b246" title="Add" />
      <View style={{position: 'absolute', top: 0, right: 5}}>
        <DescreptionTag title="+" color="#60b246" />
      </View>
    </Pressable>
  );
};

export default Add_Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#FFF',
    elevation: 2,
    margin: 2,
  },
});
