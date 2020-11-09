//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';
import BG from '../images/bg.png'

// create a component
const LoginForm = () => {
    return (
        <ImageBackground style={styles.container} source={BG} >
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>

                <View style={styles.emailAndPassword}>
                    <EmailAndPassword/>
                </View>
            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },

    logoContainer:{
        flex:2,
        alignItems: 'center',
        justifyContent:'center'
    },

    emailAndPassword:{
        flex:2
    },
});

//make this component available to the app
export default LoginForm;