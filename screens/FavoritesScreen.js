import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux'

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  return <MealList meals={favoriteMeals} navigation={props.navigation} />;
};

export default FavoritesScreen;
