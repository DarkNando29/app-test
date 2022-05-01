import React from 'react';
import {Text, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList';

const Main = () => {
    return (
        // TODO create a new component
        <View style={{marginTop: Constants.statusBarHeight, flexGrow: 1}}>
            <Text> Hello</Text>
            <RepositoryList/>
        </View>
        //min 27:55
    )
}

export default Main