import React, { useEffect, useState } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import Header from './component/Header';
import Product from './component/Product';
import { add_to_cart } from './component/redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

export interface product {
    name: string;
    color: string;
    price: number;
    image: string;
}

function ReduxUse(props: any) {
    const dispatch = useDispatch();
    const Products = [{
        name: 'Samsung Mobile 1',
        color: 'Blue',
        price: 30000,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg'
    }, {
        name: 'Samsung Mobile 2',
        color: 'pink',
        price: 32000,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-1.jpg'
    }, {
        name: 'Samsung Mobile 3',
        color: 'black',
        price: 35000,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-2.jpg'
    }, {
        name: 'Samsung Mobile 4',
        color: 'red',
        price: 34000,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-cardinal-red.jpg'
    }]
    const handleAddtoCart = (item: product) => {
        dispatch(add_to_cart(item))
    }
    return (
        <View style={{ flex: 1 }}>
            <Button title='Go To User List' onPress={() => { props.navigation.navigate("User") }} />
            <Header />
            <ScrollView>
                <Product Products={Products} />
                {Products.map((product) => <View style={{ margin: 10 }}>
                    <Text style={{ fontSize: 24 }}>Name: {product.name}</Text>
                    <Text style={{ fontSize: 24 }}>Price: {product.price}</Text>
                    <Text style={{ fontSize: 24 }}>Color: {product.color}</Text>
                    <Image style={{ width: 200, height: 200 }} source={{ uri: product.image }}></Image>
                    <Button title='Add To Cart' onPress={() => handleAddtoCart(product)} />
                </View>)}
            </ScrollView>
        </View>
    )
}

export default ReduxUse
