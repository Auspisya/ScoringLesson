import axios from "axios";
import React, {useState} from "react";
import { Button, TextInput, View } from "react-native";

//Export default - вызывается при запуске приложения, поэтому здесь обычный экспорт

export function LoginPage({navigation}) {
        const onSubmitFormHandler = async () => {
            navigation.reset({
                index: 0,
                routes: [{name: "Профиль пользователя"}]
        });
    }
    return(
        <View>
            <TextInput placeholder="Введите логин..."/>
            <TextInput placeholder="Введите пароль..."/>

            <Button title="Войти" onPress={onSubmitFormHandler}/>
        </View>
    );
}