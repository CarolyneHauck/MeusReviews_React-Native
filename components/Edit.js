//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import {editBlog} from '../actions';
import {connect} from 'react-redux';
import BG from '../images/bg.png'

// create a component
class Edit extends Component {

	state={
		title:this.props.navigation.state.params.title,
		content:this.props.navigation.state.params.content,
		key:this.props.navigation.state.params.key
	}

	submit = () =>{
		this.props.editBlog(this.state.title, this.state.content, this.state.key);

		this.setState({
			title:"",
			content:"",
		   	key:""
		})
	
		this.props.navigation.navigate("Blogs")
	}

	render() {
		return (
			<ImageBackground style={styles.container} source={BG} >
				<View style={styles.container}>
					<TouchableOpacity>
						<Text style={styles.titleText}>EDITANDO</Text>
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
        flex: 1,
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
export default connect(null, {editBlog})(Edit);