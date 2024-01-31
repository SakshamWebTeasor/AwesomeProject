import React, { useEffect, useState } from 'react'
import { Button, Image, ScrollView, Text, View } from 'react-native'
import { product } from '../ProductWrapper'
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart, remove_from_cart } from './redux/action';

function Product({ Products }: { Products: product[] }) {
    const cart: product[] = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch();
    const handleAddtoCart = (item: product) => {
        dispatch(add_to_cart(item))
    }
    const removeFromCart = (item: product) => {
        dispatch(remove_from_cart(item));
    }
    return (
        <View style={{ flex: 1, borderColor: 'white', borderStyle: 'solid', borderWidth: 5, alignItems: 'center' }} >
            <Text style={{ fontSize: 24 }}>Product</Text>
            <ScrollView>
                {Products.map((product) => {
                    const [isAdded, setIsAdded] = useState(false);
                    useEffect(() => {
                        let result = cart.filter((p) => p.name === product.name);
                        if (result.length) {
                            setIsAdded(true);
                        } else {
                            setIsAdded(false);
                        }
                    }, [cart])
                    return (<View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 24 }}>Name: {product.name}</Text>
                        <Text style={{ fontSize: 24 }}>Price: {product.price}</Text>
                        <Text style={{ fontSize: 24 }}>Color: {product.color}</Text>
                        <Image style={{ width: 200, height: 200 }} source={{ uri: product.image }}></Image>
                        {isAdded ? <Button title='Remove From Cart' onPress={() => removeFromCart(product)} /> : <Button title='Add To Cart' onPress={() => handleAddtoCart(product)} />}

                    </View>)
                })}
            </ScrollView>
        </View>
    )
}

export default Product