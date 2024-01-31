import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    AppView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    AppText: { fontSize: 24 },
    ChildView: { marginTop: 20 },
    ChildText: { fontSize: 18, color: 'red' },
    ChildBText: { fontSize: 20, color: 'white', padding: 10, borderColor: 'black', borderWidth: 1, margin: 10, backgroundColor: 'blue', justifyContent:'space-between' },
    paddingHorizontal112:{paddingHorizontal:112},
    truncate: { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' },
    RandomText: { color: '#fff', fontSize: 25, backgroundColor: '#000', marginTop: 20, padding: 10, borderRadius: 10, height: 100, textAlignVertical: 'center', borderColor: '#000', borderWidth: 2 },
    textInput: { fontSize: 18, color: 'black', borderWidth: 2, borderColor: 'black', margin: 'auto' },
    tabComp: { fontSize: 25, backgroundColor: 'blue', color: '#fff', margin: 5, padding: 5, width: 120, height: 120, textAlignVertical: 'center', textAlign: 'center' },
    main: { flex: 1 },
    button: { backgroundColor: '#bbb', color: '#fff', textAlign: 'center', padding: 10, margin: 10, fontSize: 24, borderRadius: 8, shadowOpacity: 1, elevation: 10, shadowColor: 'black' },
    button2: { padding: 2, margin: 3, fontSize: 12 },
    success: { backgroundColor: 'green' },
    warning: { backgroundColor: 'yellow', color: 'black' },
    warnSky: { backgroundColor: 'skyblue', color: 'black' },
    primary: { backgroundColor: 'blue' },
    error: { backgroundColor: 'red' },
    main2: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    radioText: { fontSize: 20, color: 'black' },
    redioBox: { height: 40, width: 40, borderColor: 'black', borderRadius: 20, margin: 10, borderWidth: 2 },
    radioWrapper: { flexDirection: 'row', alignItems: 'center' },
    radioBg: { backgroundColor: 'skyblue', height: 30, width: 30, borderRadius: 20, marginTop: 3, marginLeft: 3 },
    modalButton: { flex: 1, justifyContent: 'flex-end' },
    centeredView: { flex: 1, justifyContent: "center", alignItems: "center" },
    modalView: { backgroundColor: "skyblue", borderRadius: 40, padding: 20, shadowColor: "black", elevation: 5 },
    mBottom: { marginBottom: 15 },
    modal: { flex: 1, backgroundColor: 'rgba(50,50,50,.5)', justifyContent: 'center', alignItems: 'center' },
    body: { backgroundColor: '#fff', height: 300, width: 300, padding: 20, justifyContent: 'flex-end', borderRadius: 20 },
    dataWrapper:{flexDirection:'row', justifyContent:'space-around', backgroundColor:'orange', margin:5, padding: 5},
    AppView2: { flex: 1, justifyContent: 'center'},
    button3: { backgroundColor: '#bbb', color: '#fff', textAlign: 'center', padding: 10, margin: 5, fontSize: 15, borderRadius: 8, shadowOpacity: 1, elevation: 10, shadowColor: 'black' }
});

export default styles;
