//import liraries
import React, { Component, useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Logo from './Logo';
import EmailAndPassword from './EmailAndPassword';
import EmailAndPasswordCreate from './EmailAndPasswordCreate';
import BG from '../images/bg.png'

// create a component
const LoginForm = () => {
    const [isLogin, setLogin] = useState(true);
    return (
        <ImageBackground style={styles.container} source={BG} >
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                {isLogin ?
                    <View style={styles.emailAndPassword}>
                        <EmailAndPassword setLogin={setLogin}/>
                    </View> : <View style={styles.emailAndPassword}>
                        <EmailAndPasswordCreate setLogin={setLogin}/>
                    </View>}

            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    logoContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    emailAndPassword: {
        flex: 2
    },
});

//make this component available to the app
export default LoginForm;