import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import SwipeOut from 'react-native-swipeout';
class FlatListItem extends Component {
    render() {
        return (
            <SwipeOut>
                <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                flexDirection: 'row'
            }}>
                <Image source={{uri:this.props.item.imgUrl }}
                    style={{ height: 100, width:100, margin:5}}>

                </Image>

                <View style= {{
                    flex:1,
                    flexDirections: 'column'
                }}>
                    <Text style={styleDetail.itemText}>{this.props.item.name}</Text>
                    <Text style={styleDetail.itemText}>{this.props.item.singer}</Text>
                </View>

            </View>
            </SwipeOut>
        );
    }
}

export default class DetailSong extends Component {
    // static navigationOptions = {
    //     title: 'Detail Song',
    // };

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 20
            }}>
                <FlatList data={flatListData}
                    renderItem={({ item, index }) => {
                        return (<FlatListItem item={item} index={index}>
                        </FlatListItem>)
                    }}
                >

                </FlatList>
            </View>
        );

    }
}
var flatListData = [
    {
        "key": "Song1",
        "name": "Cham day noi dau",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Erik"
    },
    {
        "key": "Song2",
        "name": "Tim duoc nhau kho the nao",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Mr Siro"
    },
    {
        "key": "Song3",
        "name": "Em gai mua",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Huong Tram"
    },
    {
        "key": "Song4",
        "name": "Canh hoa tan",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Ha Anh Tuan"
    },
    {
        "key": "Song5",
        "name": "Chay Ngay Di",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Son Tung MTP"
    },
    {
        "key": "Song6",
        "name": "Dung ai nhac ve anh ay",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Bao Anh"
    },
    {
        "key": "Song7",
        "name": "Nguoi la oi",
        "imgUrl": "https://images.shulcloud.com/719/uploads/Icons/song.png",
        "singer": "Karik"
    }
];
module.export = flatListData;

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