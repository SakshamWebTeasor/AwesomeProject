import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, TouchableHighlight, Modal, Button, TextInput, ScrollView } from 'react-native'
import styles from './style'
import { userDetail } from './NavigationStack'

interface DataItem {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}

interface userItem extends userDetail {
    "id": number
}

const ApiLink = 'http://172.17.176.1:3000';

function ApiFetch() {
    const [fetchData, setFetchData] = useState(false);
    const [serachedText, setSerachedText] = useState('');
    const [editData, setEditData] = useState<number | boolean>(false);
    const [uData, setUData] = useState<userItem[] | null>(null)
    const [uDataModal, setUDataModal] = useState<userDetail>({
        name: '',
        age: 0
    })
    const [error, setError] = useState({
        name: true,
        age: true
    })
    const [showModal, setShowModal] = useState(false);
    const handleBlur = () => {
        setFetchData(true);
        searchUserApiDataFromLocal();
        // This function is called when the TextInput loses focus (onBlur).
        console.log('Input field lost focus');
    };
    const handleInputChange = (text: string, type: string) => {
        if (type === 'search') {
            setSerachedText(text);
            return
        }
        if (type === 'name') handleInputErrorChange('name')
        if (type === 'age') handleInputErrorChange('age')
        setUDataModal((prevData) => ({
            ...prevData,
            [type]: type === 'age' ? (!isNaN(parseInt(text)) ? parseInt(text) : 0) : text,
        }));
    };
    const handleInputErrorChange = (type: string) => {
        setError((prevData) => ({
            ...prevData,
            [type]: type === 'age' ? (uDataModal.age === 0 ? true : false) : (uDataModal.name === '' ? true : false)
        }));
    };
    const getUserApiDataFromLocal = async () => {
        try {
            const url = ApiLink + "/userData";
            const response = await fetch(url);
            if (response.ok) {
                setFetchData(true);
                const result = await response.json();
                setUData(result);
            } else {
                setUData(null);
                console.error('Failed to fetch data');
            }
        } catch (error) {
            setUData(null);
            console.error('Error:', error);
        }
    }
    const searchUserApiDataFromLocal = async () => {
        try {
            const url = ApiLink + "/userData?q=" + serachedText;
            const response = await fetch(url);
            if (response.ok) {
                setFetchData(true);
                const result = await response.json();
                setUData(result);
            } else {
                setUData(null);
                console.error('Failed to fetch data');
            }
        } catch (error) {
            setUData(null);
            console.error('Error:', error);
        }
    }
    const deleteUserDataFromLocal = async (id: number) => {
        try {
            const url = ApiLink + "/userData/" + id;
            const response = await fetch(url, { method: "DELETE" });
            if (response.ok) {
                setFetchData(false);
                const result = await response.json();
                setUData(result);
            } else {
                setUData(null);
                console.error('Failed to fetch data');
            }
        } catch (error) {
            setUData(null);
            console.error('Error:', error);
        }
    }
    const addUserDataForLocal: () => Promise<boolean> = async () => {
        try {
            const url = ApiLink + "/userData/";
            handleInputErrorChange('name')
            handleInputErrorChange('age')
            if ((!error.name && !error.age) && (uDataModal.name !== '' && uDataModal.age !== 0)) {
                const response = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(uDataModal) });
                if (response.ok) {
                    setFetchData(false);
                    setUDataModal({ name: '', age: 0 })
                    const result = await response.json();
                    setUData(result);
                    return true;
                } else {
                    setUData(null);
                    console.error('Failed to fetch data');
                    return false;
                }
            }
            return false
        } catch (error) {
            setUData(null);
            console.error('Error:', error);
            return false;
        }
    }
    const editUserDataForLocal = async () => {
        try {
            const url = ApiLink + "/userData/" + editData;
            const response = await fetch(url, { method: "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(uDataModal) });
            if (response.ok) {
                setFetchData(false);
                setUDataModal({ name: '', age: 0 })
                const result = await response.json();
                setUData(result);
            } else {
                setUData(null);
                console.error('Failed to fetch data');
            }
        } catch (error) {
            setUData(null);
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        getUserApiDataFromLocal()
    }, [fetchData])
    return (
        <View style={[
            styles.AppView2
        ]}>
            <View><TextInput
                style={[styles.textInput, { backgroundColor: 'skyblue', margin: 10 }]}
                placeholder="Search By Name Here"
                onChangeText={(text) => handleInputChange(text, 'search')}
                onBlur={handleBlur}
                value={serachedText}
                keyboardType="numeric"></TextInput></View>
            <View style={[styles.ChildBText, styles.warnSky, styles.paddingHorizontal112]}>
                <TouchableHighlight>
                    <Text style={[styles.button2, styles.button]} onPress={() => { setShowModal(true) }}>Add</Text>
                </TouchableHighlight>
            </View>
            {uData ? (
                uData.length > 0 ? <>
                    {/* <FlatList
                        data={uData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={[styles.ChildBText, styles.warnSky, { flex: 1, flexDirection: 'row' }]}>
                                <TouchableHighlight>
                                    <Text style={[styles.button2, styles.button]} onPress={() => deleteUserDataFromLocal(item.id)}>Delete</Text>
                                </TouchableHighlight>
                                <View>
                                    <Text>id:
                                        <Text style={styles.truncate}>{item.id}</Text>
                                    </Text>
                                    <Text>name:
                                        <Text style={styles.truncate}>{item.name}</Text>
                                    </Text>
                                    <Text>age:
                                        <Text style={styles.truncate}>{item.age}</Text>
                                    </Text>
                                </View>
                                <TouchableHighlight>
                                    <Text style={[styles.button2, styles.button]} onPress={() => {
                                        setUDataModal({
                                            name: item.name,
                                            age: item.age
                                        })
                                        setEditData(item.id)
                                        setShowModal(true)
                                    }}>Edit</Text>
                                </TouchableHighlight>
                            </View>
                        )}
                    /> */}
                    <ScrollView>
                        <View style={styles.dataWrapper}>
                            <View style={styles.main}><Text>id</Text></View>
                            <View style={styles.main}><Text>name</Text></View>
                            <View style={styles.main}><Text>age</Text></View>
                            <View style={styles.main}><Text>Edit</Text></View>
                            <View style={styles.main}><Text>Delete</Text></View>
                        </View>
                        {uData.map((item) => <View style={styles.dataWrapper}>
                            <View style={styles.main}><Text>{item.id}</Text></View>
                            <View style={styles.main}><Text>{item.name}</Text></View>
                            <View style={styles.main}><Text>{item.age}</Text></View>
                            <TouchableHighlight style={styles.main}>
                                <Text style={[styles.button3]} onPress={() => {
                                    setUDataModal({
                                        name: item.name,
                                        age: item.age
                                    })
                                    setEditData(item.id)
                                    setShowModal(true)
                                }}>Edit</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.main}>
                                <Text style={[styles.button3]} onPress={() => deleteUserDataFromLocal(item.id)}>Delete</Text>
                            </TouchableHighlight>
                        </View>)}
                    </ScrollView>
                </> : <View><Text>No Data To List</Text></View>
            ) : (
                <Text>Loading data...</Text>
            )}
            {showModal && <Modal transparent={true} animationType='slide'>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.RandomText, styles.mBottom]}>Hi! Hello There {JSON.stringify(uDataModal)}</Text>
                        <TextInput
                            style={[styles.textInput, (error.age || error.name) && styles.error]}
                            placeholder="Enter Name Here"
                            onChangeText={(text) => handleInputChange(text, 'name')}
                            value={uDataModal.name}
                            keyboardType="numeric"></TextInput>
                        <TextInput
                            style={[styles.textInput, (error.age || error.name) && styles.error]}
                            placeholder="Enter an integer"
                            onChangeText={(text) => handleInputChange(text, 'age')}
                            value={uDataModal.age.toString()}
                            keyboardType="numeric"
                        />
                        <Button title={editData ? "Edit & Update" : 'Add To List'} onPress={async () => {
                            if (typeof editData == 'number') {
                                editUserDataForLocal()
                                setShowModal(false);
                                setEditData(false);
                            } else {
                                let response: boolean = await addUserDataForLocal();
                                if (response) {
                                    setShowModal(false);
                                    setEditData(false);
                                }
                            }
                        }} />
                        <Button title={'Close Modal'} onPress={() => {
                            setUDataModal({ name: '', age: 0 })
                            setShowModal(false);
                            setEditData(false);
                        }} />
                    </View>
                </View>
            </Modal>}
        </View>
    )
}

export default ApiFetch