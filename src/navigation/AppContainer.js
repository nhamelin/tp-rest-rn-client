import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme, TouchableRipple } from 'react-native-paper'

import AuthorScreen from '../screens/Author'
import BookScreen from '../screens/Book'

export default function AppContainer() {
  const Tab = createBottomTabNavigator()
  const { colors } = useTheme()

  const renderIcon = (iconSource) => ({ focused, size }) => (
    <TouchableRipple rippleColor={colors.primary}>
      <Icon name={iconSource} size={size} color={focused ? colors.primary : colors.divider} />
    </TouchableRipple>
  )

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
          activeBackgroundColor: colors.background,
          inactiveBackgroundColor: colors.background,
          style: { borderTopWidth: 0 }
        }}>
        <Tab.Screen
          name="Author"
          options={{
            tabBarIcon: renderIcon('face'),
            tabBarLabel: 'Auteurs'
          }}
          component={AuthorScreen}
        />
        <Tab.Screen
          name="Book"
          options={{
            tabBarIcon: renderIcon('book-open-page-variant'),
            tabBarLabel: 'Livres'
          }}
          component={BookScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
