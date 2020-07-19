import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
  const renderItem = (category) => {
    return (
      <CategoryGridTile
        title={category.item.title}
        color={category.item.color}
        onSelect={() => {
          props.navigation.navigate('CategoryMeals', {
            categoryId: category.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
