import axios from "axios";
import React, {useState} from "react";
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export function RegPage({navigation}) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = (login) => setLogin(login);
    const onPasswordHandler = (password) => setPassword(password);

    const RegImage = () => (
      <Image source = {require('./images/reg-icon.png')} style={styles.imageContainer}/>
   );

    const RegButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );

      const onSubmitFormHandlerReg = async () => {

        const responcePost = await axios.post(`https://test-api.easy4.ru/create-user`, {login, password, roleName: "Клиент"})
        if(responcePost.status = 200 && login !== "" && password !== ""){

            alert("Вы успешно зарегистрировались!")

            navigation.reset({
                index: 0,
                routes: [{name: "Авторизация"}]
        });
        }
        else{
          alert("Пожалуйста, введите все значения!")
        }
}

    return(
      <View style={styles.screenContainer}>

        <RegImage></RegImage>

        <Text style={styles.defaultTitle}>Создание аккаунта</Text>

        <TextInput placeholder="Введите логин..." value={login} onChangeText={onLoginHandler} style={styles.textInputContainer}/>

        <TextInput placeholder="Введите пароль..." value={password} onChangeText={onPasswordHandler} style={styles.textInputContainer} secureTextEntry={true}/>

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
      backgroundColor: "#2e90c6",
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
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 10
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