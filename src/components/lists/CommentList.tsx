import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReviewCard from '../cards/ReviewCard';

interface IComment {
  filteredData: any;
}
const CommentList = (auto: IComment) => {
  return auto.filteredData.map((item: any, index: number) => {
    return (
      <View key={index} style={[styles.container, styles.shadow]}>
        <ReviewCard {...item} />
      </View>
    );
  });
};

export default CommentList;

const styles = StyleSheet.create({
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
