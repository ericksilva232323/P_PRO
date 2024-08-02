import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

export default function Welcome() {
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>APP for Mandarin Learning!</Text>
                <Text style={styles.text}>Começe Já</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    containerLogo:{
        flex:2,
        backgroundColor:'#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#ffeef2',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        color:'#ffa2c4',
        fontSize:24,
        fontWeight:'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color:'#ffa2c4'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#ffdfe5',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        fontSize: '18',
        color: '#ffa2c4',
        fontWeight: 'bold',
    }
})