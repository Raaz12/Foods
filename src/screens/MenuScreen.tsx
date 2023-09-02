import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SearchCard from '../components/cards/SearchCard';
import FilterDropdown from '../components/dropdown/FilterDropdown';
import MenuList from '../components/lists/MenuList';

const MenuScreen = ({navigation}: any) => {
  const data = require('../dummy_data/List.json').menu;

  const [filteredData, setFilteredData] = useState(data);
  const [filterText, setFilterText] = useState('');
  const [filter, setFilter] = useState(false);
  const [sort, setSort] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const filteredResults = data.filter((item: any) =>
      item.name?.toLowerCase().includes(filterText?.toLowerCase()),
    );
    setFilteredData(filteredResults);
  }, [filterText, data]);

  useEffect(() => {
    const filteredResults = data.filter((item: any) =>
      item.type?.toLowerCase().includes(sort?.toLowerCase()),
    );
    setFilteredData(filteredResults);
  }, [sort]);
  useEffect(() => {
    const filteredResults = data.sort();
    setRating('');
    console.log(rating);

    setFilteredData(filteredResults);
  }, [rating]);
  return (
    <SafeAreaView>
      <SearchCard
        onChangeText={setFilterText}
        value={filterText}
        onFilter={() => {
          setFilter(!filter);
        }}
      />
      <MenuList navigation={navigation} filteredData={filteredData} />
      {filter && (
        <FilterDropdown
          onSpecialties={() => {
            setFilter(false);
            setSort('');
          }}
          onRatings={() => {
            setFilter(false);
            setRating('rating');
          }}
          onVeg={() => {
            setFilter(false);
            setSort('veg');
          }}
          onNonVeg={() => {
            setFilter(false);
            setSort('non_veg');
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
