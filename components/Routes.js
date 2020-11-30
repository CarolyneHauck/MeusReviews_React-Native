import Blogs from './Blogs';
import Novo from './Novo';
import Edit from './Edit';
import Shared from './Shared';
import LoginForm from './LoginForm';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const Principal =createStackNavigator({
    Blogs:{
        screen:Blogs,
        navigationOptions:() => ({
            headerTitle:"Meus Reviews"
        })
    },
    Edit:{
        screen:Edit,
        navigationOptions:() => ({
            headerTitle:"",
        })
    },
    Shared:{
        screen:Shared,
        navigationOptions:() => ({
            headerTitle:"",
        })
    },
},{
    headerLayoutPreset:"center"
})

const BottomTab = createBottomTabNavigator({
    Principal:{
        screen:Principal
    },
    Novo:{
        screen:Novo,
        navigationOptions:() => ({
            headerTitle:"Novo",
        })
    },
    Sair:{
        screen:LoginForm,
        navigationOptions:() => ({
            headerTitle:"LoginForm",
        }),
    }
})

export default Routes =createAppContainer(BottomTab)