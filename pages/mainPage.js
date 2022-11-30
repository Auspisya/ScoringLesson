import axios from "axios";
import React from "react";
import { Text, StyleSheet, View} from "react-native";
import { authorizedUser } from './user'

export function MainPage() {

return(
   <View style={styles.screenContainer}>
         <Text style={styles.defaultTitle}> Данные о пользователе: </Text>
         <View style={styles.stackPanel}>
            <Text style={styles.defaultText}> Логин: {authorizedUser.data[0]} </Text>
         </View>
         <View style={styles.stackPanel}>
            <Text style={styles.defaultText}> Пароль: {authorizedUser.data[1]} </Text>
         </View>
   </View>
);
}

const styles = StyleSheet.create({
   screenContainer: {
     flex: 1,
     justifyContent: "center",
     padding: 16,
     backgroundColor: "#FDFFFC",
     alignItems: 'center'
   },
   defaultText: {
     color: "#fff",
     fontSize: 20,
     alignSelf: "center",
     backgroundColor: "#8dcdf0",
     marginBottom: 10,
     borderRadius: 10,
     width: 300,
     height: 32,
     textAlign: "center"
   },
   defaultTitle: {
     color: "#fff",
     fontSize: 25,
     fontWeight: "bold",
     alignSelf: "center",
     marginBottom: 20
   },
 });
