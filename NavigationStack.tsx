import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Applife from './Applife';
import styles from './style';

export interface userDetail {
    name: string;
    age: number;
}

function HomeScreen(props: any) {
    const [data, setData] = useState<userDetail>({
        name: '',
        age: 0
    });
    const handleInputChange = (text: string, type: string) => {
        setData((prevData) => ({
            ...prevData,
            [type]: type === 'age' ? (!isNaN(parseInt(text)) ? parseInt(text) : 0) : text,
        })
        );
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Name Here"
                onChangeText={(text) => handleInputChange(text, 'name')}
                value={data.name}
                keyboardType="numeric"></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder="Enter an integer"
                onChangeText={(text) => handleInputChange(text, 'age')}
                value={data.age.toString()}
                keyboardType="numeric"
            />
            <Button title="Done" onPress={() => props.navigation.navigate("AppLife", { data })} />
        </View>
    );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerStyle: styles.success, headerTitleStyle: styles.AppText }}>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "User Login", headerStyle: styles.warning, headerTitleStyle: styles.tabComp, headerTitle: () => <Text style={styles.modalView}>Hii</Text>, headerRight: () => <Text style={styles.modalView}>Hii2</Text> }} />
                <Stack.Screen name="AppLife" component={Applife} />
            </Stack.Navigator> */}
            {/* <Tab.Navigator>
                <Tab.Screen name='Login' component={Login} />
                <Tab.Screen name='SignUp' component={SignUp} />
            </Tab.Navigator> */}
            <TopTab.Navigator>
                <TopTab.Screen name='Login' component={Login} />
                <TopTab.Screen name='SignUp' component={SignUp} />
            </TopTab.Navigator>
        </NavigationContainer>
    );
}

const Login = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>Login</Text>
    </View>
}

const SignUp = () => {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 40 }}>SignUp</Text>
    </View>
}


export default Navigation;