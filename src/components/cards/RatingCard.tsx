import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DescreptionTag from '../../Typography/Descreption';
import Price_tag from '../../Typography/Price_Tag';

const RatingCard = ({ratings}: any) => {
  return (
    <View style={[styles.shadow, styles.container, styles.stars]}>
      <Price_tag title={`${ratings} \u272A`} />
      <View style={{height: 0.4, backgroundColor: '#000'}} />
      <DescreptionTag title="100K+ ratings" />
    </View>
  );
};

export default RatingCard;

const styles = StyleSheet.create({
  stars: {
    backgroundColor: '#c6c7c3',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: '#5a5656',
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
  container: {
    padding: 10,
    borderRadius: 8,
    gap: 5,
  },
});
