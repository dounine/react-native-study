import React,{Component} from 'react';
import {Text, View,StyleSheet,Image} from 'react-native';

export default class MeetScreen extends Component {

    static navigationOptions = {
        title: '遇见',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../icons/meeted.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    render() {
        return <View>
            <Text>meet page</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    },
});