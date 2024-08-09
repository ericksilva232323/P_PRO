import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import * as Animatable from 'react-native-animatable'

export default function SingIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite seu e-mail...."
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    style={styles.input}
                />
                <TouchableOpacity style={style.button}>
                    <Text style={styles.buttontext}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonRegister}>
                    <Text style={styles.registertext}>Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const style = StyleSheet.created({
    container:{
        Flex:1,
        backgroundColor: '#808080'
    }
})