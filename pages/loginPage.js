import axios from "axios";
import React, {useState} from "react";
import { Button, TextInput, View } from "react-native";

//Export default - вызывается при запуске приложения, поэтому здесь обычный экспорт

export function LoginPage({navigation}) {

        const [login, setLogin] = useState("");
        const [password, setPassword] = useState("");

        const onLoginHandler = (login) => setLogin(login);
        const onPasswordHandler = (password) => setPassword(password);


        const onSubmitFormHandler = async () => {

            const responceGet = await axios.get('https://test-api.easy4.ru/auth?login=${login}&password=${password}', {})
            if(responceGet.status = 200){

                alert(responceGet.data.description)

                navigation.reset({
                
                    //Резет не позволяет вернуться назад
                    //Индексы нужны, чтобы вести историю переходов
                    
                    index: 0,
                    routes: [{name: "Профиль пользователя"}]
            });
        }
        else{
            alert(responceGet.data.description)
        }
    }
    return(
        <View>
            <TextInput placeholder="Введите логин..." value={login} onChangeText={onLoginHandler}/>
            <TextInput placeholder="Введите пароль..." value={password} onChangeText={onPasswordHandler}/>

            <Button title="Войти" onPress={onSubmitFormHandler}/>
        </View>
    );
}