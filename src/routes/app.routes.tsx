import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Home" component={Home} />
          <Screen name="Stats" component={Stats} />
        </Navigator>
    );
}