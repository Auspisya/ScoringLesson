import axios from "axios";
import React, {useState} from "react";
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image, ScrollView} from "react-native";

export function RegPage() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const RegButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );

      const onSubmitFormHandlerReg = async () => {

        const responcePost = await axios.post(`https://test-api.easy4.ru/create-user`, {login, password, roleName: "Клиент"})
        if(responcePost.status = 200){

            alert("Вы успешно зарегистрировались!")

            navigation.reset({
            
                //Резет не позволяет вернуться назад
                //Индексы нужны, чтобы вести историю переходов
                
                index: 0,
                routes: [{name: "Авторизация"}]
        });
    }
    else{
      alert("Невозможно зарегистрироваться.")
    }
}

    return(
            <View style={styles.screenContainer}>

            <Text style={styles.defaultTitle}>Создание аккаунта</Text>

            <TextInput placeholder="Введите логин..." value={login} onChangeText={onLoginHandler} style={styles.textInputContainer}/>

            <TextInput placeholder="Введите пароль..." value={password} onChangeText={onPasswordHandler} style={styles.textInputContainer}/>

            <RegButton title="Зарегистрироваться" onPress={onSubmitFormHandlerReg}> </RegButton>

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
    buttonContainer: {
      elevation: 8,
      backgroundColor: "#43BBAB",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 300,
      margin: 5
    },
    buttonText: {
      fontSize: 17,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    defaultText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
      alignSelf: "center"
    },
    textInputContainer: {
        backgroundColor: "#E0E7DD",
        width: 300,
        fontSize: 15,
        borderRadius: 10,
        height: 40,
        textAlign: "center",
        margin: 5,
        color: "black"
    },
    imageContainer: {
      width: 400,
      height: 400
    },
    defaultTitle: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      alignSelf: "center",
      marginBottom: 20
    },
    regText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
      alignSelf: "center",
      marginLeft: 6,
      marginTop: 20,
    },
  });