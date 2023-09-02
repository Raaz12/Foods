import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Typography/Header';
import Price_tag from '../../Typography/Price_Tag';
import DescreptionTag from '../../Typography/Descreption';
import Add_Button from '../buttons/Add_Button';
import {IItem} from '../../models/Item.modal';

const Item_card = (auto: IItem) => {
  const veg = require('../../assets/images/veg.png');
  const non_veg = require('../../assets/images/non_veg.png');
  const url = auto?.imagePath;
  return (
    <Pressable
      onPress={() => (auto.onPress ? auto.onPress() : null)}
      style={[styles.shadow, styles.container]}>
      <View style={{flex: 1, gap: 8}}>
        {auto.type == 'veg' && (
          <Image source={veg} style={{height: 18, width: 18}} />
        )}
        {auto.type == 'non_veg' && (
          <Image source={non_veg} style={{height: 18, width: 18}} />
        )}
        <Header title={auto.name} />
        <Price_tag title={` $ ${auto.price}`} />
        <DescreptionTag title={auto.description} />
      </View>
      <View>
        <Image source={{uri: url}} style={styles.image_style} />
        <View style={{alignItems: 'center'}}>
          <Add_Button />
        </View>
      </View>
    </Pressable>
  );
};

export default Item_card;

const styles = StyleSheet.create({
  image_style: {height: 118, width: 118, borderRadius: 8, margin: 8},
  container: {
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
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
