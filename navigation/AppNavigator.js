import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Login') {
                        iconName = focused ? 'log-in' : 'log-in-outline';
                    } else if (route.name === 'HomeStack') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Pets') {
                        iconName = focused ? 'paw' : 'paw-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                tabBarIcon
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login' }}
            />
            <Tab.Screen
                name="HomeStack"
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="Profile"
                component={LoginScreen}
                options={{ title: 'Profile' }}
            />
            <Tab.Screen
                name="Pets"
                component={LoginScreen}
                options={{ title: 'Pets' }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
