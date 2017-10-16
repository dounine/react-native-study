import React,{Component} from 'react';
import {Text, View,Button} from 'react-native';

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home with Lucy',
    };

    render() {
        const { navigate } = this.props.navigation;
        return <View>
            <Text>Home with Lucy</Text>
            <Button
                onPress={() => navigate('Chat')}
                title="Chat with Lucy"
            />
        </View>
    }
}