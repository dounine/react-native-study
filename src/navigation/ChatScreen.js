import React,{Component} from 'react';
import {StyleSheet,Text, View,Image,Button} from 'react-native';
import Chat from '../chat/Chat';

export default class ChatScreen extends Component {

    static navigationOptions = {
        title: '消息',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../icons/chat.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return <Chat></Chat>
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});