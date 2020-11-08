//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import {editBlog} from '../actions';
import {connect} from 'react-redux'

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
			<View style={styles.container}>
				<Text>Meu novo Review</Text>
				<TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="Título" onChangeText={title => this.setState({title})} value={this.state.title} />
        		<TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="Conteúdo" onChangeText={content => this.setState({content})} value={this.state.content} />
				<Button title="Enviar" onPress={this.submit} />
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding:30,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default connect(null, {editBlog})(Edit);