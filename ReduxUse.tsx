import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import Product from './component/Product';
import { add_to_cart } from './component/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductWrapper from './ProductWrapper';
import UserList from './UserList';

const Stack = createNativeStackNavigator();
function ReduxUse() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ProductWrapper} />
                <Stack.Screen name="User" component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ReduxUse
