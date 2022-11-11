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
          <Screen name="Meal" component={Meal} />
          <Screen name="Home" component={Home} />
          <Screen name="Stats" component={Stats} />
          <Screen name="NewMeal" component={NewMeal} />
          <Screen name="Feedback" component={Feedback} />
        </Navigator>
    );
}