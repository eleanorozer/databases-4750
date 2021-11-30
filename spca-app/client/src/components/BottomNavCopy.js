import React from "react";
import { View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../auth/components/HomePage";
import Login from "../auth/components/LoginPage";
import Register from "../auth/components/RegisterPage";
import AnimalsPage from "../pages/AnimalsPage";
import MainPage from "../pages/MainPage";

const Tab = createMaterialBottomTabNavigator();

function BottomNavCopy() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: "white" }}
        >
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Settings" component={AnimalsPage} />
      </Tab.Navigator>
    </View>
  );
}

export default BottomNavCopy;