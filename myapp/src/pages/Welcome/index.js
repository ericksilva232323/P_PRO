import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    source={require('../../assets/background.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View  style={styles.containerForm}>
                <Text style={styles.title}>APP for Mandarin Learning!</Text>
                <Text style={styles.text}>Começe Já</Text>

                <TouchableOpacity style=
                {styles.button}
                onPress={ () => navigation.navigate('MainMenu')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'##808080'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'##a0a0a0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '##c0c0c0',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        color:'#800000',
        fontSize:24,
        fontWeight:'bold',
        marginTop: 28,
        marginBottom: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    text:{
        color:'#800000'
    },
    button:{
        position: 'absolute',
        backgroundColor: '##a0a0a0',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: '18',
        color: '##a0a0a0',
        fontWeight: 'bold'
    }
})