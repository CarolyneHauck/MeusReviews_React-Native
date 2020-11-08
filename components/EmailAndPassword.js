//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from './firebase';


// create a component
class EmailAndPassword extends Component {
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () =>{
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(this.onLoginSuccess)
        .catch(err => {
            this.setState({
                error:err.message
            })
        })
    }

    onLoginSuccess =  () =>{
        this.setState({
            error:'',
            loading:false
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity>
                    <Text style={styles.titleText}>MEUS.REVIEWS</Text>
                </TouchableOpacity>

                <TextInput 
                placeholder="user@email.com" 
                style={styles.input} 
                value={this.state.email}
                onChangeText={email=> this.setState({email:email})}
                />
    
                <TextInput 
                placeholder="password" 
                style={styles.input} 
                value={this.state.password}
                onChangeText={password=> this.setState({password:password})}
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onBottomPress} >
                     <Text style={styles.buttonText}>Login</Text>
                 </TouchableOpacity>

                <Text style={styles.errorText} >
                         {this.state.error}
                     </Text>
            </View>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },

    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    },

    errorText:{
        fontSize:25,
        color:'red',
        alignSelf:'center',
        marginTop:10

    },

    titleText:{
        paddingVertical: 15,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },

    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    },

    buttonContainer:{
        backgroundColor:'#7c74fc',
        padding:15,
        borderRadius:8
    }
});

//make this component available to the app
export default EmailAndPassword;