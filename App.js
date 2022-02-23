import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import LoginScreen from './screens/LoginScreen';
import BottomTab from './screens/BottomTab';
import { RootSiblingParent } from 'react-native-root-siblings';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <RootSiblingParent>
    <NavigationContainer>
      <Stack.Navigator  options={{ headerShown: false }}>
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </RootSiblingParent>
  );
}


