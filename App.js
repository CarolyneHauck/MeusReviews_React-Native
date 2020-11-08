
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from './components/LoginForm';
import Loading from './components/Loading'
import firebase from './firebase';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'

// create a component
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true,
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <LoginForm/>


        
      case true:
           return <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                    <Routes/>
                  </Provider>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;