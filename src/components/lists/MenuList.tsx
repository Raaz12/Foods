import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Item_card from '../cards/Item_card';

const MenuList = ({navigation, filteredData}: any) => {
  //   const data = require('../../dummy_data/List.json').menu;
  return (
    <FlatList
      contentContainerStyle={{rowGap: 10, marginHorizontal: 10}}
      data={filteredData}
      renderItem={({item}) => {
        return (
          <Item_card
            {...item}
            onPress={() => {
              navigation.navigate('Detail', {...item});
            }}
          />
        );
      }}
    />
  );
};

export default MenuList;

const styles = StyleSheet.create({});
