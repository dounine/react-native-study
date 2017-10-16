import React,{Component} from 'react';
import {StyleSheet,Text, View,Image,Button} from 'react-native';
import MessageContainer from './MessageContainer';

export default class Chat extends Component{

    render(){

        return <View style={[styles.container]}>
            <MessageContainer></MessageContainer>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})