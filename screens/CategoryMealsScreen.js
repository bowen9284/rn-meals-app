import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>

      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate('MealDetails', {
            category: selectedCategory,
          });
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
