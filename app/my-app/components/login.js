import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from "react-native";
import React from 'react';
import MaskInput from "react-native-mask-input";

//Dimensão Tela
const { width, height } = Dimensions.get('screen');

//Usuario
const user = {
    username: "user",
    pass: "senai123"
}

export default function Login({ navigation }){

    //states
    const [user, setUsername] = React.useState('user')
    const [pass, setPass] = React.useState('senai123')

    //função
    const validaUsuario = () => {
        if( pass === user.pass && usersname === user.username){
            navigation.navigate("Menu", { name:'Menu' })
        }
    }

    //view
    return(
        <View style={styles.container}>
            <Text>Formulario de Cadastro</Text>
            <View style={styles.form}>

                {/* USERNAME */}
                <MaskInput
                    style={styles.textInput}
                    onChangetext={(masked, unmasked) => setUsername(masked)}
                    value={username}
                    placeholder="Username"
                    />

                { /* SENHA */ }
                <MaskInput
                    mask={[ /\d/, /\d/, /\d/, /\d/ , /\d/ , /\d/ ]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPass(masked)}
                    value={pass}
                    placeholder="Senha"
                    keybordType="Numeric"
                />

                <TouchableOpacity onPress={validaUsuario}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    form: {
        width: width,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textInput: {
        padding: 5,
        height: 40,
        width: 200,
        borderColor: '#006eff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
});