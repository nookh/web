import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Form from "../../components/Form/Form";

const Footer = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Form} />
      <Tab.Screen name="Settings" component={Form} />
    </Tab.Navigator>
  )
};

export default Footer;