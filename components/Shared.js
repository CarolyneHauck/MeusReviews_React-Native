//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import BG from '../images/bg.png';
import firebase from '../firebase'
// create a component
const Shared = (props) => {

    const [blog, setBlog] = useState({
        title: props.navigation.state.params.title,
        content: props.navigation.state.params.content,
        userId: props.navigation.state.params.userId,
        usersAllowed: props.navigation.state.params.usersAllowed,
        key: props.navigation.state.params.key
    })

    const [email, setEmail] = useState("");

    const [users, setUsers] = useState([]);

    const [error, setError] = useState("");


    useEffect(() => {
        firebase.database().ref('/users').on('value', snapshot => {
            const users = snapshot.val();
            const result = Object.keys(users)
                .map((key) => {
                    return { id: key, ...users[key] };
                })
            setUsers(result);
        })
    }, []);

    const submit = () => {

        const user = firebase.auth().currentUser;
        const userFind = users.find(e => e.email === email && user.email !== e.email);
        if (!userFind) {
            setError('E-mail náo encontrado.');
            return;
        }

        const { title, content, usersAllowed,userId } = { ...blog };
        const teste = getUserAllowed(usersAllowed, userFind);
        console.log({ title, content, usersAllowed: teste,userId });

        firebase.database().ref(`/blogs`).child(blog.key).update({ title, content, usersAllowed: teste,userId });


        props.navigation.navigate("Blogs")
    }

    const getUserAllowed = (usersAllowed,userFind) => {
        
        if (usersAllowed) {
           return [userFind.uid, ...usersAllowed];
        } else {
            return [userFind.uid];
        }
    }


    return (
        <ImageBackground style={styles.container} source={BG} >
            <View style={styles.container}>
                <TouchableOpacity>
                    <Text style={styles.titleText}>COMPARTILHAR</Text>
                </TouchableOpacity>
                <TextInput multiline style={styles.inputTitle} placeholder="E-mail" onChangeText={email => setEmail(email)} value={email} />
                <TouchableOpacity style={styles.buttonContainer} onPress={submit} >
                    <Text style={styles.buttonText}>Compartilhar</Text>
                </TouchableOpacity>
                <Text style={styles.errorText} >
                    {error}
                </Text>
            </View>
        </ImageBackground>
    );

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },

    titleText: {
        paddingVertical: 15,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    inputTitle: {
        maxHeight: 50,
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        fontSize: 15,
    },

    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContent: {
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 5,
        maxHeight: 300,
        fontSize: 15,
    },

    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },

    errorText: {
        fontSize: 25,
        color: 'red',
        alignSelf: 'center',
        marginTop: 10

    },

    buttonContainer: {
        backgroundColor: '#7c74fc',
        padding: 15,
        borderRadius: 8
    }
});



//make this component available to the app
export default connect(null, {})(Shared);