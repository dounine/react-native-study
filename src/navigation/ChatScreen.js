import React,{Component} from 'react';
import {StyleSheet,Text, View,Image,Button} from 'react-native';

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
        return <View>
            <Image
                source={require('../icons/chat.png')}
                // style={[styles.icon, {tintColor: tintColor}]}
            />
                </View>
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});