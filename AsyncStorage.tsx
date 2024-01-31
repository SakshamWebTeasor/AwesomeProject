import React from 'react'
import { Button, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function AsyncStorageUse() {
    const setData = async () => {
        await AsyncStorage.setItem("name", "Saksham")
    }
    const getData = async () => {
        let name = await AsyncStorage.getItem("name")
        console.warn('name', name);
    }
    const removeData = async () => {
        await AsyncStorage.removeItem("name")
    }
    return (
        <View>
            <Text style={{ fontSize: 32, marginTop: 100, marginLeft: 30 }}>AsyncStorage Usage</Text>
            <Button title='Set Data' onPress={setData} style={{ margin: 5 }}></Button>
            <Button title='Get Data' onPress={getData} style={{ margin: 5 }}></Button>
            <Button title='Remove Data' onPress={removeData} style={{ margin: 5 }}></Button>
        </View>
    )
}

export default AsyncStorageUse
