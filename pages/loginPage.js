import axios from "axios";
import React, {useState} from "react";
import { Button, TextInput, View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";

//Export default - вызывается при запуске приложения, поэтому здесь обычный экспорт

export function LoginPage({navigation}) {

        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");

        const onLoginHandler = (login) => setLogin(login);
        const onPasswordHandler = (password) => setPassword(password);

        const AuthImage = () => (
          <Image source = {require('./images/auth-icon.png')} style={styles.imageContainer}/>
       );

        const AuthButton = ({ onPress, title }) => (
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          );

          const RegButton = ({ onPress, title }) => (
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          );

        const onSubmitFormHandler = async () => {

            const responceGet = await axios.get(`https://test-api.easy4.ru/auth?login=${login}&password=${password}`, {})
            if(responceGet.status = 200){

                alert("Вы успешно вошли!")

                navigation.reset({
                
                    //Резет не позволяет вернуться назад
                    //Индексы нужны, чтобы вести историю переходов
                    
                    index: 0,
                    routes: [{name: "Профиль пользователя"}]
            });
        }
        else{
          alert("Данные введены неверно!")
        }
    }

    return(
        <View style={styles.screenContainer}>

            <AuthImage></AuthImage>

            <Text style={styles.defaultTitle}>Вход в систему</Text>

            <TextInput placeholder="Введите логин..." value={login} onChangeText={onLoginHandler} style={styles.textInputContainer}/>
            
            <TextInput placeholder="Введите пароль..." value={password} onChangeText={onPasswordHandler} style={styles.textInputContainer}/>

            <AuthButton title="Войти" onPress={onSubmitFormHandler}> </AuthButton>

            <Text style={styles.regText}> Нет аккаунта? - Зарегистрируйтесь. </Text>

            <RegButton title="Регистрация" onPress={() => navigation.navigate('Регистрация')}> </RegButton>

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
        color: "black",
    },
    imageContainer: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginLeft: 25
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