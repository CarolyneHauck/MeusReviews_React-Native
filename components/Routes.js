import Blogs from './Blogs';
import Novo from './Novo';
import Edit from './Edit';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'


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
            headerTitle:"Editando Review"
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
})

export default Routes =createAppContainer(BottomTab)