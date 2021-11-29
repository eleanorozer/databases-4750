import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { BlurView } from 'expo-blur';

// import Main from "../pages/Main";
import Registration from "../pages/Registration";
import AnimalsPage from "../pages/AnimalsPage"

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
     screenOptions={{
        tabBarBackground: () => (
          <BlurView tint="light" intensity={10} style={StyleSheet.absoluteFill} />
        ),
     }}>
      <Tab.Screen name="Settings" component={AnimalsPage} />
      <Tab.Screen name="Register" component={Registration} />
    </Tab.Navigator>
  );
}

export default MyTabs;