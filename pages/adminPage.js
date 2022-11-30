import axios from "axios";
import React, {useEffect, useState} from "react";
import {Text, StyleSheet, View, ScrollView} from "react-native";

export function AdminPage() {

const [listArr, setListArr] = useState([]);

useEffect(() => {responceGet();}, []);
const responceGet = () => {axios.get(`https://test-api.easy4.ru/users`).then((responce) => {
   setListArr(responce.data);
});}

return(
   
   <View style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>

      <Text style={styles.defaultTitle}>Данные о пользователях</Text>
      {listArr.map(Info => (
      <Text style={styles.defaultText}>Логин: {Info.login}{"\n"}   
      Пароль: {Info.password}{"\n"}
      Роль: {Info.roleName}
      </Text>
      ))}
      </ScrollView>
   </View>
);
}

const styles = StyleSheet.create({
   screenContainer: {
     flex: 1,
     justifyContent: "center",
     padding: 16,
     backgroundColor: "#FDFFFC",
   },
   defaultText: {
      color: "#fff",
      fontSize: 14.5,
      alignSelf: "center",
      backgroundColor: "#8dcdf0",
      marginBottom: 10,
      borderRadius: 10,
      width: 350,
      height: 55,
      textAlign: "center"
    },
   defaultTitle: {
     color: "#fff",
     fontSize: 20,
     fontWeight: "bold",
     alignSelf: "center",
     marginBottom: 20
   },
   scrollView: {
      marginLeft: 10
   },
 });