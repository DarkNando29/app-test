import React from 'react';
import {View, Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js';
import RepositoryItem from './RepositoryItem.js';

const RepositoryList = () => {
    return (
        // TODO The components FlatList y ScrollView dan la cualidad de poder hacer scroll
        // FlatList para lista de elementos
        // ScrollView para una pantalla que va a hacer scroll
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo}) => (
                <RepositoryItem {...repo}/>
            )} 
        >
        </FlatList>
    )
}

export default RepositoryList