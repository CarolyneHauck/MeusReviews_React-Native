//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, ImageBackground } from 'react-native';
import { getBlogs, deleteBlog } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import BG from '../images/bg.png';
import firebase from '../firebase';

// create a component
class Blogs extends Component {
	user = firebase.auth().currentUser;

	componentDidMount() {
		this.props.getBlogs()
	}

	render() {
		return (
			<ImageBackground style={styles.containerBG} source={BG} >
				<FlatList style={{ width: '100%' }}
					data={this.props.listOfBlogs}
					keyExtractor={(item) => item.key}
					showsVerticalScrollIndicator={false}
					renderItem={({ item, index }) => {
						return (
							<View style={{ elevation: 8, marginBottom: 15, borderRadius: 15, 
										backgroundColor: item.userId === this.user.uid ? '#575FCF' : "#41bfb9", padding: 20 }}>
								<Text style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 15, }} > {item.title}</Text>
								<Text style={{ fontSize: 20, lineHeight: 30, color: '#fff' }}>{item.content}</Text>
								<View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 25 }}>
									{item.userId === this.user.uid ? (
									<TouchableHighlight onPress={() => this.props.navigation.navigate('Shared', { ...item })}>
										<View style={{ marginRight: 15 }}>
											<Icon size={30} color="white" name="share" />
										</View>
									</TouchableHighlight>): null}
									<TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', { ...item })}>
										<View style={{ marginRight: 15 }}>
											<Icon size={30} color="white" name="edit" />
										</View>
									</TouchableHighlight>
									{item.userId === this.user.uid ? (
									<TouchableHighlight onPress={() => this.props.deleteBlog(item.key)} >
										<View>
											<Icon size={30} color="white" name="close" />
										</View>
									</TouchableHighlight>): null}
								</View>
							</View>
						)
					}} />
			</ImageBackground>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},

	containerBG: {
		flex: 1,
		justifyContent: 'center',
		padding: 30,
	},


	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});

function mapStateToProps(state) {

	const listOfBlogs = _.map(state.blogsList.blogsList, (val) => {
		return {
			...val,
		}
	})

	return {
		listOfBlogs
	}
}

//make this component available to the app
export default connect(mapStateToProps, { getBlogs, deleteBlog })(Blogs);