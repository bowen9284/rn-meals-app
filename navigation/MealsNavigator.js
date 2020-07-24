import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MenuDrawer from '../components/MenuDrawer';

import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const defaultStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor,
  },
  headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Meal Categories',
        headerLeft: () => <MenuDrawer navigation={navigation} />,
      }),
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Favorites',
        headerLeft: () => <MenuDrawer navigation={navigation} />,
      }),
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons
            name="ios-star-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      })
    : createMaterialBottomTabNavigator(tabConfig, {
        activeColor: 'white',
        shifting: true,
      });

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Meal Categories',
        headerLeft: () => <MenuDrawer navigation={navigation} />,
      }),
    },
  },
  {
    defaultNavigationOptions: defaultStackNavigationOptions,
  }
);

const MainNavigator = createDrawerNavigator({
  MealFavs: MealsFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
