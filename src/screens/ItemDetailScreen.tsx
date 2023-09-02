import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommentList from '../components/lists/CommentList';
import OverallRating from '../components/cards/OverallRating';
import TypeCard from '../components/cards/TypeCard';

const ItemDetailScreen = ({route, navigate}: any) => {
  const data = route.params;
  const reviews = require('../dummy_data/List.json').reviews;
  const image = data.imagePath;

  const [filteredData, setFilteredData] = useState(reviews);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const filteredResults = reviews.filter((item: any) =>
      item.restaurantId
        ?.toLowerCase()
        .includes(data.restaurantId?.toLowerCase()),
    );
    setFilteredData(filteredResults);
  }, [reviews]);

  let sum: number = 0;

  useEffect(() => {
    for (let i = 0; i < filteredData.length; i++) {
      sum += filteredData[i].rating;
    }
    setNum(sum / filteredData.length);
  }, [num, reviews]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{uri: image}} style={styles.image_style} />
        <TypeCard data={data} />
        <OverallRating num={num} />
        <CommentList filteredData={filteredData} />
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},
  image_style: {height: 300, width: '100%', borderRadius: 8},
});
