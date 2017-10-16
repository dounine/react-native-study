import React, {Component} from 'react';
import { Button,TouchableHighlight1, Image, ListView, StyleSheet, Text, View} from 'react-native';


var messageLists = ["1","asdf","33","aaa"];

export default class MessageContainer extends Component {


    constructor(){
        super();

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                return r1.hash !== r2.hash;
            }
        });

        this.state = {
            dataSource:dataSource.cloneWithRows(messageLists)
        }
    }


    renderRow(rowData,selectID,rowID){
        return(
            <View>
                <Text>{rowData}</Text>
            </View>
        )
    }

    render() {

        return <View style={[styles.container]}>
            <ListView
                initialListSize={20}
                pageSize={20}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            >

            </ListView>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})