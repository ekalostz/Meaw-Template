import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  ListScreen,
  DetailScreen,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    ListScreen,
    DetailScreen
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);