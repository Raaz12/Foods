import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Typography/Header';
import Price_tag from '../../Typography/Price_Tag';
import {AirbnbRating} from 'react-native-ratings';
import DescreptionTag from '../../Typography/Descreption';

interface IReview {
  name?: string;
  date?: Date;
  rating?: number;
  comments?: string;
  restaurantId?: string;
  type?: string;
}
const ReviewCard = (auto: IReview) => {
  const date = auto.date;
  let startDay = new Date(date).getDate();
  let endDay = new Date().getDate();
  const day = startDay - endDay;

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={styles.container}></View>
        <View style={{flex: 1}}>
          <View style={styles.diraction}>
            <Header title={auto.name} />
            <Price_tag title={`${day} days ago`} />
          </View>
          <View style={{flexDirection: 'row', gap: 60}}>
            <AirbnbRating
              count={5}
              defaultRating={auto.rating}
              starContainerStyle={{position: 'absolute', left: 10, top: 0}}
              reviews={['']}
              size={10}
            />
            <Price_tag title={`(${auto.rating})`} />
          </View>
        </View>
      </View>
      <DescreptionTag style={{}} title={auto.comments} />
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    backgroundColor: '#646161',
    borderRadius: 8,
  },
  diraction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
