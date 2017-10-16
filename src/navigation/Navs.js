import React from 'react';
import {StyleSheet,Image,Button} from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation';
import InterestScreen from './InterestScreen';
import DynamicScreen from './DynamicScreen';
import MeetScreen from './MeetScreen';
import MineScreen from './MineScreen';
import ChatScreen from './ChatScreen';

const SimpleApp = TabNavigator({
    Chat: {screen: ChatScreen},
    Meet: {screen: MeetScreen},
    Interest: {screen: InterestScreen},
    Dynamic: {screen: DynamicScreen},
    Mine: {screen: MineScreen},
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        showIcon:true,
        showLabel:true,
        activeTintColor: 'white',
        labelStyle:{
            fontSize:12
        }
    },
});

export default class App extends React.Component {
    render() {
        return <SimpleApp/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
});