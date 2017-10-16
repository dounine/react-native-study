import React,{Component} from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';

export default class MineScreen extends Component {

    static navigationOptions = {
        title: '我',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../icons/mine.png')}
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