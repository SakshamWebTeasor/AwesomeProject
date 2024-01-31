import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, ScrollView, SectionList } from 'react-native';
import styles from './style';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.AppView}>
      <Text style={styles.AppText}>Count: {count}</Text>
      <ChildComponent onIncrement={incrementCount} />
    </View>
  );
}

function ChildComponent({ onIncrement }: { onIncrement: () => void }) {
  return (
    <View style={styles.ChildView}>
      <Text style={styles.ChildText}>Child Component</Text>
      <Button title="Increment Count" onPress={onIncrement} />
      <Text style={styles.RandomText}>Data Data</Text>
    </View>
  );
}

interface data {
  id: number,
  name: string,
  data: string[],
  class: number
}

function App() {

  const Data: data[] = [
    { id: 1, name: 'Saksham', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 2, name: 'Ram', class: 10, data: ['node', 'javascript', 'typescript'] },
    { id: 3, name: 'Shyam', class: 10, data: ['react', 'javascript', 'react-native', 'Html', 'Css'] },
    { id: 4, name: 'Mohan', class: 10, data: ['javascript', 'angular', 'Html', 'Css', 'typescript'] },
    { id: 5, name: '5', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'Html', 'Css'] },
    { id: 6, name: '6', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'Html', 'typescript'] },
    { id: 7, name: '7', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'Css', 'typescript'] },
    { id: 8, name: '8', class: 10, data: ['react', 'node', 'javascript', 'angular', 'Html', 'Css', 'typescript'] },
    { id: 9, name: '9', class: 10, data: ['react', 'node', 'javascript', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 10, name: '10', class: 10, data: ['react', 'node', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 11, name: '11', class: 10, data: ['react', 'javascript', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 12, name: '12', class: 10, data: ['node', 'javascript', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 13, name: '13', class: 10, data: ['javascript', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 14, name: '14', class: 10, data: ['react', 'angular', 'react-native', 'Html', 'Css', 'typescript'] },
    { id: 15, name: '15', class: 10, data: ['react', 'node', 'Css', 'typescript'] },
    { id: 16, name: '16', class: 10, data: ['react', 'node', 'javascript', 'Html', 'Css', 'typescript'] },
    { id: 17, name: '17', class: 10, data: ['react', 'node', 'javascript', 'angular', 'Css', 'typescript'] },
    { id: 18, name: '18', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'typescript'] },
    { id: 19, name: 'Sohan', class: 10, data: ['react', 'node', 'javascript', 'angular', 'react-native', 'Html'] }
  ]
  return (
    <View style={styles.AppView}>
      {/* <Text style={styles.AppText}>Lifting State Up Example</Text>
      <ParentComponent /> */}
      {/* <NonFormComponent /> */}
      {/* <ListWithFlatListComp Data={Data} /> */}
      {/* <ListingUsingMap Data={Data} /> */}
      {/* <GridViewComp Data={Data} /> */}
      <SectionListing Data={Data} />
    </View>
  );
}

const NonFormComponent = () => {
  const [name, setName] = useState<string>('');
  const handleChangeName = (inputName: string) => {
    setName(inputName);
  }
  const [email, setEmail] = useState<string>('');
  const handleChangeEmail = (inputEmail: string) => {
    setEmail(inputEmail);
  }
  const [password, setPassword] = useState<string>('');
  const handleChangePassword = (inputPass: string) => {
    setPassword(inputPass);
  }

  const [display, setDisplay] = useState<boolean>(false);
  const handleClearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  }

  return (
    <View>
      {!display && <><Text style={{ fontSize: 30 }}>Handle Text Input</Text>
        <TextInput style={styles.textInput} placeholder='Enter Your Name' value={name} onChangeText={handleChangeName}></TextInput>
        <Button title="Clear Name" onPress={() => handleChangeName('')} />
        <TextInput style={styles.textInput} placeholder='Enter Your Email' value={email} onChangeText={handleChangeEmail}></TextInput>
        <Button title="Clear Email" onPress={() => handleChangeEmail('')} />
        <TextInput style={styles.textInput} placeholder='Enter Your Password' value={password} onChangeText={handleChangePassword} secureTextEntry={true}></TextInput>
        <Button title="Clear Password" onPress={() => { handleChangePassword('') }} />
        <View style={styles.ChildView}>
          <Button title="Submit" color="green" onPress={() => setDisplay(true)} />
        </View></>}
      {display && <View>
        <Text style={{ fontSize: 15 }}>Name: {name}</Text>
        <Text style={{ fontSize: 15 }}>Email: {email}</Text>
        <Text style={{ fontSize: 15 }}>Password: {password}</Text>
        <View style={styles.ChildView}>
          <Button title="Clear All" onPress={handleClearForm} />
        </View>
      </View>}
    </View>
  )
}

const ListWithFlatListComp = (props: any) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Listing With FlatList</Text>
      <FlatList
        data={props.Data}
        renderItem={({ item }) => <Text style={styles.ChildBText}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const ListingUsingMap = (props: any) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Listing With Map And ScrollView</Text>
      <ScrollView>
        {props.Data.map((item: any) => {
          return (<Text style={styles.ChildBText}>{item.name}</Text>)
        })}
      </ScrollView>
    </View>
  )
}

const GridViewComp = (props: any) => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Grid with Dynamic Data</Text>
      <ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          {props.Data.map((item: any) => {
            return (<Text style={styles.tabComp}>{item.name}</Text>)
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const SectionListing = ({ Data }: any) => {
  return (
    <View>
      <Text style={styles.AppText}>Section List In React-Native</Text>
      <SectionList
        sections={Data.map((item: data) => ({
          data: item.data,
          title: item.name, // Use 'name' as the section title
          id: item.id,
          class: item.class,
        }))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.tabComp}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.ChildBText}>{section.title}</Text> //item.name
        )}
      />
    </View>
  )
}

export default App;