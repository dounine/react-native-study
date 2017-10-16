import React,{Component} from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';

export default class InterestScreen extends Component {

    static navigationOptions = {
        title: '感兴趣',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../icons/interest.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return <View>
            <Text>mine page</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});