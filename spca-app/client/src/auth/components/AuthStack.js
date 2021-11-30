import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from "react-native";
import Login from './LoginPage';
import Register from './RegisterPage';
import Home from './HomePage';

function SplashScreen() {
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
};

const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register}
                options={{title: 'Create an Account'}}/>
            <Stack.Screen name="Splash" component={SplashScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
