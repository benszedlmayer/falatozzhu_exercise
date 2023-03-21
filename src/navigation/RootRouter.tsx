import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, View} from 'react-native';
import CreateEditScreen from '../screens/CreateEditScreen/CreateEditScreen';

import ReadScreen from '../screens/ReadScreen/ReadScreen';
import globalStyles from '../shared/global.style';

const RootRouter = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="read">
      <Tab.Screen
        name="createEdit"
        component={CreateEditScreen}
        options={{
          headerTitle: 'Webshop',
          tabBarIcon: ({focused}) => (
            <View
              style={[
                globalStyles.tabbarIconWrapper,
                focused && globalStyles.tabbarIconWrapperActive,
              ]}>
              <Image
                source={require('../assets/icons/icon_create.png')}
                style={globalStyles.tabbarIcon}
              />
            </View>
          ),
          tabBarLabel: 'Create',
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tab.Screen
        name="read"
        component={ReadScreen}
        options={{
          headerTitle: 'Webshop Inventory',
          tabBarIcon: ({focused}) => (
            <View
              style={[
                globalStyles.tabbarIconWrapper,
                focused && globalStyles.tabbarIconWrapperActive,
              ]}>
              <Image
                source={require('../assets/icons/icon_read.png')}
                style={globalStyles.tabbarIcon}
              />
            </View>
          ),
          tabBarLabel: 'Read',
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tab.Navigator>
  );
};

export default RootRouter;
