import React from "react";
import {creatAppContainer, createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";
export default function App(){
    return <AppContainer/>;
}

const appStackNavigator=createStackNavigator({
    Home:{

        screen: HomeScreen,
        navigationOptions:{
            headerShown:false
        }
    
    },
    Details:{
        screen:DetailsScreen
    }
},
{initialRouteName:"Home"});

const AppContainer=createAppContainer(appStackNavigator)