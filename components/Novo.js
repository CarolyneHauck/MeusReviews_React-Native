//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import { TextInput } from 'react-native-paper';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';
import BG from '../images/bg.png';
import AddLogo from './Add';

// create a component
class Post extends Component {

	state={
		title:"",
		content:""
	}

	submit = () =>{
		this.props.postBlogs(this.state.title, this.state.content)
		this.setState({
			title:'',
			content:''
		})
		this.props.navigation.navigate('Principal')
	}

	render() {
		return (
			<ImageBackground style={styles.container} source={BG} >
				<View style={styles.container}>
					<View style={styles.logoContainer}>
						<AddLogo/>
					</View>
					<TouchableOpacity>
						<Text style={styles.titleText}>MEU NOVO REVIEW</Text>
					</TouchableOpacity>
					<TextInput multiline style={styles.inputTitle} placeholder="Título" onChangeText={title => this.setState({title})} value={this.state.title} />
					<TextInput multiline style={styles.inputContent} placeholder="Conteúdo" onChangeText={content => this.setState({content})} value={this.state.content} />
					<TouchableOpacity style={styles.buttonContainer} onPress={this.submit} >
						<Text style={styles.buttonText}>Enviar</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center',
        padding:30,
	},

	titleText:{
        paddingVertical: 15,
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },

	inputTitle:{
        maxHeight: 50,
        backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
	},

	logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    },
	
	inputContent:{
		backgroundColor:'rgba(255,255,255,.5)',
        paddingLeft:10,
        marginBottom:15,
		borderRadius:5,
		maxHeight: 300,
        fontSize:15,
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
export default connect(null, {postBlogs})(Post);