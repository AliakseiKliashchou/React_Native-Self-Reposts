import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { Platform } from 'react-native';
import { THEME } from '../theme';

const PostNavigator =  createStackNavigator({
        Main: MainScreen,
        Post: {
            screen: PostScreen
        },
    }, 
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
        }
    }
);

export const AppNavigation = createAppContainer(PostNavigator);