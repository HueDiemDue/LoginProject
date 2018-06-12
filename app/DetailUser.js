import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { getAllUser } from './Server';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                flexDirection: 'row'
            }}>
                <Image source={{ uri: this.props.item.avatar }}
                    style={{ height: 100, width: 100, margin: 5 }}>

                </Image>

                <View style={{
                    flex: 1,
                    // flexDirections: 'column'
                }}>
                    {/* <Text style={styleDetail.itemText}>{this.props.item.id}</Text> */}
                    <Text style={styleDetail.itemText}>{this.props.item.first_name} {this.props.item.first_name} </Text>
                </View>

            </View>
        );
    }
}

export default class DetailUser extends Component {
    // static navigationOptions = {
    //     title: 'Detail Song',
    // };
    constructor(props) {
        super(props)
        this.state = ({
            userFromServer: [],

        });
        this.refreshDataFromServer = this.refreshDataFromServer.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getAllUser().then((users) => {
            console.log(users);
            this.setState({ userFromServer: users });
            console.log("d");
        }).catch((error) => {
            console.log("error");
            this.setState({ userFromServer: [] });
        });
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#004466'
            }}>
                <FlatList
                    data={this.state.userFromServer}
                    // data = {dataLogin}
                    renderItem={({ item, index }) => {
                        return (<FlatListItem item={item} index={index}>
                        </FlatListItem>)
                    }}
                    keyExtractor={(item, index) => item.id}
                >

                </FlatList>
            </View>
        );

    }
}
const styleDetail = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#004466',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    itemText: {
        color: 'white',
        fontSize: 18,
        padding: 10
    }
});


