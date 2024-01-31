import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from './component/redux/action';

function UserList() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const userList = useSelector((state: any) => state.reducer)?.[0]?.users;
  useEffect(() => {
    dispatch(getUserList());
    setUserData(userList);
  }, [userList]);

  return (
    <View>
      {/* <ScrollView><Text>User List {JSON.stringify(userList)}</Text></ScrollView> */}
      {userData?.length ? (
        userData.map((item: any) => {
          console.log('item', item);
          return <Text>{item.firstName}</Text>;
        })
      ) : (
        <Text>List Is Empty</Text>
      )}
    </View>
  );
}

export default UserList;
