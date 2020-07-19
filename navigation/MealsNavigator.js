import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? '' : Colors.primaryColor,
      },
      headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
    },
  }
);

export default createAppContainer(MealsNavigator);
