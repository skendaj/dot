import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { Text } from 'tamagui';
import Colors from '~/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: 'mon-sb',
        },
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text color={focused ? '#FD267A' : '#cfd6e4'}>Explore</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={22}
              color={focused ? '#FD267A' : '#cfd6e4'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="listings"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text color={focused ? '#FD267A' : '#cfd6e4'}>Listings</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Entypo name="list" size={22} color={focused ? '#FD267A' : '#cfd6e4'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text color={focused ? '#FD267A' : '#cfd6e4'}>Profile</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign name="user" size={22} color={focused ? '#FD267A' : '#cfd6e4'} />
          ),
        }}
      />
    </Tabs>
  );
}
