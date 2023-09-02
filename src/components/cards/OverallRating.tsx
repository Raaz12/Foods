import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Typography/Header';
import {AirbnbRating} from 'react-native-ratings';

const OverallRating = ({num}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="Overall Rating" />
      <Text style={{fontSize: 40, color: '#000000', fontWeight: 'bold'}}>
        {num.toFixed(1) | 1}
      </Text>
      <AirbnbRating
        count={5}
        reviews={['Bad', 'OK', 'Good', 'Very Good', 'Amazing']}
        defaultRating={parseInt(num | 1)}
        size={10}
      />
    </View>
  );
};

export default OverallRating;

const styles = StyleSheet.create({});
