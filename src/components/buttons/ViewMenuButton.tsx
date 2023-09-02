import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Price_tag from '../../Typography/Price_Tag';
import Add_Button from './Add_Button';

const ViewMenuButton = () => {
  return (
    <Pressable style={[styles.container]}>
      <Add_Button />
    </Pressable>
  );
};

export default ViewMenuButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 84,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: '#bdd826',
    elevation: 2,
    margin: 2,
  },
});
