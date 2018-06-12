import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const apiGetAllUser = 'https://reqres.in/api/users?page=2';

async function getAllUser() {
    try {
        let response = await fetch(apiGetAllUser);
        let responseJson = await response.json();
        // return responseJson.data;
        return responseJson.data;
    } catch (error) {
        console.log("Error get list : " + error);
    }
}
export { getAllUser };
