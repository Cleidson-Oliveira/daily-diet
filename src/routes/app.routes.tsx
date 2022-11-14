import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Status } from '@screens/Status';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/FeedBack';
import { Meal } from '@screens/Meal';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="home" component={Home} />
          <Screen name="status" component={Status} />
          <Screen name="newmeal" component={NewMeal} />
          <Screen name="feedback" component={Feedback} />
          <Screen name="meal" component={Meal} />
        </Navigator>
    );
}