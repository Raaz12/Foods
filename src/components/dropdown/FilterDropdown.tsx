import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../Typography/Header';

const FilterDropdown = ({onSpecialties, onRatings, onVeg, onNonVeg}: any) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Pressable onPress={onSpecialties} style={styles.filter_tag}>
        <Header title="Specialties" />
      </Pressable>

      <Pressable onPress={onRatings} style={styles.filter_tag}>
        <Header title="Ratings" />
      </Pressable>
      <Pressable onPress={onVeg} style={styles.filter_tag}>
        <Header title="Veg" />
      </Pressable>
      <Pressable onPress={onNonVeg} style={styles.filter_tag}>
        <Header title="Non-veg " />
      </Pressable>
    </View>
  );
};

export default FilterDropdown;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,
    top: 47,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  filter_tag: {
    paddingHorizontal: 20,
    paddingVertical: 2,
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
