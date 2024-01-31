import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

function Header() {
    const cart = useSelector((state: any) => state.reducer);
    const [cartItem, setCartItem] = useState(0);
    useEffect(() => {
        setCartItem(cart.length)
    }, [cart])
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={{ backgroundColor: 'yellow', height: screenHeight * 0.1, alignItems: 'center', margin: 10 }}><Text style={{ fontSize: 24 }}>Header</Text><Text style={{ flex: 1, justifyContent: 'flex-end' }}>Item In Cart: {cartItem}</Text></View>
    )
}

export default Header