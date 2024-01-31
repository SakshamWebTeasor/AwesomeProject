import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, Modal, Pressable, Text, TouchableHighlight, TouchableOpacity, View, StatusBar, Platform } from 'react-native'
import { WebView } from 'react-native-webview'
import styles from './style';
import { userDetail } from './NavigationStack';

interface skill {
    name: string;
    id: number;
}

function Applife(props: any) {
    const [count, setCount] = useState<number>(0);
    const [show, setShow] = useState<boolean>(true);
    const [timerVal, setTimerVal] = useState<number>(0);
    function changeTimerVal() {
        setTimerVal((prevTimer: number) => prevTimer + 1);
    }
    const data: userDetail = props.route.params.data
    function toggleShow() {
        setShow((prevShow) => !prevShow)
    }
    function updateCount() {
        setCount((prevCount) => prevCount + 1) //can't use setCount(count+1); because React's setState function is asynchronous. when useState has a useEffect change condition on count. it can work if count is not on useEffect change condition.
    }
    {/* 9468376015 */ }
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={'gold'} barStyle={'dark-content'} hidden={false} />
            {/* <Text style={{fontSize:30}}> Platform: {Platform.OS}</Text> */}
            <Text style={{ fontSize: 30 }}>Life Cycle {count}</Text>
            <Button title="Increase Count" onPress={updateCount} />
            <Text style={{ fontSize: 30 }}>Show/Hide Button</Text>
            <Button title="Toggle Button" onPress={toggleShow} />
            {show ? <User changeTimerVal={changeTimerVal} timerVal={timerVal} /> : null}
            <Text>Data From Prev Page {JSON.stringify(data)}</Text>
            {/* <FlexBox /> */}
            {/* <TouchableHighlisghtButtonUse /> */}
            {/* <RadioButton /> */}
            {/* <LoadingScr /> */}
            {/* <DialogBox /> */}
            {/* <PressableComponent /> */}
            {/* <CustomModalBoxComp /> */}
        </View>
    )
    return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
}

const CustomModalBoxComp = () => {
    const [show, setShow] = useState(false);
    return (
        <View style={styles.modalButton}>
            {show && <View style={[styles.modal]}>
                <View style={styles.body}>
                    <Text style={[styles.centeredView, styles.mBottom]}>Hi! Hello There</Text>
                    <Button title="Close" onPress={() => setShow(false)} />
                </View>
            </View>}
            <Button title='Button Title' onPress={() => setShow(true)} />
        </View>
    )
}

const PressableComponent = () => {
    return (
        <View style={styles.main2}>
            <Pressable
                onPress={() => console.warn('Hi')}
                onLongPress={() => console.warn('Hello')}
                onPressIn={() => console.warn('PressedIn')}
                onPressOut={() => console.warn('PressedOut')}
                delayLongPress={2000}
            >
                <Text style={[styles.button, styles.primary]}>Pressable</Text>
            </Pressable>
        </View>
    )
}

const DialogBox = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <View style={styles.main}>
            {showModal && <Modal transparent={true} animationType='slide'>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.RandomText, styles.mBottom]}>Hi! Hello There</Text>
                        <Button title={'Close Modal'} onPress={() => { setShowModal(false) }} />
                    </View>
                </View>
            </Modal>}
            <View style={styles.modalButton}>
                <Button title={'Open Modal'} onPress={() => { setShowModal(true) }} />
            </View>
        </View>
    )
}

const LoadingScr = () => {
    const [show, setShow] = useState(false)
    const showLoaderTimeOut = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3000)
    }
    return (
        <View style={styles.main2}>
            <ActivityIndicator size={100} color={"blue"} animating={show} />
            <Button title={'Show Loader'} onPress={showLoaderTimeOut} />
        </View>
    )
}

const TouchableHighlisghtButtonUse = () => {
    return (<>
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.error]}>Error</Text>
            </TouchableHighlight>
        </View>
    </>)
}

const RadioButton = () => {
    const skills: skill[] = [{
        id: 1,
        name: 'javascript'
    },
    {
        id: 2,
        name: 'java'
    },
    {
        id: 3,
        name: 'sql'
    },
    {
        id: 4,
        name: 'mongo'
    },
    {
        id: 5,
        name: 'c++'
    },
    {
        id: 6,
        name: 'dotnet'
    }]
    const [activeRadioBox, setActiveRadioBox] = useState<number>(0)
    function onClickSetActiveRadioBox(num: number) {
        setActiveRadioBox(num);
    }
    return (<>
        <View style={styles.main2}>
            {skills.map((item) => <CommonRadio setBox={onClickSetActiveRadioBox} data={item} active={activeRadioBox} />)}
        </View>
    </>)
}

const CommonRadio = ({ setBox, data, active }: { setBox: (num: number) => void, data: skill, active: number }) => <TouchableOpacity>
    <View style={styles.radioWrapper} onTouchEndCapture={() => { setBox(data.id) }}>
        <View style={styles.redioBox}>
            {active === data.id && <View style={styles.radioBg}></View>}
        </View>
        <Text style={styles.radioText}>{data.name}</Text>
    </View>
</TouchableOpacity>

const FlexBox = () => {
    return (
        <>
            <View style={{ flex: 3, flexDirection: 'row', backgroundColor: "yellow" }}>
                <View style={{ flex: 1, margin: 10, backgroundColor: 'red' }}><Text>Flex 1</Text></View>
                <View style={{ flex: 1, margin: 10, backgroundColor: 'blue' }}><Text>Flex 2</Text></View>
                <View style={{ flex: 1, margin: 10, backgroundColor: 'white' }}><Text>Flex 3</Text></View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'green' }}><Text>Flex 4</Text></View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}><Text>Flex 5</Text></View>
            <View style={{ flex: 1, backgroundColor: 'white' }}><Text>Flex 6</Text></View>
            <View style={{ flex: 1, backgroundColor: 'red' }}><Text>Flex 7</Text></View>
        </>
    )
}

const User = ({ changeTimerVal, timerVal }: { changeTimerVal: () => void, timerVal: number }) => {
    let timer = setInterval(() => {
        console.warn('Timer Executed ', timerVal, 's');
        changeTimerVal();
    }, 1000)
    useEffect(() => {
        return () => clearInterval(timer)
    })
    return (
        <View>
            <Text style={{ fontSize: 30, color: 'green' }}>User Component</Text>
        </View>
    )
}

export default Applife