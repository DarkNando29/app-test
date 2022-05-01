import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginTop: 5
    }
})

const RepositoryItem = (props) => (
<View key={props.id} style={styles.container}>
                    <Text style={styles.strong}>Id: {props.id}</Text>
                    <Text>Full Name: {props.fullName}</Text>
                    <Text>Description: {props.description}</Text>
                    <Text>Language: {props.Language}</Text>
                    <Text>Forks Count: {props.forksCount}</Text>
                    <Text>Stars: {props.stargazersCount}</Text>
                    <Text>Rating: {props.ratingAverage}</Text>
                    <Text>Reviews: {props.reviewCount}</Text>
                </View>
)

export default RepositoryItem