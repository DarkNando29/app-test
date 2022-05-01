import React from 'react';
import {View, Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js';

const RepositoryList = () => {
    return (
        // TODO The components FlatList y ScrollView dan la cualidad de poder hacer scroll
        // FlatList para lista de elementos
        // ScrollView para una pantalla que va a hacer scroll
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: repo}) => (
                <View key={repo.id} style={{padding: 20, paddingBottom: 5, paddingTop: 5}}>
                    <Text style={{fontWeight: 'bold', marginTop: 5}}>Id: {repo.id}</Text>
                    <Text>Full Name: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Language: {repo.Language}</Text>
                    <Text>Forks Count: {repo.forksCount}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Rating: {repo.ratingAverage}</Text>
                    <Text>Reviews: {repo.reviewCount}</Text>
                </View>
            )} 
        >
        </FlatList>
    )
}

export default RepositoryList