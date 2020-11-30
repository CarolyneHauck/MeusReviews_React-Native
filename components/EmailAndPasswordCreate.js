//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from '../firebase';


// create a component
class EmailAndPasswordCreate extends Component {
    constructor(props) {
        super(props);
      }

    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }

    onBottomPress = () =>{
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(result => {
            const user = {email:result.user.email, uid:result.user.uid}
            firebase.database().ref('/users').push(user)
            firebase.auth()
                    .signOut()
                    .then(e => this.props.setLogin(true))})
        .catch(err => {
            this.setState({
                error:err.message
            })
        })

    }

    onLoginSuccess =  () =>{
        this.props.setLogin(true);
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
                     <Text style={styles.buttonText}>Cadastrar</Text>
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
export default EmailAndPasswordCreate;