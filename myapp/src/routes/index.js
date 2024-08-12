import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import SingIn from '../pages/SingIn'
import MainMenu from '../pages/MainMenu'
import Quiz from '../pages/Quiz'

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SingIn"
                component={SingIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MainMenu"
                component={MainMenu}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Quiz"
                component={Quiz}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
};