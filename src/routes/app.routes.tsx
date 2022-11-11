import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/FeedBack';
import { Meal } from '@screens/Meal';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="stats" component={Stats} />
          <Screen name="newmeal" component={NewMeal} />
          <Screen name="feedback" component={Feedback} />
          <Screen name="meal" component={Meal} />
        </Navigator>
    );
}