import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feedback } from '@screens/FeedBack';

import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Stats } from '@screens/Stats';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Feedback" component={Feedback} />
          <Screen name="NewMeal" component={NewMeal} />
          <Screen name="Stats" component={Stats} />
          <Screen name="Home" component={Home} />
        </Navigator>
    );
}