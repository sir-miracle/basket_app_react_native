import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from './Account'
import Home from './Home'
import Cart from './Cart'
import Saved from './Saved'

const Tab = createBottomTabNavigator();
const BottomTab = () => {

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                let iconName;
                if (route.name === 'Saved') {
                    iconName = focused
                        ? 'md-star-outline'
                        : 'md-star-outline';
                } else if (route.name === 'Home') {
                    iconName = focused ? 'home-outline' : 'home-outline';
                } else if (route.name === 'Cart') {
                    iconName = focused ? 'cart-outline' : 'cart-outline';
                } else if (route.name === 'Account') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: '#FF8137',
            tabBarInactiveTintColor: '#112D42',
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Saved" component={Saved} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTab;

