import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DescreptionTag from '../../Typography/Descreption';
import Price_tag from '../../Typography/Price_Tag';
import ViewMenuButton from '../buttons/ViewMenuButton';
import Add_Button from '../buttons/Add_Button';
import Header from '../../Typography/Header';

const TypeCard = ({data}: any) => {
  const veg = require('../../assets/images/veg.png');
  const non_veg = require('../../assets/images/non_veg.png');

  return (
    <View style={{gap: 16, marginHorizontal: 16}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
        }}>
        {data.type == 'veg' && (
          <Image source={veg} style={{height: 30, width: 30}} />
        )}
        {data.type == 'non_veg' && (
          <Image source={non_veg} style={{height: 18, width: 18}} />
        )}
        <Image source={{uri: data.tag}} style={{height: 30, width: 100}} />
      </View>
      <Header title={data.name} />
      <View style={styles.priceStyle}>
        <Price_tag title={` Price: $ ${data.price}`} />
      </View>
      <DescreptionTag title={data.description} />

      <ViewMenuButton />
    </View>
  );
};

export default TypeCard;

const styles = StyleSheet.create({
  priceStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
