import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';

export default function CategoryList({ setSelectedCategory }) { 
  const categoryList = [
    {
      id: 1,
      name: 'Gym',
      value: 'gym',
      icon: require('./../../../assets/icons8-gym-100.png'),
    },
    {
      id: 2,
      name: 'Restaurants',
      value: 'restaurant',
      icon: require('./../../../assets/icons8-restaurant-100.png'),
    },
    {
      id: 3,
      name: 'Cafe',
      value: 'cafe',
      icon: require('./../../../assets/icons8-coffee-100.png'),
    },
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'Dosis-Regular',
        color: "#9882AC",
        marginLeft: 10
      }}>
        Top Places To Visit
      </Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
